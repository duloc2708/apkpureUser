
import Link from 'next/link'

class DowloadFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { title, type_name, type, thumbnail, content_long, title_slug, atr3 } = this.props.data
        return (
            <section className="popular-post-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>Download</h4>
                            <span></span>
                        </div>
                        <section className="page__download">
                            <div className="title__download section-title">
                                <span><a href="#">HOT UPDATE</a></span>
                            </div>
                            <div className="section-content">
                                <div className="items">
                                    <a className="favicon" href="#" title="Pixel Z Gunner 3D">
                                        <img src={`${Config.API_LOCAL_IMAGE}img/download/rogue-agents_icon.png`} />
                                    </a>
                                    <div className="name">
                                        <a href="#" title="Pixel Z Gunner 3D">Pixel Z Gunner 3D - Battle Survival Fps (Free Shopping) 4.3</a>
                                    </div>
                                    <div className=" author">
                                        <a href="#" className="_search_author"> PixelStar Games </a>
                                    </div>
                                    <div className="ver">
                                        <a>4.3 </a>
                                    </div>
                                    <div className="btn-download">
                                        <a href="#">
                                            <i className="fa fa-download" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="latest box-white block">
                            <div className="title__download section-title">
                                <span><a href="#">LATEST RELEASES</a></span>
                            </div>
                            <div className="section-content">
                                <ul>
                                    <li className="item">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <a href="#" className="img-item">
                                                    <img className="lazy loaded" alt="Folio for Facebook 3.2.13" title="Folio for Facebook 3.2.13" src="https://static.appvn.com/a/uploads/thumbnails/022016/folio-for-facebook_icon.png" />
                                                </a>
                                                <div className="info">
                                                    <a href="#" title="Folio for Facebook 3.2.13">
                                                        Folio for Facebook 3.2.13
                                                </a>
                                                    <div className="new-chap author">
                                                        <a href="#" className="search_author"> Creative Labs LLC </a>
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
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        )
    }
}
export default DowloadFormView