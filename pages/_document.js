import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import ReactGA from 'react-ga';

import sheet1 from '../static/styles/slide.css'
import sheet2 from '../static/styles/font-awesome.min.css'
import sheet3 from '../static/styles/animate.min.css'
import sheet4 from '../static/styles/style.min.css'
import sheet5 from '../static/styles/custom.min.css'

export default class SiteDocument extends Document {
  componentDidMount() {
    ReactGA.initialize('UA-136793328-1')
    ReactGA.pageview(document.location.pathname)
  }
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          {styleTags}
          <style dangerouslySetInnerHTML={{ __html: sheet1 }} />
          <style dangerouslySetInnerHTML={{ __html: sheet2 }} />
          <style dangerouslySetInnerHTML={{ __html: sheet3 }} />
          <style dangerouslySetInnerHTML={{ __html: sheet4 }} />
          <style dangerouslySetInnerHTML={{ __html: sheet5 }} />
          <link rel="shortcut icon" href={`${Config.API_LOCAL_IMAGE}img/fav.ico`} />
          <meta name="referrer" content="origin" />
          <script src="https://apksafety.com/static/js/vendor/jquery-2.2.4.min.js"></script>

          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P9N8KPK');`}} />

        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />

          <script src="https://apksafety.com/static/js/vendor/bootstrap.min.js"></script>
          <script src="https://apksafety.com/static/js/superfish.min.js"></script>
          <script src="https://apksafety.com/static/js/jquery.magnific-popup.min.js"></script>
          <script src="https://apksafety.com/static/js/jquery.tabs.min.js"></script>

          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9N8KPK"
              height="0" width="0" style={{ "display": "none", "visibility": "hidden" }} ></iframe>
          </noscript>
        </body>
      </html>
    )
  }
}
