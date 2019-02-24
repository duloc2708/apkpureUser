import Layout from 'modules/Layout/Layout.js'
import BlogFormView from 'modules/blog/BlogFormView.js'

import $ from 'jquery';
if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
}
const Type = (props) => (
    <Layout>
        <BlogFormView />
    </Layout>
)

Type.getInitialProps = async function (context) {
    const { id } = context.query
    // const res = await axios(`https://api.tvmaze.com/shows/${id}`)
    // const show = await res.data

    // console.log(`Fetched show a: ${show.name}`)

    return { show: {} }
}

export default Type
