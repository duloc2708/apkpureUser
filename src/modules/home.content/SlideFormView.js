import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class SlideFormView extends React.Component {
    constructor(props) {
        super(props);
        let { slide } = this.props
        this.state = {
            data: slide
        }
    }
    componentDidMount() {
        setTimeout(() => {
            window.onload = function () {
                $.getScript(`/static/js/jquery.flexslider-min.js?v=${Config.build_version}`, function () { }, true);
                $.getScript(`/static/js/index.js?v=${Config.build_version}`, function () { }, true)
            }();
        })
        console.log('componentDidMount');
    }
    render() {
        let { data, data2, start, end, list_dots, dots_default, isLoad } = this.state
        return (
            <section className=" pt-70  slider animated fadeInDown delay-1s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="flexslider left">
                                <ul className="slides">
                                    {
                                        data.map((item, i) => {
                                            let { id, title, type_name, type, thumbnail, title_slug, atr4, atr7 } = item
                                            let arrSlide = []
                                            if (atr7) {
                                                arrSlide = atr7.split(',')
                                            }
                                            return (
                                                <li key={`slide_${id}`}>
                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                        <a>
                                                            <LazyImage image={{ src: Config.getImageIndex(arrSlide[0], 631, 355), alt: item, width: 0, height: 0 }} />
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box">
                                <dl className="right_apksafety">
                                    <dt>
                                        <a className="dl-ref" title="APKSafety APK" href="#">
                                            <img src={`${Config.API_LOCAL_IMAGE}img/logo-pk.png`} alt="logo APKSafety" />
                                        </a>
                                    </dt>
                                    <dd className="title-dd">
                                        <a className="dl-ref" title="APKPure APK" href="#">APKSafety
                                        <span className="vname">3.5.5</span>
                                        </a>
                                    </dd>
                                    <dd className="star-dd">
                                        <div className="stars">
                                            <span className="score" title="APKSafety đánh giá trung bình 9.0" ></span>
                                        </div>
                                    </dd>
                                    <dd className="des-dd">
                                        <p className="tit">Sử dụng ứng dụng APKSafety</p>
                                        <p className="des">Nhanh hơn, miễn phí và tiết kiệm dữ liệu!</p>
                                    </dd>
                                    <div className="down">
                                        <a className="bottomDown" dl-ref="home" title="Tải về apk phiên bản mới nhất" >Tải về APK<span className="fsize">(<span>11.1 MB</span>)</span></a>
                                    </div>
                                </dl>

                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SlideFormView