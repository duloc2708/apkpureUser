import $ from 'jquery';
import DetailFormView from 'modules/detail/DetailFormView.js'
import Layout from 'modules/layouts/Main';
import Head from 'next/head';
import NextSeo from 'next-seo';


if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}
const addJSONLD1 = () => {
  return {
    __html: `
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "apksafety",
    "url": "http://apksafety.com/",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "http://apksafety.com/search?q=123",
        "query-input": "required name=search_term_string"
    }`
  };
};

const addJSONLD2 = () => {
  return {
    __html: `
    "@context": "http://schema.org",
    "@type": "Corporation",
    "name": "apksafety",
    "url": "http://apksafety.com/",
    "logo": "http://apksafety.com/static/img/logo-d.png",
    "sameAs": [
      "https://www.facebook.com/apkpure",
      "https://www.google.com/+Apkpuredownloader",
      "https://twitter.com/apkpure",
      "https://vk.com/apkpurevk",
      "https://www.youtube.com/channel/UCbCOKdnt1yYk4S3I4a034XQ"
    ]`
  };
};
const addJSONLD3 = (type) => {
  return {
    __html: `
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
            {
          "@type": "ListItem",
          "position": 1,
                      "Item": {
                "@id": "http://apksafety.com/${type}",
          "name": ${type}
          }}]`
  };
};


const Post = (props) => (
  <Layout>
    {/* <Head>
      <title>
        {props.data.title}
      </title>
      <meta name="description" content={props.data.title} />
      <meta property="og:title" content={props.data.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`http://apksafety.com/${props.data.type}/${props.data.title_slug}`} />
      <meta property="og:image" content={Config.getImage(props.data.thumbnail)} />
      <meta property="og:description" content={props.data.title} />
    </Head> */}
    <NextSeo
      config={{
        title: props.data.title || 'About us',
        description: props.data.title + 'afawfwafwafa',
        image: Config.getImage(props.data.thumbnail)
      }}
    />
    <DetailFormView data={props.data} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={addJSONLD1()}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={addJSONLD2()}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={addJSONLD3(props.data.type)}
    />
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await axios(`${Config.API_URL}articles/get_blog_detail`, { params: { title_slug: id } })
  const { Data } = await res.data
  return { data: Data && Data[0] || {} }
}

export default Post
