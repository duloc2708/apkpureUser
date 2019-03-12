import PopularFormView from 'modules/home.content/PopularFormView.js'
import GameHotFormView from 'modules/home.content/GameHotFormView.js'
import VideoFormView from 'modules/home.content/VideoFormView.js'
import ListTypeGame from 'modules/home.content/ListTypeGame.js'
import TopDownFormView from 'modules/home.content/TopDownFormView.js'
import FeaturedGame from 'modules/home.content/FeaturedGame.js'
import FeaturedApp from 'modules/home.content/FeaturedApp.js'

class ContentFormView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="popular-post-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="title d-flex flex-column col-lg-12">
                                <h4>Trò Chơi</h4>
                                <span></span>
                            </div>
                            <div className="col-lg-12 slide__game owl-carousel">
                                <div className="row">
                                    <div className="col-md-3 col-sm-4">
                                        <div className="items__slide__block__content match">
                                            <p className="newgame">
                                                <a href="#">game_strategy</a>
                                            </p>
                                            <h4 className="newgame__title">
                                                <a href="#">ShelterGirls APKddddddddddddddddddddddddddddddddddddd</a>
                                            </h4>
                                        </div>
                                        <div className="items__slide__block__img">
                                            <a href="#">
                                                <img src={`${Config.API_LOCAL_IMAGE}img/home/pp1.jpg`} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="items__slide__block__content match">
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
                                        <div className="items__slide__block__content match">
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
                                        <div className="items__slide__block__content match">
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
                                <div className="owl-controls">
                                    <div className="owl-dots">
                                        <div className="owl-dot active">
                                            <span></span>
                                        </div>
                                        <div className="owl-dot">
                                            <span></span>
                                        </div>
                                        <div className="owl-dot">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GameHotFormView />
                <TopDownFormView />
                <FeaturedGame />
                <FeaturedApp />
                <VideoFormView />
                <ListTypeGame />
            </React.Fragment>
        )
    }
}
export default ContentFormView