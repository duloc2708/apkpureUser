
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
            let { arrSlide } = this.props
            this.setState({ data: arrSlide || [] })
            var myscript = document.createElement('script');
            myscript.setAttribute('src', 'http://apksafety.com/static/js/vendor/slider_blog_detail.js');
            var div = document.getElementById('targetSlide');
            div.appendChild(myscript);
        }, 200)


    }
    render() {
        let arrSlide = this.state.data
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