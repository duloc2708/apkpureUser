import Layout from 'modules/layouts/Main';
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
  //// lấy link từ file server
  const { name, mineType, title } = context.query
  return {
    data: {
      title: title,
      name: name,
      mineType: mineType
    }
  }

  // lấy link từ apk nhâp
  // const { name, mineType, title } = context.query
  // const res = await axios(`${Config.API_URL}post/get_link_apk`, { params: { title_slug: name } })
  // const { Data } = await res.data
  return { data: [] || '' }
}

export default Download
