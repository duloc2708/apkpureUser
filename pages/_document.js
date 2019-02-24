import Document, { Head, Main, NextScript } from 'next/document'

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
          <link rel="stylesheet" href="http://apksafety.com/static/styles/font-awesome.min.css"></link>
          <link rel="stylesheet" href="http://apksafety.com/static/styles/animate.min.css"></link>
          <link rel="stylesheet" href="http://apksafety.com/static/styles/style.css"></link>

        </Head>
        <body className="blog-class">
          <div className="root">
            <Main />
          </div>
          <NextScript />
          <script src="http://apksafety.com/static/js/vendor/jquery-2.2.4.min.js"></script>
          <script src="http://apksafety.com/static/js/popper.min.js"></script>
          <script src="http://apksafety.com/static/js/vendor/bootstrap.min.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
          <script src="http://apksafety.com/static/js/easing.min.js"></script>
          <script src="http://apksafety.com/static/js/superfish.min.js"></script>
          <script src="http://apksafety.com/static/js/jquery.ajaxchimp.min.js"></script>
          <script src="http://apksafety.com/static/js/jquery.magnific-popup.min.js"></script>
          <script src="http://apksafety.com/static/js/owl.carousel.min.js"></script>
          <script src="http://apksafety.com/static/js/jquery.tabs.min.js"></script>
          <script src="http://apksafety.com/static/js/mn-accordion.js"></script>
          <script src="http://apksafety.com/static/js/jquery.nice-select.min.js"></script>
          <script src="http://apksafety.com/static/js/mail-script.js"></script>
          <script src="http://apksafety.com/static/js/main.js"></script>
        </body>
      </html>
    )
  }
}
