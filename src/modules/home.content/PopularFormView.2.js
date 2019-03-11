import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'

class PopularFormView extends React.Component {
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
            setTimeout(() => {
                window.onload = function () {
                    $.getScript('http://apksafety.com/static/js/main.js')
                }();
            }, 100);
        })
    }
    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 slide__game">
                            <div className="row">
                                <div className="col-md-3 col-sm-4">
                                    <div className="items__slide__block__content">
                                        <p className="newgame">
                                            <a href="#">game_strategy</a>
                                        </p>
                                        <h4 className="newgame__title">
                                            <a href="#">ShelterGirls APK</a>
                                        </h4>
                                    </div>
                                    <div className="items__slide__block__img">
                                        <a href="#">
                                            <img src={`${Config.API_LOCAL_IMAGE}img/home/pp1.jpg`} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="items__slide__block__content">
                                        <p className="newgame">
                                            <a href="#">game_strategy</a>
                                        </p>
                                        <h4 className="newgame__title">
                                            <a href="#">ShelterGirls APK</a>
                                        </h4>
                                    </div>
                                    <div className="items__slide__block__img">
                                        <a href="#">
                                            <img src={`${Config.API_LOCAL_IMAGE}img/home/pp1.jpg`} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="items__slide__block__content">
                                        <p className="newgame">
                                            <a href="#">game_strategy</a>
                                        </p>
                                        <h4 className="newgame__title">
                                            <a href="#">ShelterGirls APK</a>
                                        </h4>
                                    </div>
                                    <div className="items__slide__block__img">
                                        <a href="#">
                                            <img src={`${Config.API_LOCAL_IMAGE}img/home/pp1.jpg`} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="items__slide__block__content">
                                        <p className="newgame">
                                            <a href="#">game_strategy</a>
                                        </p>
                                        <h4 className="newgame__title">
                                            <a href="#">ShelterGirls APK</a>
                                        </h4>
                                    </div>
                                    <div className="items__slide__block__img">
                                        <a href="#">
                                            <img src={`${Config.API_LOCAL_IMAGE}img/home/pp1.jpg`} />
                                        </a>
                                    </div>
                                </div>
                                <div className="button_prev">
                                    <a href="#">
                                        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="button_next">
                                    <a href="#">
                                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default PopularFormView