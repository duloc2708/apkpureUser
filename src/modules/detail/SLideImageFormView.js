import { setTimeout } from "timers";

class SLideImageFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['https://api.apksafety.com/images/image-not-found.jpg']
        }
    }
    componentDidMount() {
        this.setState({ data: this.props.arrSlide })
    }
    componentWillUnmount() {
        this.setState({ data: [] })
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');

        window.onload = function () {
            $.getScript('https://apksafety.com/static/js/vendor/slider_blog_detail.js')
        }();
    }
    render() {
        console.log('render');

        let arrSlide = this.state.data
        return (
            <div className="gallery-carousel popup-gallery">
                {
                    arrSlide.map((item, i) => {
                        return (
                            <div key={`slide_${i}`} className="gallery-item">
                                <a alt={item} href={Config.getImageIndex(item, 350, 200)} data-effect="mfp-zoom-in" title={item}>
                                    <img src={Config.getImageIndex(item, 350, 200)} />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default SLideImageFormView