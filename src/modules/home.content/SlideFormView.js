import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class SlideFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.slide
        }
    }
    componentDidMount() {
        setTimeout(() => {
            window.onload = function () {
                $.getScript(`/static/js/index.js?v=${Config.build_version}`, function () { }, true)
            }();
        })
    }
    render() {
        let { data, data2, start, end, list_dots, dots_default, isLoad } = this.state
        const { slide } = this.props
        return (
            <section className="popular-post-area pt-120">
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
            </section>
        )
    }
}
export default SlideFormView