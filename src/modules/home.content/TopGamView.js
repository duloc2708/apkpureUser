import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class TopGamView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        let { data } = this.state
        return (
            <div className="col-lg-4 col-sm-12">
                <div className="side__bar__seach wrap_bg">
                    <div className="title" data-aos="fade-up">
                        <h4 className="title__search">Top Game</h4>
                    </div>
                    <ul className="contain__seach" data-aos="fade-up">
                        {
                            data.map((item, i) => {
                                let { id, title, type_name, type, thumbnail, title_slug } = item
                                return (
                                    <li>
                                        <dl>
                                            <dt>
                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                    <a>
                                                        <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                                    </a>
                                                </Link>
                                            </dt>
                                            <dd className="title-dd">
                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a href="#">{title}</a></Link>
                                            </dd>
                                            <dd>2.3.1</dd>
                                            <dd>2019-03-07</dd>
                                        </dl>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="advertise_wrap" data-aos="fade-down">
                    <a href="#"><img src="/static/img/siderbar/banner.jpg" /></a>
                </div>
            </div>


        )
    }
}
export default TopGamView