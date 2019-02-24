import Document, { Head, Main, NextScript } from 'next/document'
const {
  APP_ID_FACEBOOK,
  CONSTANT_NUMBER_2,
  OG_LOCATION,
  PROPERTY_OG_URL,
  PROPERTY_OG_SITENAME,
  TITLE,
  PROPERTY_OG_TITLE,
  NAME_TWITTER_TITLE,
  NAME_DESCRIPTION,
  PROPERTY_OG_DESCRIPTION,
  NAME_TWITTER_DESCRIPTION,
  NAME_KEYWORD,
  OG_KEYWORD,
  OG_PROPERTY_IMAGE,
  NAME_TWITTER_IMAGE_SRC,
  PROPERTY_OG_TYPE,
  ORG_SITENAME,
  ORG_IMAGE
} = Config
export default class SiteDocument extends Document {
  componentDidMount() {

  }
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="INDEX, FOLLOW" />
          <meta name="Googlebot" content="index,follow,NOODP" />

          <meta property="fb:app_id" content={APP_ID_FACEBOOK} />
          <link rel="alternate" href={PROPERTY_OG_URL} hreflang="vi-vn" />
          <meta property="og:url" content={PROPERTY_OG_URL} />
          <meta property="og:site_name" content={TITLE} />
          <meta name="twitter:domain" content={TITLE} />
          <meta name="copyright" content={TITLE} />
          <meta name="revisit-after" content="1 Days" />
          <meta name="twitter:card" content="summary" />
          <link rel="canonical" href={PROPERTY_OG_URL} />
          <title >{TITLE}</title>
          <meta property="og:title" content={TITLE} />
          <meta name="twitter:title" content={TITLE} />
          <meta name="description" content={NAME_DESCRIPTION} />
          <meta property="og:description" content={NAME_DESCRIPTION} />
          <meta name="twitter:description" content={NAME_DESCRIPTION} />
          <meta name="keywords" content={OG_KEYWORD} />
          <meta property="og:site_name" content={ORG_SITENAME} />
          <meta property="og:image" content={ORG_IMAGE} />

          <link rel="stylesheet" href="http://apksafety.com/static/styles/font-awesome.min.css"></link>
          <link rel="stylesheet" href="http://apksafety.com/static/styles/animate.min.css"></link>
          <link rel="stylesheet" href="http://apksafety.com/static/styles/style.css"></link>

        </Head>
        <body className="blog-class">
          <div className="root">
            <Main />
          </div>
          <NextScript />
          <script src="http://apksafety.com/static/js/vendor/bootstrap.min.js"></script>
          <script src="http://apksafety.com/static/js/vendor/jquery-2.2.4.min.js"></script>
          <script src="http://apksafety.com/static/js/popper.min.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
          <script src="http://apksafety.com/static/js/easing.min.js"></script>
          <script src="http://apksafety.com/static/js/superfish.min.js"></script>
          <script src="http://apksafety.com/static/js/jquery.ajaxchimp.min.js"></script>
          <script src="http://apksafety.com/static/js/jquery.magnific-popup.min.js"></script>
          <script src="http://apksafety.com/static/js/owl.carousel.min.js" defer async>></script>
          <script src="http://apksafety.com/static/js/jquery.tabs.min.js"></script>
          <script src="http://apksafety.com/static/js/mn-accordion.js"></script>
          <script src="http://apksafety.com/static/js/jquery.nice-select.min.js"></script>
          <script src="http://apksafety.com/static/js/mail-script.js"></script>
          {/* <script src="http://apksafety.com/static/js/main.js"></script> */}
        </body>
      </html>
    )
  }
}
