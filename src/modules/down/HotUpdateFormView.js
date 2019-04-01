
import Link from 'next/link'
import { getBlogBySection } from 'modules/home.content/actions/'
import LazyImage from 'common/component/LazyImage'

class HotUpdateFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('slide').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    render() {
        let { data } = this.state
        return (
            <section className="page__download">
                <div className="title__download section-title">
                    <span><a href="#">HOT UPDATE</a></span>
                </div>
                <div className="section-content">
                    {
                        data.map((item, i) => {
                            let { id, title, type_name, type, thumbnail, title_slug, atr4 } = item
                            return (
                                <div key={id} className="items">
                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                        <a className="favicon" title={title}>
                                            <LazyImage image={{ src: Config.getImageIndex(thumbnail, 80, 75), alt: title, width: 80, height: 75 }} />
                                        </a>
                                    </Link>
                                    <div className="name">
                                        <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a>{title}</a></Link>
                                    </div>
                                    <div className=" author">
                                        <a href="#" className="_search_author"> {type_name} </a>
                                    </div>
                                    <div className="ver">
                                        {/* <a>4.3 </a> */}
                                    </div>
                                    <div className="btn-download">
                                        <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a > <i className="fa fa-download" aria-hidden="true"></i></a></Link>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </section>


        )
    }
}
export default HotUpdateFormView