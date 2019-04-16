import Layout from 'modules/layouts/Main';
import BlogFormView from 'modules/blog/BlogFormView.js'

import $ from 'jquery';
if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
}
const Type = (props) => (
    <Layout>
        <BlogFormView data={props.dataInit} />
    </Layout>
)

Type.getInitialProps = async function (context) {
    const res = await axios(`${Config.API_URL}blogs/get_data_user`)
    const data = await res.data.Data
    return {
        dataInit: {
            data: data
        }
    }
}

export default Type
