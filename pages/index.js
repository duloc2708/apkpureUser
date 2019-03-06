// import Layout from 'modules/Layout/Layout.js'
import ContentFormView from 'modules/home.content/ContentFormView.js'
import Layout from 'modules/layouts/Main';
import $ from 'jquery';
if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}
const Index = (props) => (
  <Layout>
    <ContentFormView />
  </Layout>
)
export default Index