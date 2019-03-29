import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class SlideFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: [
                { id: -1, title: 'Citytopia: Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'static/img/no-image2.jpg' },
                // { id: -2, title: 'Citytopia: Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'static/img/no-image2.jpg' }
            ],
            isLoad: false
        }
    }
    componentDidMount() {
        getBlogBySection('slide').then(Response => {
            let { Data } = Response
            this.setState({ data: Data, isLoad: true })
        })
    }
    componentWillMount() {
        this.setState({ isLoad: false })
    }
    componentDidUpdate() {
        setTimeout(() => {
            window.onload = function () {
                $.getScript(`/static/js/index.js?v=${Config.build_version}`, function () {}, true)
            }();
        })
    }
    render() {
        let { data, data2, start, end, list_dots, dots_default, isLoad } = this.state
        return (
            <section className="popular-post-area pt-120">
                {
                    isLoad ?
                        <div className="owl-carousel wrap__slider">
                            {
                                data.map((item, i) => {
                                    let { id, title, type_name, type, thumbnail, title_slug, atr4 } = item
                                    return (
                                        <div key={`slide_${i}`} className="item">
                                            <div className="items__slide__block__content match">
                                                <p className="newgame">
                                                    <Link as={`/${type}`} href={`/type`}><a>{type_name}</a></Link>
                                                </p>
                                                <h4 className="newgame__title">
                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a>{title}</a></Link>
                                                </h4>
                                            </div>
                                            <div className="items__slide__block__img">
                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                    <a>
                                                        <LazyImage image={{ src: Config.getImageIndex(atr4, 300, 155), alt: title, width: 300, height: 155 }} />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    )

                                })
                            }

                        </div>

                        :
                        <div className="wrap__slider">
                            {
                                data2.map((item, i) => {
                                    let { id, title, type_name, type, thumbnail, title_slug, atr4 } = item
                                    return (
                                        <div key={`slide_${i}`} >
                                            <div className="items__slide__block__content match">
                                                <p className="newgame">
                                                    <Link as={`/${type}`} href={`/type`}><a>{type_name}</a></Link>
                                                </p>
                                                <h4 className="newgame__title">
                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a>{title}</a></Link>
                                                </h4>
                                            </div>
                                            <div className="items__slide__block__img">
                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                    <a>
                                                        <img width="100px" height="100px" src={atr4} alt={title} />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </div>

                }
            </section>
        )
    }
}
export default SlideFormView