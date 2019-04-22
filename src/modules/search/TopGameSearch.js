
import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'

class TopGameSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 0, title: 'Citytopia: Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 1, title: 'Arena Brawls APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 2, title: 'Magic Rampage APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' },
                { id: 3, title: 'Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: '', title_slug: '', atr4: 'https://api.apksafety.com/images/image-not-found.jpg' }
            ],
        }
    }
    componentDidMount() {
        getBlogBySection('featured_games').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })


    }
    render() {
        let { data } = this.state
        return (
            <div className="col-md-4 col-sm-12">
                <div className="side__bar__seach wrap_bg">
                    <h4 className="title__search">Top Game</h4>
                    <ul className="contain__seach">
                        {data.map((item, i) => {
                            let { createdAt, atr6, id, title, type_name, type, thumbnail, title_slug } = item
                            var date = moment(createdAt).format('YYYY-MM-DD');
                            return (
                                <li key={`top_${i}`}>
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
                                        <dd>{atr6}</dd>
                                        <dd>{date}</dd>
                                    </dl>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>


        )
    }
}
export default TopGameSearch