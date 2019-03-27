import { getDataBySearch } from 'modules/search/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
// import KeyboardJS from 'keyboardjs'

class SearchFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let { href, search, pathname } = window.location || {}
        let key = Config.getParams(href, 'q')
        getDataBySearch(key).then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
            // var myscript = document.createElement('script');
            // myscript.setAttribute('src', '/static/js/main.js');
            // var div = document.getElementById('target');
            // div.appendChild(myscript);
        })
        // KeyboardJS.bind('enter', (event) => {
        //     this._onSearch()
        // })

    }

    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area pt-120">
                <div className="container page__search">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-12">
                                {/* <div className="from__search">
                                    <div className="wrap__search clearfix">
                                        <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                                        <button type="submit" className="searchButton">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div> */}
                                <div className="search__content">
                                    <div className="row">
                                        {
                                            data.map((item, i) => {
                                                let { title, thumbnail, title_slug, type, type_name } = item
                                                return (
                                                    <div key={`search_${i}`} className="col-md-4">
                                                        <dl className="search-dl">
                                                            <dt>
                                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                                    <a>
                                                                        <LazyImage image={{ src: Config.getImageIndex(thumbnail, 75, 75), alt: title, width: 75, height: 75 }} />
                                                                    </a>
                                                                </Link>

                                                            </dt>
                                                            <dd>
                                                                <p className="search-title">
                                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                                        <a >
                                                                            {title}
                                                                        </a>
                                                                    </Link>
                                                                </p>
                                                                <div className="stars">
                                                                    <span className="score" title={title}></span>
                                                                    <span className="star">8.8</span>
                                                                </div>
                                                                <p>Type:  <a href="#">{type_name}</a>
                                                                </p>
                                                                <p>
                                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                                        <a className="more-down">
                                                                            Read more
                                                                      </a>
                                                                    </Link>
                                                                </p>
                                                            </dd>
                                                        </dl>
                                                    </div>

                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default SearchFormView

