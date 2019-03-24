import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import ReactGA from 'react-ga';
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
          <link rel="preload stylesheet" href={`https://apksafety.com/static/styles/owl.carousel.min.css?v=${Config.build_version}`} as="style" />
          <link rel="preload stylesheet" href={`https://apksafety.com/static/styles/font-awesome.min.css?v=${Config.build_version}`} as="style" />
          <link rel="preload stylesheet" href={`https://apksafety.com/static/styles/animate.min.css?v=${Config.build_version}`} as="style" />
          <link rel="preload stylesheet" href={`https://apksafety.com/static/styles/style.css?v=${Config.build_version}`} as="style" />
          {styleTags}
          <link rel="shortcut icon" href={`${Config.API_LOCAL_IMAGE}img/fav.ico`} />
          <meta name="referrer" content="origin" />
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
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9N8KPK"
              height="0" width="0" style={{ "display": "none", "visibility": "hidden" }} ></iframe>
          </noscript>
        </body>
      </html>
    )
  }
}
