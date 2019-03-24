import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class SlideFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 0, title: 'Citytopia: Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 1, title: 'Arena Brawls APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 2, title: 'Magic Rampage APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 3, title: 'Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' }
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('slide').then(Response => {
            let { Data } = Response
            this.setState({ data: Data, total: Data.length })
        })
        window.onload = function () {
            $.getScript(`https://apksafety.com/static/js/owl.carousel.min.js?v=${Config.build_version}`)
            $.getScript(`https://apksafety.com/static/js/jquery.matchHeight-min.js?v=${Config.build_version}`)

        }();
    }
    componentDidUpdate() {
        setTimeout(() => {
            window.onload = function () {
                $.getScript(`https://apksafety.com/static/js/index.js?v=${Config.build_version}`)
            }();
        }, 100)
    }
    render() {
        let { data, start, end, list_dots, dots_default } = this.state
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
                                                <LazyImage image={{ src: Config.getImageIndex(atr4, 275, 155), alt: title, width: 275, height: 155 }} />
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