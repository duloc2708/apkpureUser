import ContentFormView from 'modules/home.content/ContentFormView.js'
import Layout from 'modules/layouts/Main';
import Head from 'next/head';
import $ from 'jquery';
import lodash from 'lodash'
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
      <meta name="description" content={NAME_DESCRIPTION} />
      <meta property="og:site_name" content="Apksafety.com" />
      <meta property="og:image" content='static/img/logo-d.png' />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://apksafety.com/" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={NAME_DESCRIPTION} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={TITLE} />
      <meta property="twitter:description" content={NAME_DESCRIPTION} />
      <meta property="twitter:image" content='static/img/logo-d.png' />
      <meta property="twitter:url" content="https://apksafety.com/" />
      {/* <meta name="theme-color" content="#192433" /> */}
    </Head>
    <ContentFormView dataInit={props.dataInit} />
  </Layout>
)
Index.getInitialProps = async function (context) {
  // const { id } = context.query

  // const url = 'http://108.61.201.242:8940/api/main/authenticate';
  // // The data we are going to send in our request
  // let data = {
  //   "email": "admin@kolabs.co",
  //   "password": 123456,
  //   "IsAgent": true
  // }
  // // The parameters we are gonna pass to the fetch function
  // let fetchData = {
  //   headers: {
  //     'Content-Type': 'application/json; charset=utf-8'
  //   }
  // }
  // axios.post(url, data, fetchData)
  //   .then(function () {
  //     // Handle response you get from the server
  //   });


  const res = await axios(`${Config.API_URL}post/get_post_by_section`, { params: { type: 'home' } })
  const res2 = await axios(`${Config.API_URL}video/video_by_section`)

  const home = await res.data.Data
  let dataCollection = await res2.data.Data
  dataCollection = dataCollection.slice(0, 6).map(item => {
    return item
  })

  let homeTemp = home
  let slide = homeTemp.filter(x => x.slide == 'true')
  let block1 = lodash.sortBy(homeTemp, 'createdAt')
  block1 = block1.slice(0, 10).map(item => {
    return item
  })
  let block2 = homeTemp.filter(x => x.type == 'game_role_playing')
  block2 = block2.slice(0, 10).map(item => {
    return item
  })
  let block3 = homeTemp.filter(x => x.type != 'game_action' && x.type != 'game_role_playing')
  block3 = block3.slice(0, 6).map(item => {
    return item
  })
  return {
    dataInit: {
      dataCollection: dataCollection,
      slide: slide,
      block1: block1,
      block2: block2,
      block3: block3
    }
  }
}

export default Index