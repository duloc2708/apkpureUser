import Layout from 'modules/layouts/Main';
import $ from 'jquery';
if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
}
const Type = (props) => (
    <Layout>
        <span>fawfwa</span>
    </Layout>
)

Type.getInitialProps = async function (context) {
    const { id } = context.query
    return { show: {} }
}
export default Type
