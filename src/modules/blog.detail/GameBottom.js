import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import { getBlogBySection } from 'modules/home.content/actions/'

class GameBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('game_action').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    render() {
        const { data } = this.state
        const { link, title } = this.props
        return (
            <section className="popular-post-area video__collection" >
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, i) => {
                                let { atr9, atr7, atr4, id, title, url, type_name, type, thumbnail, title_slug } = item
                                let imgData = ''
                                atr7 = atr7.split(',')
                                imgData = atr7 && atr7[0] || ''
                                if (type.indexOf(',') != -1) {
                                    type = type.split(',', 2)[0]
                                }
                                if (i <= 2) {
                                    return (
                                        <div className="col-md-4">
                                            <div className="item__collection">
                                                <div className="item__collection__img">
                                                    <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                        <a >
                                                            <img src={Config.getImageIndex(imgData, 0, 0)} alt="" className="cast img-responsive" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <p className="item__collection__content">
                                                </p><h3>
                                                    <Link as={`/${type}/${url}`} href={`/post?id=${url}`}>
                                                        <a>{title}</a>
                                                    </Link>
                                                </h3>
                                                <p>
                                                    {atr4}
                                                </p>
                                                <p />
                                            </div>
                                        </div>

                                    )
                                }

                            })


                        }

                    </div>
                </div>
            </section>

        )
    }
}
export default GameBottom