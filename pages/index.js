// import Layout from 'modules/Layout/Layout.js'
import ContentFormView from 'modules/home.content/ContentFormView.js'
import Layout from 'modules/layouts/Main';
import NextSeo from 'next-seo';
import $ from 'jquery';
if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}
const DEFAULT_SEO = {
  title: 'Next.js SEO Plugin',
  description: 'SEO made easy for Next.js projects',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.garymeehan.ie',
    title: 'Next.js Seo',
    description: 'SEO made easy for Next.js projects',
    image:
      'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
    site_name: 'GaryMeehan.ie',
    imageWidth: 1200,
    imageHeight: 1200
  },
  twitter: {
    handle: '@garmeeh',
    cardType: 'summary_large_image'
  }
};

const Index = (props) => (
  <Layout>
    <NextSeo config={DEFAULT_SEO} />
    <ContentFormView />
  </Layout>
)
export default Index