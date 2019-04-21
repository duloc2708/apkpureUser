import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class CollectionFormView extends React.Component {
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
                <div className="row wrap_pd">
                    <div className="title flex-column col-lg-12" data-aos="fade-up">
                        <h4>COLLECTION</h4>
                    </div>
                    <div className="featuredGame__list col-lg-12">
                        <div className="row">
                            {
                                data.map((item, i) => {
                                    let { id, title, type_name, type, thumbnail, title_slug } = item
                                    if (thumbnail.indexOf('youtube') == -1) {
                                        thumbnail = Config.getImageIndex(thumbnail, 0, 0)
                                    }
                                    return (
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up">
                                            <div className="featuredGame__list__inner">
                                                <p className="featuredGame__list__mask">
                                                    <Link as={`/${'blog-detail'}/${title_slug}`} href={`/blog-detail?id=${title_slug}`}>
                                                        <a>
                                                            <LazyImage image={{ src: thumbnail, alt: title, width: 0, height: 200 }} />

                                                        </a>
                                                    </Link>
                                                </p>
                                                <h4 className="featuredGame__list__caption">
                                                    <Link as={`/${'blog-detail'}/${title_slug}`} href={`/blog-detail?id=${title_slug}`}><a href="#">{title}</a></Link>
                                                </h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
export default CollectionFormView