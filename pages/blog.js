import BlogFormView from 'modules/blog/BlogFormView.js'
import Layout from 'modules/layouts/Main';
import Head from 'next/head';
import $ from 'jquery';
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
const Blog = (props) => (
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
