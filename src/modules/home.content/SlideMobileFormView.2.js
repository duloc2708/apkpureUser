import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class SlideMobileFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 0, title: 'Citytopia: Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' }
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
            let dataTemp = Data
            // dataTemp.push(Data[0])
            this.setState({ data: dataTemp, total: dataTemp.length, list_dots: dataTemp.length - 1 })
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
            <div style={{ "paddingTop": "50px" }}>
                <div id="container" >
                    <span className="fa fa-angle-left" id="back"></span>
                    <span className="fa fa-angle-right" id="next"></span>
                    <ul id="imageContainer">
                        {
                            data.map((item, i) => {
                                let { id, title, type_name, type, thumbnail, title_slug, atr4 } = item
                                return (
                                    <li key={i}>
                                        <img className="slImg" src={Config.getImageIndex(atr4, 300, 200)} />
                                    </li>
                                )
                            })

                        }
                    </ul>
                </div>
            </div>

        )
    }
}
export default SlideMobileFormView