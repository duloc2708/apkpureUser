import Link from 'next/link'
let { initGA, logPageView } = Config
import LazyImage from 'common/component/LazyImage'

class BlogFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView();
    }
    componentWillMount() {
        // $('head').append('<link rel="stylesheet" type="text/css" href="https://apksafety.com/static/styles/custom.min.css">');
    }
    componentDidMount() {

    }
    render() {
        const { data } = this.props
        return (
            <section className="popular-post-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>blog</h4>
                            <span></span>
                        </div>
                        <div className="col-lg-12 blog">
                            <div className="row">
                                {
                                    data.map((item, i) => {
                                        let { id, title, type_name, type, thumbnail, title_slug } = item
                                        return (
                                            <div className="col-lg-4 col-md-6" key={`blog_${id}`}>
                                                <div className="item_blog">
                                                    <figure>
                                                        <Link as={`/${'blog-detail'}/${title_slug}`} href={`/blog-detail?id=${title_slug}`}>
                                                            <a>
                                                                <LazyImage image={{ src: Config.getImageIndex(thumbnail, 300, 250), alt: title, width: 300, height: 250 }} />
                                                            </a>
                                                        </Link>
                                                    </figure>
                                                    <Link as={`/${'blog-detail'}/${title_slug}`} href={`/blog-detail?id=${title_slug}`}>
                                                        <span href="#">{title}</span>
                                                    </Link>
                                                    {/* <span>{title}</span> */}
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BlogFormView