import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import ReactGA from 'react-ga';
import carousel from '../static/styles/owl.carousel.min.css';
import animate from '../static/styles/animate.min.css';
import css from '../static/styles/style.css';

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
          <link rel='preload stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    
       {/* <link rel="preload stylesheet" href={`/static/styles/font-awesome.min.css?v=${Config.build_version}`} as="style" /> */}
          {/* <link rel="preload stylesheet" href={`/static/styles/animate.min.css?v=${Config.build_version}`} as="style" />
               <link rel="preload stylesheet" href={`/static/styles/owl.carousel.min.css?v=${Config.build_version}`} as="style" /> */}
          {/* <link rel="preload stylesheet" href={`/static/styles/style.css?v=${Config.build_version}`} as="style" /> */}
          <style dangerouslySetInnerHTML={{ __html: carousel }} />
          <style dangerouslySetInnerHTML={{ __html: animate }} />
          <style dangerouslySetInnerHTML={{ __html: css }} />
          {styleTags}
          <link rel="shortcut icon" href={`${Config.API_LOCAL_IMAGE}img/fav.ico`} />
          <meta name="referrer" content="origin" />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P9N8KPK');`}} />
          <script defer src={`/static/js/jquery-3.3.1.min.js?v=${Config.build_version}`} />
          <script defer src={`/static/js/bootstrap.min.js?v=${Config.build_version}`} />
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />


          {/* <script dangerouslySetInnerHTML={{
            __html: ` WebFontConfig = {
              google: { families: [ 'Roboto:100,100i,300,400,400i,500,500i,700,700i,900,900i' ] }
          };
      
          (function() {
              var wf = document.createElement('script');
              wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
              wf.type = 'text/javascript';
              wf.async = 'true';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(wf, s);
          })();`}} /> */}


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
