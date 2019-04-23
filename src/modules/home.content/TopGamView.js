import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import ListTypeGame from './ListTypeGame'

class TopGamView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        getBlogBySection('game_new').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    render() {
        let { data } = this.state
        return (
            <div className="col-md-4 col-sm-12">
                <div className="side__bar__seach wrap_bg">
                    <div className="title" >
                        <h4 className="title__search">Top Game</h4>
                    </div>
                    <ul className="contain__seach" >
                        {
                            data.map((item, i) => {
                                let { id, title, url, type_name, type, thumbnail, title_slug } = item
                                return (
                                    <li>
                                        <dl>
                                            <dt>
                                                <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                    <a>
                                                        <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                                    </a>
                                                </Link>
                                            </dt>
                                            <dd className="title-dd">
                                                <Link as={`/${type}/${url}`} href={`/post?id=${url}`}><a href="#">{title}</a></Link>
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
                <div className="advertise_wrap">
                    <a href="#"><img src="/static/img/siderbar/banner.jpg" /></a>
                </div>
                <ListTypeGame />
            </div>


        )
    }
}
export default TopGamView