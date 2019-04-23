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
                $.getScript(`/static/js/slider.js?v=${Config.build_version}`, () => {
                    $.getScript(`/static/js/index.js?v=${Config.build_version}`, function () { }, true)
                });
            }();
        })
    }
    render() {
        let { data, data2, start, end, list_dots, dots_default, isLoad } = this.state
        return (
            <section className="wrap__slider animated ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="sliderTop">
                                <div className="cd-slider">
                                    <ul>
                                        {
                                            data.map((item, i) => {
                                                let { id, title,url, type_name, type, thumbnail, title_slug, atr4, atr7, atr11 } = item
                                                let arrSlide = []
                                                if (atr7) {
                                                    arrSlide = atr7.split(',')
                                                }
                                                return (
                                                    <li key={`slide_${id}`}>

                                                        <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                            <a>
                                                                <div className="image" style={{ "background-image": `url(${Config.getImageIndex(atr11, 0, 0)}` }}></div>
                                                                {/* <LazyImage image={{ src: Config.getImageIndex(atr11, 0, 0), alt: item, width: 0, height: 0 }} /> */}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                        {/* <li>
                                            <div className="image" style={{ "background-image": "url(https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000);" }}></div>
                                        </li>
                                        <li>
                                            <div className="image" style={{ "background-image": "url(https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000);" }}></div>
                                        </li>
                                        <li>
                                            <div className="image" style={{ "background-image": "url(https://images.unsplash.com/photo-1416838375725-e834a83f62b7?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000);" }}></div>
                                        </li>
                                        <li>
                                            <div className="image" style={{ "background-image": "url(https://images.unsplash.com/35/JOd4DPGLThifgf38Lpgj_IMG.jpg?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000);" }}></div>
                                        </li>
                                        <li>
                                            <div className="image" style={{ "background-image": "url(https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000);" }}></div>
                                        </li> */}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="wrap_apksafety">
                                <dl className="right_apksafety">
                                    <dt>
                                        <a className="dl-ref" title="APKSafety APK" href="#">
                                            <img src={`${Config.API_LOCAL_IMAGE}img/logo-pk.png`} alt="logo APKSafety" />
                                        </a>
                                    </dt>
                                    <div className="wrap_list_apksafety">
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
                                    </div>
                                    <div className="down">
                                        <a className="bottomDown" dl-ref="home" title="Tải về apk phiên bản mới nhất" href="#">Tải về APK<span className="fsize">(<span>11.1 MB</span>)</span></a>
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