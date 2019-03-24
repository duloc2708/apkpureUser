import LazyImage from 'common/component/LazyImage'
class SLideImageFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['https://api.apksafety.com/images/image-not-found.jpg']
        }
    }
    componentDidMount() {
        window.onload = function () {
            $.getScript(`https://apksafety.com/static/js/owl.carousel.min.js?v=${Config.build_version}`)
            $.getScript(`https://apksafety.com/static/js/jquery.magnific-popup.min.js?v=${Config.build_version}`)
            $.getScript(`https://apksafety.com/static/js/slick.js?v=${Config.build_version}`)
        }();
        let { arrSlide } = this.props
        this.setState({ data: arrSlide })
    }
    componentWillUnmount() {
        this.setState({ data: ['https://api.apksafety.com/images/image-not-found.jpg'] })
    }

    render() {
        let arrSlide = this.state.data
        return (
            <div className={`gallery-carousel popup-gallery`}>
                {
                    arrSlide.map((item, i) => {
                        return (
                            <div key={`slide_${i}`} className="gallery-item">
                                <a alt={item} href={Config.getImageIndex(item, 350, 200)} data-effect="mfp-zoom-in" title={item}>
                                    <LazyImage image={{ src: Config.getImageIndex(item, 350, 200), alt: item, width: 350, height: 200 }} />
                                    {/* <img src={Config.getImageIndex(item, 350, 200)} /> */}
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