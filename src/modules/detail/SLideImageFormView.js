import { setTimeout } from "timers";

class SLideImageFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        setTimeout(() => {
            window.onload = function () {
                $.getScript('http://apksafety.com/static/js/vendor/slider_blog_detail.js')
            }();
        }, 100)

    }
    render() {
        let arrSlide = this.props.arrSlide
        return (
            <div className="gallery-carousel popup-gallery">
                {
                    arrSlide.map((item, i) => {
                        return (
                            <div key={`slide_${i}`} className="gallery-item">
                                <a href={item} data-effect="mfp-zoom-in" title="">
                                    <img src={item} />
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