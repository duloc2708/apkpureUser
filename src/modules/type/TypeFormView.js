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
                                        console.log('item>>>',item);
                                        
                                        return (
                                            <li key={`type_${id}`} >
                                                <div className="sale-info">
                                                    <a href="#" title="GeoExpert - Spain Geography">
                                                        <div className="app-icon">
                                                            <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                                <a href="#">
                                                                    <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="app-text">
                                                            <p className="title">{title}</p>
                                                            <p>version</p>
                                                            <p className="developer">{atr6}</p>
                                                        </div>
                                                    </a>
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