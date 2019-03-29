import $ from 'jquery';
import DetailFormView from 'modules/detail/DetailFormView.js'
import Layout from 'modules/layouts/Main';
import Head from 'next/head';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}
const addJSONLD1 = () => {
  return {
    __html: `
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "apksafety",
    "url": "https://apksafety.com/",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://apksafety.com/search?q=123",
        "query-input": "required name=search_term_string"
    }`
  };
};

const addJSONLD2 = () => {
  return {
    __html: `
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "apksafety",
    "url": "https://apksafety.com/",
    "logo": "static/img/logo-d.png",
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
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
            {
          "@type": "ListItem",
          "position": 1,
                      "Item": {
                "@id": "https://apksafety.com/${type}",
          "name": ${type}
          }}]`
  };
};


const Post = (props) => (
  <Layout>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <title>Đài truyền hình Hàn Quốc làm tin hội nghị thượng đỉnh như thế nào? | Tinhte.vn</title> */}
      <title>{props.data.atr8}</title>
      <link rel="apple-touch-icon" href='static/img/logo-d.png' />
      {/* <link rel="alternate" type="application/rss+xml" title="RSS của Tinhte.vn" href="https://tinhte.vn/rss/" /> */}
      {/* <link rel="next" href="threads/dai-truyen-hinh-han-quoc-lam-tin-hoi-nghi-thuong-dinh-nhu-the-nao.2920754/page-2" /> */}
      <link rel="canonical" href={props.data.atr8} />
      <meta name="description" content={props.data.atr9} />
      {/* <meta property="author" content="kevin_pump" /> */}
      {/* <meta property="article:author" content="https://facebook.com/10208889536421702" /> */}
      <meta property="og:site_name" content="Apksafety.com" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={props.data.atr8} />
      <meta property="og:title" content={props.data.atr8} />
      <meta property="og:description" content={props.data.atr9} />
      {/* <meta property="fb:app_id" content="145923738846814" /> */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={props.data.atr8} />
      <meta property="twitter:description" content={props.data.atr9} />
      <meta property="twitter:url" content={props.data.atr8} />
      <meta property="og:image" content={Config.getImageIndex(props.data.thumbnail, 300, 250)} />
      <meta property="twitter:image" content={Config.getImageIndex(props.data.thumbnail, 300, 250)} />
      <meta property="og:image:width" content="2048" />
      <meta property="og:image:height" content="1268" />
      <meta property="twitter:image:width" content="2048" />
      <meta property="twitter:image:height" content="1268" />
      <link rel="canonical" href={`${Config.API_DOMAIN_CURRENT}${props.data.type}/${props.data.title_slug}`} />
      {/* <script src="https://apksafety.com/static/js/owl.carousel.min.js"></script> */}

    </Head>
    <DetailFormView data={props.data} />
    {/* <script
      dangerouslySetInnerHTML={addJSONLD3(props.data.type)}
    />
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
    /> */}

  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  
  const res = await axios(`${Config.API_URL}articles/get_blog_detail`, { params: { title_slug: id } })
  const { Data } = await res.data
  return { data: Data && Data[0] || {} }
}

export default Post
