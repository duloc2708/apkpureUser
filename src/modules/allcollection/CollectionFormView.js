import Link from 'next/link'
let { initGA, logPageView } = Config
import LazyImage from 'common/component/LazyImage'
import TopGamView from 'modules/home.content/TopGamView'

class CollectionFormView extends React.Component {
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
        logPageView();
    }
    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area pt-120 page__blog__detail">
                <div className="container page__all__collection">
                    <nav aria-label="breadcrumb" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">all collection</li>
                        </ol>
                    </nav>
                    <div className="row">
                        {
                            data.map((item, i) => {
                                let { id, title, type_name, type, thumbnail, title_slug } = item
                                if (thumbnail.indexOf('youtube') == -1) {
                                    thumbnail = Config.getImageIndex(thumbnail, 0, 0)
                                }
                                return (

                                    <div key={`all_collection_${i}`} className="col-lg-4 col-sm-6 items__all__collection" >
                                        <Link as={`/${'blog-detail'}/${title_slug}`} href={`/blog-detail?id=${title_slug}`}>
                                            <a href="#" title={title}>
                                                <div className="pictures__game">
                                                    <img width="300px" src={thumbnail} alt="new game" />
                                                </div>
                                                <div className="box__content">
                                                    <div className="box__content__info">
                                                        <h3 className="box__content__title">{title}</h3>
                                                    </div>
                                                    <p className="box__content__desc">{title}</p>
                                                </div>
                                            </a>
                                        </Link>

                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
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
            </section>

        )
    }
}
export default CollectionFormView