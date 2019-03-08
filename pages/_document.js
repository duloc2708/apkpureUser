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
          <link rel="shortcut icon" href={`${Config.API_LOCAL_IMAGE}img/fav.ico`}/>
          
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
          <script src="http://apksafety.com/static/js/vendor/bootstrap.min.js"></script>
          <script src="http://apksafety.com/static/js/popper.min.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
          <script src="http://apksafety.com/static/js/superfish.min.js"></script>
          <script src="http://apksafety.com/static/js/jquery.ajaxchimp.min.js"></script>
          <script src="http://apksafety.com/static/js/jquery.magnific-popup.min.js"></script>
          <script src="http://apksafety.com/static/js/owl.carousel.min.js" defer async>></script>
          <script src="http://apksafety.com/static/js/jquery.tabs.min.js"></script>
          <script src="http://apksafety.com/static/js/mn-accordion.js"></script>
          <script src="http://apksafety.com/static/js/jquery.nice-select.min.js"></script>
          <script src="http://apksafety.com/static/js/mail-script.js"></script>
          <script id="slideIndex">
          </script>
        </body>
      </html>
    )
  }
}
