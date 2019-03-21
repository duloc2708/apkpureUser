import { setTimeout } from "timers";

class SLideImageFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['https://api.apksafety.com/images/image-not-found.jpg']
        }
    }
    componentWillMount(){
  
    }
    componentDidMount() {
        window.onload = function () {
            console.log('componentWillMount');
            $.getScript('https://apksafety.com/static/js/owl.carousel.min.js')
        }();
        let datTemp = []
        let { arrSlide } = this.props

        if (arrSlide.length > 5) {
            arrSlide.map((item, i) => {
                if (i <= 5) {
                    datTemp.push(item)
                }
            })
        } else {
            datTemp = arrSlide
        }

        this.setState({ data: datTemp })
    }
    componentWillUnmount() {
        this.setState({ data: ['https://api.apksafety.com/images/image-not-found.jpg'] })
    }
    componentDidUpdate() {
        setTimeout(() => {
            window.onload = function () {
                console.log('componentDidUpdate');
                $.getScript('https://apksafety.com/static/js/vendor/slider_blog_detail.js')
            }();
        }, 100)
    }
    render() {
        let arrSlide = this.state.data
        console.log('render');

        return (
            <div className={`gallery-carousel popup-gallery ${arrSlide.length > 1 ? 'owl-carousel' : ''}`}>
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