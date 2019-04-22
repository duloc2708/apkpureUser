import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import { getBlogBySection } from 'modules/home.content/actions/'

class GameRecent extends React.Component {
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
        const { link, title } = this.props
        return (
            <div className="col-md-8 col-sm-12">
                <h3 className="video__block__title">{title}</h3>
                <div className="video__wrapper">
                    <iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                </div>
                {
                    data.map((item, i) => {
                        let { thumbnail, atr6, url,  atr3, type, title, title_slug } = item
                        return (
                            <div className="video__description">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="wrap__content_listgame">

                                            <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                <a >
                                                    <h4>{title}</h4>
                                                </a>
                                            </Link>
                                            <p>Version: <span>{atr6}</span></p>
                                            <p>
                                                {title}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list__icongame">
                                            <li>
                                                <dl>
                                                    <dt>
                                                        <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                            <a >
                                                                <img src={Config.getImageIndex(thumbnail, 0, 0)} alt="" className="cast img-responsive" />
                                                            </a>
                                                        </Link>
                                                    </dt>
                                                    <dd className="title__icongame">
                                                        <Link as={`/download?name=${title_slug}&mineType=${atr3}`} href={`/download?name=${title_slug}&mineType=${atr3}&title=${title}`}>
                                                            <a target="_blank" className=" da" title="Download PUBG MOBILE latest version xapk"
                                                            //href={`${Config.API_DOWNLOAD_FILE}post/getfileapk?namefile=${title_slug}&mineType=${atr3}`}
                                                            >
                                                                <i className="fa fa-download" aria-hidden="true"></i>
                                                            </a>
                                                        </Link>
                                                    </dd>
                                                </dl>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                }
            </div>
        )
    }
}
export default GameRecent