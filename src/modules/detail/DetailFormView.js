
import Link from 'next/link'
import SLideImageFormView from './SLideImageFormView'
import GameRecent from 'modules/home.content/GameRecent'
let { initGA, logPageView } = Config
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { updateView } from 'modules/detail/actions/'
import ListTypeGame from 'modules/home.content/ListTypeGame.js'

class DetailFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { data } = this.props
        let dataTemp = data
        dataTemp.view = parseInt(dataTemp.view) + 1
        updateView(dataTemp)
        // if (!window.GA_INITIALIZED) {
        //     initGA()
        //     window.GA_INITIALIZED = true
        // }
        // logPageView();
        window.onload = function () {
            $.getScript(`/static/js/owl.carousel.min.js?v=${Config.build_version}`)
            $.getScript(`/static/js/jquery.matchHeight-min.js?v=${Config.build_version}`)

        }();
    }
    render() {
        let { view, title, type_name, type, thumbnail, content_long, title_slug, atr3, atr5, atr6, atr7 } = this.props.data
        let arrSlide = []
        if (atr7) {
            arrSlide = atr7.split(',')
        }
        return (
            <section className="popular-post-area pt-120 page__blog__detail">
                <div className="container page__blog__detail__bg">
                    <div className="row">
                        <div className="box">
                            <div className="box__title bread-crumbs">
                                <a href="/">Home</a> » <a href={`/${type}`}>{type_name}</a>

                            </div>
                        </div>
                        <div className="col-lg-12 blog_detail">
                            <div className="row">
                                <dl className="ny-dl ny-dl-n">
                                    <dt>
                                        <div className="icon"><img title={title} alt={title} src={Config.getImageIndex(thumbnail, 175, 175)} /></div>
                                    </dt>
                                    <dd>
                                        <div className="title-like">
                                            <h1>{title}</h1>
                                        </div>
                                        <div className="details-sdk">
                                            <span itemProp="version">{atr6} </span>for Android
                                         </div>
                                        <div className="details-rating">
                                            <div className="stars" title="average: 8.8 out of 10">
                                            </div>
                                            <div className="rating-info">
                                                <span className="rating" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                                                    <span className="average" itemProp="ratingValue">8.8</span>
                                                    <meta itemProp="ratingCount" content={31865} />
                                                    <meta itemProp="bestRating" content={10} />
                                                    <meta itemProp="worstRating" content={1} />
                                                </span>
                                                <span className="details-delimiter"> | </span>
                                                <a className="details-to-bottom" data-type="reviews">{view} Reviews</a>
                                                <span className="details-delimiter"> | </span>
                                                <a href="#comment" className="details-to-bottom" data-type="posts">3.8k Posts</a>
                                            </div>
                                        </div>
                                        <div className="details-author">
                                            <p className="publisher">
                                                <a title="Get more from Tencent Games" href="#">Tencent Games</a>
                                            </p>
                                        </div>
                                        <div className="ny-down blue-stack">
                                            <Link as={`/download?name=${title_slug}&mineType=${atr3}`} href={`/download?name=${title_slug}&mineType=${atr3}&title=${title}`}>
                                                <a target="_blank" className=" da" title="Download PUBG MOBILE latest version xapk"
                                                //href={`${Config.API_DOWNLOAD_FILE}post/getfileapk?namefile=${title_slug}&mineType=${atr3}`}
                                                >Download APK
                                                <span className="fsize">(<span>{atr5}</span>)</span>
                                                </a>
                                            </Link>
                                            <a title="PUBG MOBILE Previous Versions" href="#" className="ny-versions">Versions</a>
                                            <a rel="nofollow" title="PUBG MOBILE safe verified" href="#" className="safe popsafe-open">
                                                <img alt={title} title={title} src={`${Config.API_LOCAL_IMAGE}img/blog/icon-verified_v2.png`} width="16" /></a>
                                        </div>
                                    </dd>
                                </dl>
                                <LazyLoadComponent>
                                    {arrSlide.length > 0 ?
                                        <SLideImageFormView arrSlide={arrSlide} />
                                        : ''}
                                    <div className="blog__detail__description">
                                        <div dangerouslySetInnerHTML={{ __html: content_long }} />
                                    </div>
                                    <br />
                                </LazyLoadComponent>
                                <LazyLoadComponent>
                                    <ListTypeGame />
                                </LazyLoadComponent>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        )
    }
}
export default DetailFormView