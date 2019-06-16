import Link from 'next/link'
let { initGA, logPageView } = Config
import TopGamView from 'modules/home.content/TopGamView'
import LazyImage from 'common/component/LazyImage'
class TypeFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
    }
    render() {
        let { data } = this.state
        return (
            <section className="page__list__game popular-post-area wrap__section ">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">List game</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <ul className="wrap__list__game">
                                {
                                    data.map((item, i) => {
                                        let { id, title, url, type_name, type, thumbnail, title_slug, atr6 } = item
                                        return (
                                            <li key={`type_${id}`} >
                                                <div className="sale-info">
                                                    <a title="GeoExpert - Spain Geography">
                                                        <div className="app-icon">
                                                            <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                                        </div>
                                                        <div className="app-text">
                                                            <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                                <a>
                                                                    <p >{title}</p>
                                                                </a>
                                                            </Link>

                                                            <p>version</p>
                                                            <p className="developer">{atr6}</p>
                                                        </div>
                                                    </a>
                                                    <div className="button_down">
                                                        <Link as={`/download?name=${title_slug}`} href={`/download?name=${title_slug}&title=${title}`}>
                                                            <a target="_blank" className=" da" title="Download PUBG MOBILE latest version xapk"
                                                            //href={`${Config.API_DOWNLOAD_FILE}post/getfileapk?namefile=${title_slug}&mineType=${atr3}`}
                                                            > <span>Download</span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {/* <div className="paging" >
                                <ul>
                                    <li><a href="#">❮</a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">❯</a></li>
                                </ul>
                            </div> */}
                        </div>
                        <TopGamView />
                    </div>
                </div>
            </section>

        )
    }
}
export default TypeFormView