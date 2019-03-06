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
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <title>Đài truyền hình Hàn Quốc làm tin hội nghị thượng đỉnh như thế nào? | Tinhte.vn</title> */}
      <title>{props.data.title}</title>
      <link rel="apple-touch-icon" href="https://tinhte.vn/styles/uiflex/dimota/logo.og.png" />
      <link rel="alternate" type="application/rss+xml" title="RSS của Tinhte.vn" href="https://tinhte.vn/rss/" />
      <link rel="next" href="threads/dai-truyen-hinh-han-quoc-lam-tin-hoi-nghi-thuong-dinh-nhu-the-nao.2920754/page-2" />
      <link rel="canonical" href="https://tinhte.vn/threads/dai-truyen-hinh-han-quoc-lam-tin-hoi-nghi-thuong-dinh-nhu-the-nao.2920754/" />
      <meta name="description" content="Trong thời gian này, khi mà cuộc họp thượng đỉnh Hoa Kỳ - Triều Tiên đang chuẩn bị diễn ra tại Hà Nội thì việc đưa tin nhanh nhất, hiệu quả nhất được..." /><meta property="author" content="kevin_pump" /><meta property="article:author" content="https://facebook.com/10208889536421702" />
      <meta property="og:site_name" content="Tinhte.vn" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://tinhte.vn/threads/dai-truyen-hinh-han-quoc-lam-tin-hoi-nghi-thuong-dinh-nhu-the-nao.2920754/" />
      <meta property="og:title" content="Đài truyền hình Hàn Quốc làm tin hội nghị thượng đỉnh như thế nào?" />
      <meta property="og:description" content="Trong thời gian này, khi mà cuộc họp thượng đỉnh Hoa Kỳ - Triều Tiên đang chuẩn bị diễn ra tại Hà Nội thì việc đưa tin nhanh nhất, hiệu quả nhất được..." />
      <meta property="fb:app_id" content="145923738846814" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="Đài truyền hình Hàn Quốc làm tin hội nghị thượng đỉnh như thế nào?" />
      <meta property="twitter:description" content="Trong thời gian này, khi mà cuộc họp thượng đỉnh Hoa Kỳ - Triều Tiên đang chuẩn bị diễn ra tại Hà Nội thì việc đưa tin nhanh nhất, hiệu quả nhất được..." />
      <meta property="twitter:url" content="https://tinhte.vn/threads/dai-truyen-hinh-han-quoc-lam-tin-hoi-nghi-thuong-dinh-nhu-the-nao.2920754/" />
      <meta property="og:image" content="https://photo2.tinhte.vn/data/attachment-files/2019/02/4576910_Cover.jpg" />
      <meta property="twitter:image" content="https://photo2.tinhte.vn/data/attachment-files/2019/02/4576910_Cover.jpg" />
      <meta property="og:image:width" content="2048" />
      <meta property="og:image:height" content="1268" />
      <meta property="twitter:image:width" content="2048" />
      <meta property="twitter:image:height" content="1268" />
    </Head>
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
