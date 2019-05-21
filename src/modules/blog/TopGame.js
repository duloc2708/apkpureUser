import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import { getBlogBySection } from 'modules/home.content/actions/'

class TopGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('game_new').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    render() {
        const { data } = this.state
        return (
            <div className="col-md-4 col-sm-12">
                <div className="side__bar__seach">
                    <h4 className="title__search">Top Game</h4>
                    <ul className="contain__seach">
                        {
                            data.map((item, i) => {
                                let { id, title, url, type_name, type, thumbnail, title_slug, atr4 } = item
                                if (type.indexOf(',') != -1) {
                                    type = type.split(',', 2)[0]
                                }
                                return (
                                    <li>
                                        <dl>
                                            <dt>
                                                <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                    <a title={title}>
                                                        <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                                    </a>
                                                </Link>
                                            </dt>
                                            <dd className="title-dd">
                                                <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                    <a>{title}</a>
                                                </Link>
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
            </div>
        )
    }
}
export default TopGame