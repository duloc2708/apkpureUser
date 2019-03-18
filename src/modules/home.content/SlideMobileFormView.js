import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class SlideMobileFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 0, title: 'Citytopia: Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug:'', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 1, title: 'Arena Brawls APK', type_name: 'Game action', type: '', thumbnail: '', title_slug:'', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 2, title: 'Magic Rampage APK', type_name: 'Game action', type: '', thumbnail: '', title_slug:'', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 3, title: 'Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug:'', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' }
            ],
            start: 0,
            end: 0,
            total: 4,
            dots_default: 1,
            list_dots: 0
        }
    }
    componentDidMount() {
        getBlogBySection('slide').then(Response => {
            let { Data } = Response
            this.setState({ data: Data, total: Data.length, list_dots: Data.length - 1 })
        })
        this.interval = setInterval(() => this.autoRun(), 5000);
    }
    _onNext() {
        let { total, start, end } = this.state
        let endNew = end + 1
        if (endNew < total) {
            this.setState({ start: start + 1, end: end + 1 })
        }
    }
    _onPrev() {
        let { total, start, end } = this.state
        let startNew = start - 1
        if (startNew >= 0) {
            this.setState({ start: start - 1, end: end - 1 })
        }
    }

    autoRun() {
        let { total, start, end } = this.state
        let endNew = end + 1
        if (endNew < total) {
            this.setState({ start: start + 1, end: end + 1 })
        } else {
            this.setState({ start: 0, end: 3 })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    _onChangeDots(key) {
        this.setState({ start: key, end: key, dots_default: key })
    }
    _renderListDots() {
        let i;
        let { dots_default } = this.state
        let arr = []
        for (i = 0; i < 5; i++) {
            arr.push(
                <div onClick={() =>
                    this._onChangeDots(i)} key={`dots_${i}`} className={`owl-dot ${i == dots_default ? 'active' : ''}`} >
                    <span></span>
                </div>
            )
        }
        return arr
    }
    render() {
        let { data, start, end, list_dots, dots_default } = this.state
        return (
            <section className="popular-post-area pt-120">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 slide__game">
                            <div className="row">
                                {
                                    data.map((item, i) => {
                                        let { id, title, type_name, type, thumbnail, title_slug, atr4 } = item
                                        if (i >= start && i <= end) {
                                            return (
                                                <div key={`slide_${i}`} className="col-md-3 col-sm-4">
                                                    <div className="items__slide__block__content">
                                                        <p className="newgame">
                                                            <Link as={`/${type}`} href={`/type`}><a>{type_name}</a></Link>
                                                        </p>
                                                        <h4 className="newgame__title">
                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a>{title}</a></Link>
                                                        </h4>
                                                    </div>
                                                    <div className="items__slide__block__img">
                                                        <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                            <img title={title} className="img-fluid" src={Config.getImageIndex(atr4, 500, 300)} alt={title} />
                                                        </Link>
                                                    </div>
                                                </div> , <div key={`slide_${i}`} className="col-md-3 col-sm-4">
                                                    <div className="items__slide__block__content">
                                                        <p className="newgame">
                                                            <Link as={`/${type}`} href={`/type`}><a>{type_name}</a></Link>
                                                        </p>
                                                        <h4 className="newgame__title">
                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a>{title}</a></Link>
                                                        </h4>
                                                    </div>
                                                    <div className="items__slide__block__img">
                                                        <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                            <img title={title} className="img-fluid" src={Config.getImageIndex(atr4, 500, 300)} alt={title} />
                                                        </Link>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    })
                                }
                                <div className="button_prev">
                                    <a onClick={() => this._onPrev()}>
                                        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="button_next">
                                    <a onClick={() => this._onNext()}>
                                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="owl-controls">
                                <div className="owl-dots">
                                    {this._renderListDots()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default SlideMobileFormView