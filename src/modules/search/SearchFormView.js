import { getDataBySearch } from 'modules/search/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import TopGamView from 'modules/home.content/TopGamView'

class SearchFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: ''
        }
    }
    _handleInput(e) {
        this.setState({ search: e.target.value })

    }
    _onSearch() {
        let key = this.state.search
        this._getData(key)
    }
    _getData(key) {
        getDataBySearch(key).then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    componentDidMount() {
        let { href, search, pathname } = window.location || {}
        let key = Config.getParams(href, 'q')
        this._getData(key)
        $('#searchMain').focus();

        let that = this
        $(document).keypress(function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                if ($('#searchMain').is(':focus')) {
                    that._onSearch()
                }
            }

        });

    }

    render() {
        let { data, search } = this.state
        return (
            <section className="popular-post-area pt-120">
                <div className="container page__search">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="from__search">
                                    <div className="wrap__search clearfix">
                                        <input onChange={(e) => this._handleInput(e)} id="searchMain" value={search} type="text" className="searchTerm" placeholder="What are you looking for?" />
                                        <a onClick={() => this._onSearch()} className="searchButton">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="search__content wrap_bg">
                                    <div className="row">
                                        {
                                            data.map((item, i) => {
                                                let { title, thumbnail,url, title_slug, type, type_name } = item
                                                if (type.indexOf(',') != -1) {
                                                    type = type.split(',', 2)[0]
                                                }
                                                return (
                                                    <div key={`search_${i}`} className="col-md-4">
                                                        <dl className="search-dl">
                                                            <dt>
                                                                <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                                    <a>
                                                                        <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                                                    </a>
                                                                </Link>

                                                            </dt>
                                                            <dd>
                                                                <p className="search-title">
                                                                    <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
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
                                                                    <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
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
                            <TopGamView />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SearchFormView

