import LazyImage from 'common/component/LazyImage'
class SLideImageFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.arrSlide
        }
    }
    componentDidMount() {
        window.onload = function () {
            $.getScript(`/static/js/index.js?v=${Config.build_version}`, function () {}, true);
        }();
    }
    componentWillUnmount() {
        this.setState({ data: [] })
    }
    render() {
        let arrSlide = this.state.data
        return (
            <div className="owl-carousel slideVideo">
                {
                    arrSlide.map((item, i) => {
                        return (
                            <div key={`slide_${i}`} className="item">
                                <div className="videoWrapper">
                                    <a alt={item} href={Config.getImageIndex(item, 350, 200)} data-effect="mfp-zoom-in" title={item}>
                                        <LazyImage image={{ src: Config.getImageIndex(item, 350, 200), alt: item, width: 350, height: 200 }} />
                                        {/* <img src={Config.getImageIndex(item, 350, 200)} /> */}
                                    </a>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}
export default SLideImageFormView