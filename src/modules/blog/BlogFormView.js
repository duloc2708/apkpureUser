import Link from 'next/link'
let { initGA, logPageView } = Config
import LazyImage from 'common/component/LazyImage'
import RecentUploads from './RecentUploads'
import MostVideo from './MostVideo'
import TopGame from './TopGame'
class BlogFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView();
    }
    componentWillMount() {
        // $('head').append('<link rel="stylesheet" type="text/css" href="https://apksafety.com/static/styles/custom.min.css">');
    }
    componentDidMount() {

    }
    render() {
        let { data } = this.state
        return (
            <section className=" wrap__section page__video">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="banner_videoPr">
                                <a href="#">
                                    <img src={`${Config.API_LOCAL_IMAGE}img/video/banner.jpg`} />
                                </a>
                            </div>

                            <RecentUploads data={data} />
                            <div className="banner_videoPr">
                                <a href="#">
                                    <img src={`${Config.API_LOCAL_IMAGE}img/video/banner.jpg`} />
                                </a>
                            </div>
                            <MostVideo data={data} />
                        </div>
                        <TopGame data={data} />
                    </div>
                </div>
            </section>
        )
    }
}
export default BlogFormView