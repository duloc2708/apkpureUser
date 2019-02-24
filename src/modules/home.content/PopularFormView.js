import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'

class PopularFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        getBlogBySection('popular').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>Trò Chơi</h4>
                            <span></span>
                        </div>
                        <div className="active-popular-post-carusel pt-50">
                            {
                                data.map((item, i) => {
                                    let { id, title, type_name, type, thumbnail, title_slug } = item
                                    return (
                                        <div key={id} className="single-popular-carusel">
                                            <p className="newgame"> <Link as={`/${type}`} href={`/type`}><a>{type_name}</a></Link></p>
                                            <h4 className="newgame__title">
                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a>{title}</a></Link>
                                            </h4>
                                            <p className="newgame_subtitle">{title}</p>
                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                <img className="img-fluid" src={Config.getImage(thumbnail)} alt={title} />
                                            </Link>
                                            <a href="blog-single.html">
                                            </a>
                                            <div className="meta d-flex flex-row">
                                                <a href="#"><p>March 22, 2018</p></a>
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
export default PopularFormView