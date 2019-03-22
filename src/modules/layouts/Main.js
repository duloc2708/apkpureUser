import Head from 'next/head'
import jQuery from 'jquery';
import $ from 'jquery';
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

import Header from 'modules/header/Header.js'
import FooterFormView from 'modules/footer/FooterFormView.js'


export default ({
  children,
  title = TITLE,
  description = PROPERTY_OG_DESCRIPTION,
  og_type = PROPERTY_OG_TYPE,
  og_image = OG_PROPERTY_IMAGE,
  image_src = OG_PROPERTY_IMAGE,
  twitter_image_src = OG_PROPERTY_IMAGE,
  og_url = PROPERTY_OG_URL,
  tags_keywords = NAME_KEYWORD,
  fb_sdk = '',
}) => (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <meta name="Googlebot" content="index,follow,NOODP" />

        {/* <meta property="fb:app_id" content={APP_ID_FACEBOOK} />
        <link rel="alternate" href={PROPERTY_OG_URL} hrefLang="vi-vn" />
        <meta property="og:url" content={og_url} />
        <meta property="og:site_name" content={TITLE} />
        <meta name="twitter:domain" content={TITLE} />
        <meta name="copyright" content={TITLE} />
        <meta name="revisit-after" content="1 Days" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href={PROPERTY_OG_URL} />
        <title >{title}</title>

        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content={tags_keywords} />
        <meta property="og:type" content={og_type} />
        <link rel="image_src" href={image_src} />
        <meta name="twitter:image:src" content={twitter_image_src} /> */}
        <link rel="stylesheet" href="https://apksafety.com/static/styles/slide.css"></link>
        <link rel="stylesheet" href="https://apksafety.com/static/styles/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://apksafety.com/static/styles/animate.min.css"></link>
        <link rel="stylesheet" href="https://apksafety.com/static/styles/style.min.css"></link>
        <link rel="stylesheet" href="https://apksafety.com/static/styles/custom.min.css"></link>

      </Head>
      <div>
        <Header />
        {children}
        <FooterFormView />
        <script src="https://apksafety.com/static/js/vendor/jquery-2.2.4.min.js"></script>
        <script src="https://apksafety.com/static/js/vendor/bootstrap.min.js"></script>
        <script src="https://apksafety.com/static/js/superfish.min.js"></script>
        <script src="https://apksafety.com/static/js/jquery.magnific-popup.min.js"></script>
        <script src="https://apksafety.com/static/js/jquery.tabs.min.js"></script>
      </div>
    </div>

  )
