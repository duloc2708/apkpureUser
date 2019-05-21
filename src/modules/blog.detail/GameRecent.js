import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import { getListGame } from 'modules/blog.detail/actions/'

class GameRecent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        let { listgame } = this.props
        if (listgame) {
            getListGame(listgame).then(Response => {
                let { Data } = Response
                this.setState({ data: Data })
            })
        }

    }
    render() {
        const { data } = this.state
        return (
            <React.Fragment>
                {
                    data.map((item, i) => {
                        let { thumbnail, atr2, atr6, url, atr3, type, title, title_slug } = item
                        url = url || atr2
                        if (type.indexOf(',') != -1) {
                            type = type.split(',', 2)[0]
                        }
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
            </React.Fragment>
        )
    }
}
export default GameRecent