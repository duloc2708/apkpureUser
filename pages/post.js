import $ from 'jquery';
import DetailFormView from 'modules/detail/DetailFormView.js'
import Layout from 'modules/layouts/Main';
import Head from 'next/head';
if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}
const Post = (props) => (
  <Layout>
    <Head>
      <title>
        {props.data.title}
      </title>
      <meta name="description" content={props.data.title} />
      <meta property="og:title" content={props.data.title} />
      <meta property="og:url" content={`http://apksafety.com/${props.data.type}/${props.data.title_slug}`} />
    </Head>
    <DetailFormView data={props.data} />
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await axios(`${Config.API_URL}articles/get_blog_detail`, { params: { title_slug: id } })
  const { Data } = await res.data
  return { data: Data && Data[0] || {} }
}

export default Post
