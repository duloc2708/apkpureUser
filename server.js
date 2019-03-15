const express = require('express')
const next = require('next')
const fs = require('fs');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')
const sm = require('sitemap');
var request = require('request-promise');

app.prepare()
  .then(() => {
    const server = express()

    server.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    // parse application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    server.use(bodyParser.json())

    const path = require('path');
    const options = {
      root: path.join(__dirname, '/static'),
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      }
    };


    server.get('/robots.txt', (req, res) => (
      res.status(200).sendFile('robots.txt', options)
    ));
    server.get('/sitemap.xml', (req, res) => (
      request.get(`http://api.apksafety.com/api/articles/sitemapListType`, function (errData, responseList) {
        let { Data } = JSON.parse(responseList.body, true)
        let listURL = [
          { url: `/blog`, changefreq: 'weekly', priority: 0.5 },
        ]
        Data.map(item => {
          listURL.push({ url: `/${item.code}`, changefreq: 'daily', priority: 0.5 })
        })
        request.get(`http://api.apksafety.com/api/articles/sitemapPost`, function (errData, responsePost) {
          let { Data } = JSON.parse(responsePost.body, true)
          Data.map(item => {
            listURL.push({ url: `/${item.type}/${item.title_slug}`, changefreq: 'daily', priority: 0.5 })
          })

          const sitemap = sm.createSitemap({
            hostname: 'https://apksafety.com',
            cacheTime: 600000,        // 600 sec - cache purge period
            urls: listURL
          });

          sitemap.toXML(function (err, xml) {
            if (err) {
              return res.status(500).end();
            }
            res.header('Content-Type', 'application/xml');
            res.send(xml);
          })
        })

      })

    ))

    fs.readFile('./data.json', 'utf8', function (err, data) {
      if (err) throw err;
      const listRoute = JSON.parse(data);
      listRoute.listType.map(item => {

        server.get(`/blog`, (req, res) => {
          const actualPage = '/blog'
          app.render(req, res, actualPage, {})
        })
        server.get(`/download/:name&:mineType&:title`, (req, res) => {
          const actualPage = '/download'
          const queryParams = { name: req.params.name, mineType: req.params.mineType, title: req.params.title }
          app.render(req, res, actualPage, queryParams)
        })
        server.get(`/${item}/:id`, (req, res) => {
          const actualPage = '/post'
          const queryParams = { id: req.params.id }
          app.render(req, res, actualPage, queryParams)
        })

        server.get(`/${item}`, (req, res) => {
          console.log('type>>>>>>>');
          const actualPage = '/type'
          const queryParams = { id: 900 }
          app.render(req, res, actualPage, queryParams)
        })

      })
      server.get('*', (req, res) => {
        return handle(req, res)
      })

      server.listen(3004, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3004')
      })
    });



  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })