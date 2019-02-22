import Document, { Head, Main, NextScript } from 'next/document'

import stylesheet2 from 'styles/font-awesome.min.css';
import stylesheet3 from 'styles/animate.min.css';
import stylesheet1 from 'styles/style.css';


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
          <style global dangerouslySetInnerHTML={{ __html: stylesheet2 }} />
          <style global dangerouslySetInnerHTML={{ __html: stylesheet3 }} />
          <style global dangerouslySetInnerHTML={{ __html: stylesheet1 }} />

        </Head>
        <body className="blog-class">
          <div className="root">
            <Main />
          </div>
          <NextScript />
          
          <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
          <script src="/static/js/popper.min.js"></script>
          <script src="/static/js/vendor/bootstrap.min.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
          <script src="/static/js/easing.min.js"></script>
          <script src="/static/js/superfish.min.js"></script>
          <script src="/static/js/jquery.ajaxchimp.min.js"></script>
          <script src="/static/js/jquery.magnific-popup.min.js"></script>
          <script src="/static/js/owl.carousel.min.js"></script>
          <script src="/static/js/jquery.tabs.min.js"></script>
          <script src="/static/js/mn-accordion.js"></script>
          <script src="/static/js/jquery.nice-select.min.js"></script>
          <script src="/static/js/mail-script.js"></script>
          <script src="/static/js/main.js"></script>
        </body>
      </html>
    )
  }
}
