// import Layout from 'modules/Layout/Layout.js'
import ContentFormView from 'modules/home.content/ContentFormView.js'
import Layout from 'modules/layouts/Main';
import Head from 'next/head';
import $ from 'jquery';
if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}
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
const Index = (props) => (
  <Layout>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{TITLE}</title>
      {/* <meta property="fb:pages" content="122102927812763" /> */}
      <meta property="og:site_name" content="Apksafety.com" />
      <meta name="description" content={TITLE} />
      <meta property="og:site_name" content="Apksafety.com" />
      <meta property="og:image" content='http://apksafety.com/static/img/logo-d.png' />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://Apksafety.com/" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={TITLE} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={TITLE} />
      <meta property="twitter:description" content={TITLE} />
      <meta property="twitter:image" content='http://apksafety.com/static/img/logo-d.png' />
      <meta property="twitter:url" content="https://Apksafety.com/" />
      {/* <meta name="theme-color" content="#192433" /> */}
    </Head>
    <ContentFormView />
  </Layout>
)
export default Index