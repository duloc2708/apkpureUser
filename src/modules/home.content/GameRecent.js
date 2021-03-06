import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'

class GameRecent extends React.Component {
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
            <section className="popular-post-area gamehot">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>GAME RECENT</h4>
                        </div>
                        <ul className="gamehot__list">
                            {
                                data.map((item, i) => {
                                    let { id, title, url, type_name, type, thumbnail, title_slug } = item
                                    if (type.indexOf(',') != -1) {
                                        type = type.split(',', 2)[0]
                                    }
                                    return (
                                        <li key={`i_${id}`} className="gamehot__list__items">
                                            <dl>
                                                <dt className="gamehot__img">
                                                    <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                        <a>
                                                            <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                                        </a>
                                                    </Link>                                                </dt>
                                                <dd className="gamehot__title">
                                                    <div>
                                                        <p>
                                                            <Link as={`/${type}/${url}`} href={`/post?id=${url}`}><a href="#">{title}</a></Link>                                                    </p>
                                                        <span>Hành động</span>
                                                    </div>
                                                </dd>
                                                <dd className="gamehot__buttom">
                                                    <Link as={`/${type}/${url}`} href={`/post?id=${url}`}><a className="btn btn-primary">  <span>Download</span></a></Link>
                                                </dd>
                                            </dl>
                                        </li>

                                    )

                                })
                            }

                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}
export default GameRecent