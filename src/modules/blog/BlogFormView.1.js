import Link from 'next/link'
let { initGA, logPageView } = Config
import LazyImage from 'common/component/LazyImage'
import RecentUploads from './RecentUploads'
import MostVideo from './MostVideo'
import TopGame from './TopGame'
import TopGamView from 'modules/home.content/TopGamView'

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
        setTimeout(() => {
            window.onload = function () {
                $.getScript(`/static/js/aos.js?v=${Config.build_version}`, () => {
                });
            }();
        })
   
    }


    render() {
        let { data } = this.state
        return (
            <section className="wrap__section page__video wrap_bg">
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
                        <TopGamView />
                    </div>
                </div>
            </section>
        )
    }
}
export default BlogFormView