import Layout from 'modules/layouts/Main';
import BlogFormView from 'modules/blog/BlogFormView.js'

import $ from 'jquery';
if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
}
const Blog = (props) => (
    <Layout>
        <BlogFormView data={props.dataInit} />
    </Layout>
)

Blog.getInitialProps = async function (context) {
    const res = await axios(`${Config.API_URL}video/video_by_section`)

    const data = await res.data.Data
    return {
        dataInit: data
    }
}

export default Blog
