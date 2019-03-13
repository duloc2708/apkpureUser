import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class SlideFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ],
            start: 0,
            end: 3,
            total: 0,
            dots_default: 1,
            list_dots: [
                { "key": 1 }, { "key": 2 }, { "key": 3 }
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('slide').then(Response => {
            let { Data } = Response
            this.setState({ data: Data, total: Data.length })
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
        switch (key) {
            case 1:
                this.setState({ start: 0, end: 3, dots_default: key })
                break;
            case 2:
                this.setState({ start: 4, end: 7, dots_default: key })
                break;
            case 3:
                this.setState({ start: 8, end: 11, dots_default: key })
                break;
            default:
                this.setState({ start: 0, end: 3, dots_default: key })
                break;
        }
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
                                                            <img title={title} className="img-fluid" src={Config.getImage(atr4, 255, 135)} alt={title} />
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
                                                            <img title={title} className="img-fluid" src={Config.getImage(atr4, 255, 135)} alt={title} />
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
                                    {
                                        list_dots.map(item => {
                                            return (
                                                <div onClick={() => this._onChangeDots(item.key)} key={`dots_${item.key}`} className={`owl-dot ${item.key == dots_default ? 'active' : ''}`} >
                                                    <span></span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default SlideFormView