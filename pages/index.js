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
      <meta property="fb:pages" content="122102927812763" />
      <meta property="og:site_name" content="Tinhte.vn" />
      <meta name="description" content="Trao đổi về khoa học, công nghệ, thủ thuật điện thoại, máy tính, camera, đồ gia dụng và âm thanh" />
      <meta property="og:site_name" content="Tinhte.vn" />
      <meta property="og:image" content="https://photo2.tinhte.vn/data/attachment-files/2019/02/4563401_og.jpg" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://tinhte.vn/" />
      <meta property="og:title" content="Cộng đồng Khoa học &amp; Công nghệ | Tinh tế" />
      <meta property="og:description" content="Trao đổi về khoa học, công nghệ, thủ thuật điện thoại, máy tính, camera, đồ gia dụng và âm thanh" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="Cộng đồng Khoa học &amp; Công nghệ | Tinh tế" />
      <meta property="twitter:description" content="Trao đổi về khoa học, công nghệ, thủ thuật điện thoại, máy tính, camera, đồ gia dụng và âm thanh" />
      <meta property="twitter:image" content="https://photo2.tinhte.vn/data/attachment-files/2019/02/4563401_og.jpg" />
      <meta property="twitter:url" content="https://tinhte.vn/" />
      <meta name="theme-color" content="#192433" />
    </Head>
    <ContentFormView />
  </Layout>
)
export default Index