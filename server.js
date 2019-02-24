const express = require('express')
const next = require('next')
const fs = require('fs');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')


app.prepare()
  .then(() => {
    const server = express()

    // parse application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    server.use(bodyParser.json())
  
    fs.readFile('./data.json', 'utf8', function (err, data) {
      if (err) throw err;
      const listRoute = JSON.parse(data);
      listRoute.listType.map(item => {
        server.get(`/${item}/:id`, (req, res) => {
          const actualPage = '/post'
          console.log('post>>>>>>>');

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