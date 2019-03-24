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
  ORG_IMAGE,
  build_version
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
      </Head>
      <div>
        <Header />
        {children}
        <FooterFormView />
    
      </div>
    </div>

  )
