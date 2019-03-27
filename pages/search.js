import Layout from 'modules/layouts/Main';
import SearchFormView from 'modules/search/SearchFormView.js'

import $ from 'jquery';
if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
}
const Search = (props) => (
    <Layout>
        <SearchFormView />
    </Layout>
)

Search.getInitialProps = async function (context) {
    const { id } = context.query
    // const res = await axios(`https://api.tvmaze.com/shows/${id}`)
    // const show = await res.data

    // console.log(`Fetched show a: ${show.name}`)

    return { show: {} }
}

export default Search
