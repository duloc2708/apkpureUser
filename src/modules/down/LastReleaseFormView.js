
import Link from 'next/link'
import { getBlogBySection } from 'modules/home.content/actions/'

class LastReleaseFormView extends React.Component {
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
        let { data } = this.state
        return (
            <section className="latest box-white block">
                <div className="title__download section-title">
                    <span><a href="#">LATEST RELEASES</a></span>
                </div>
                <div className="section-content">
                    <ul>
                        {
                            data.map((item, i) => {
                                let { id, title, type_name, type, thumbnail, title_slug, atr4 } = item
                                return (
                                    <li key={`last_${id}`} className="item">
                                        <div className="row">
                                            <div className="col-md-7">

                                                <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                    <a className="img-item" title={title}>
                                                        <img className="lazy loaded" alt={title} src={Config.getImage(thumbnail)} alt={title} />
                                                    </a>
                                                </Link>
                                                <div className="info">
                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a>{title}</a></Link>
                                                    <div className="new-chap author">
                                                        <a href="#" className="search_author"> {type_name} </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="vol-chap ver text-left">
                                                    <p>3.2.13</p>
                                                    <p className="new-chap">27.02.2019</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="btn-download">
                                                    <a href="#">
                                                        <i className="fa fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                )
                            })
                        }

                    </ul>
                </div>
            </section>

        )
    }
}
export default LastReleaseFormView