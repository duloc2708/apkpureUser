import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'

class FeaturedGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        let { data } = this.state
        return (
            <section className="newGame popular-post-area gamehot wrap_bg">
                <div className="title flex-column col-lg-12" data-aos="fade-up">
                    <h4>FEATURED GAMES</h4>
                </div>
                <ul className="gamehot__list" data-aos="fade-up">
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
                                                    <Link as={`/${type}/${url}`} href={`/post?id=${url}`}><a href="#">{title}</a></Link>
                                                </p>
                                                <Link as={`/${type}`} href={`/type?id=${type}`}>
                                                    <span>{type_name}</span>
                                                </Link>
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
            </section>


        )
    }
}
export default FeaturedGame