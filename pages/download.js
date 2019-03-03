import Layout from 'modules/Layout/Layout.js'
import $ from 'jquery';
import DowloadFormView from 'modules/down/DowloadFormView.js'

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}
const Download = (props) => (
  <Layout>
    <DowloadFormView data={props.data} />
  </Layout>
)

Download.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await axios(`${Config.API_URL}articles/get_blog_detail`, { params: { title_slug: id } })
  const { Data } = await res.data
  return { data: Data && Data[0] || {} }
}

export default Download
