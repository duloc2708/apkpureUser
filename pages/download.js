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
  const { name, mineType } = context.query
  return {
    data: {
      name: name,
      mineType: mineType
    }
  }
}

export default Download
