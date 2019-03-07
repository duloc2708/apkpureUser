import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
class FeaturedGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('featured_games').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
            // var myscript = document.createElement('script');
            // myscript.setAttribute('src', 'http://apksafety.com/static/js/main.js');
            // var div = document.getElementById('target');
            // div.appendChild(myscript);
        })


    }
    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area gamehot">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>FEATURED GAMES</h4>
                            <span></span>
                        </div>
                        <ul className="gamehot__list">
                            {
                                data.map((item, i) => {
                                    let { id, title, type_name, type, thumbnail, title_slug } = item

                                    return (
                                        <li  key={`i_${id}`} className="gamehot__list__items">
                                            <dl>
                                                <dt className="gamehot__img">
                                                    <img width="75px" height="50px" src={Config.getImage(thumbnail)} alt={title} />
                                                </dt>
                                                <dd className="gamehot__title">
                                                    <div>
                                                        <p>
                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a href="#">{title}</a></Link>                                                    </p>
                                                        <span>Hành động</span>
                                                    </div>
                                                </dd>
                                                <dd className="gamehot__buttom">
                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a className="btn btn-primary"> Download</a></Link>
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
export default FeaturedGame