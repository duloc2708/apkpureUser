import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import ReactGA from 'react-ga';
export default class SiteDocument extends Document {
  componentDidMount() {
    // ReactGA.initialize('UA-105970056-1')
    // ReactGA.pageview(document.location.pathname)
  }
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          {styleTags}
          <link rel="shortcut icon" href={`${Config.API_LOCAL_IMAGE}img/fav.ico`} />
          <meta name="referrer" content="origin" />
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
          {/* <script async="" id="__NEXT_PAGE__/" src="/_next/-/page/index.js">
          </script>
          <script async="" id="__NEXT_PAGE__/_app" src="/_next/-/page/_app.js"></script>
          <script async="" id="__NEXT_PAGE__/_error" src="/_next/-/page/_error.js"></script>
          <script src="/_next/static/commons/manifest.js"></script>
          <script src="/_next/static/commons/main.js" /> */}
          <script src="https://apksafety.com/static/js/vendor/bootstrap.min.js"></script>
          <script src="https://apksafety.com/static/js/superfish.min.js"></script>
          <script src="https://apksafety.com/static/js/jquery.magnific-popup.min.js"></script>
          <script src="https://apksafety.com/static/js/owl.carousel.min.js" defer async>></script>
          <script src="https://apksafety.com/static/js/jquery.tabs.min.js"></script>

        </body>
      </html>
    )
  }
}
