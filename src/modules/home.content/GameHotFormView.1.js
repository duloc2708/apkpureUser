import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class GameHotFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area gamehot">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>NEW GAMES</h4>
                            <span></span>
                        </div>
                        {
                            <ul className="gamehot__list">
                                {
                                    data.map((item, i) => {
                                        let { id, title, type_name, type, thumbnail, title_slug } = item
                                        if (type.indexOf(',') != -1) {
                                            type = type.split(',', 2)[0]
                                        }
                                        return (
                                            <li key={`i_${id}`} className="gamehot__list__items">
                                                <dl>
                                                    <dt className="gamehot__img">
                                                        <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                            <a>
                                                                <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />

                                                            </a>
                                                            {/* <img alt={title} title={title} width="75px" height="50px" src={Config.getImageIndex(thumbnail, 75, 75)} /> */}
                                                        </Link>
                                                    </dt>
                                                    <dd className="gamehot__title">
                                                        <div>
                                                            <p>
                                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a href="#">{title}</a></Link>     
                                                                                                               </p>
                                                            <span>Hành động</span>
                                                        </div>
                                                    </dd>
                                                    <dd className="gamehot__buttom">

                                                        <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                            <a className="btn btn-primary">  <span>Download</span></a>
                                                        </Link>
                                                    </dd>
                                                </dl>
                                            </li>
                                        )

                                    })
                                }

                            </ul>


                        }
                    </div>
                </div>
            </section>

        )
    }
}
export default GameHotFormView