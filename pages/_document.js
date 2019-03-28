import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import ReactGA from 'react-ga';
const {
  TITLE
} = Config
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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href={`/static/styles/font-awesome.min.css?v=${Config.build_version}`} as="style" />
          <link rel="stylesheet" href={`/static/styles/animate.min.css?v=${Config.build_version}`} as="style" />
          <link rel="stylesheet" href={`/static/styles/owl.carousel.min.css?v=${Config.build_version}`} as="style" />
          <link rel="stylesheet" href={`/static/styles/style.css?v=${Config.build_version}`} as="style" />

          {styleTags}
          <link rel="shortcut icon" href={`${Config.API_LOCAL_IMAGE}img/fav.ico`} />
          <meta name="referrer" content="origin" />
          <meta property="og:site_name" content="Apksafety.com" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content='static/img/logo-d2-min.png' />
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
          <script defer src={`/static/js/vendor/jquery-2.2.4.min.js?v=${Config.build_version}`} />
          <script defer src={`/static/js/vendor/bootstrap.min.js?v=${Config.build_version}`} />
          <script defer src={`/static/js/easing.min.js?v=${Config.build_version}`} />
          <script defer src={`/static/js/superfish.min.js?v=${Config.build_version}`} />
          <script defer src={`/static/js/jquery.magnific-popup.min.js?v=${Config.build_version}`} />
          <script defer src={`/static/js/jquery.tabs.min.js?v=${Config.build_version}`} />
          <script defer src={`/static/js/main.js?v=${Config.build_version}`} />
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9N8KPK"
              height="0" width="0" style={{ "display": "none", "visibility": "hidden" }} ></iframe>
          </noscript>

        </body>
      </html>
    )
  }
}
