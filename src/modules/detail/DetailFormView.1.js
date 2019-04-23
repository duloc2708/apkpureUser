
import Link from 'next/link'
import SLideImageFormView from './SLideImageFormView'
import GameRecent from 'modules/home.content/GameRecent'
let { initGA, logPageView } = Config
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { updateView } from 'modules/detail/actions/'

class DetailFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { data } = this.props
        let dataTemp = data
        dataTemp.view = parseInt(dataTemp.view) + 1
        updateView(dataTemp)
        // if (!window.GA_INITIALIZED) {
        //     initGA()
        //     window.GA_INITIALIZED = true
        // }
        // logPageView();
        window.onload = function () {
            $.getScript(`/static/js/owl.carousel.min.js?v=${Config.build_version}`)
            $.getScript(`/static/js/jquery.matchHeight-min.js?v=${Config.build_version}`)

        }();
    }
    render() {
        let { view, title, type_name, type, thumbnail, content_long, title_slug, atr3, atr5, atr6, atr7 } = this.props.data
        let arrSlide = []
        if (atr7) {
            arrSlide = atr7.split(',')
        }
        return (
            <section className="popular-post-area pt-120 page__blog__detail">
            <div className="container page__blog__detail__bg">
              <div className="row">
                <div className="box">
                  <div className="box__title bread-crumbs">
                    <a href="/game">blog</a> » 
                    <a href="/game_action">blog_detail</a> » 
                    <span itemProp="name">pug mobile</span>
                  </div>
                </div>
                <div className="col-lg-12 blog_detail">
                  <div className="row">
                    <dl className="ny-dl ny-dl-n">
                      <dt>
                        <div className="icon"><img title="PUBG MOBILE icon" alt="PUBG MOBILE icon" src="img/blog/detail.png" /></div>
                      </dt>
                      <dd>
                        <div className="title-like">
                          <h1>PUBG MOBILE</h1>
                        </div>
                        <div className="details-sdk">
                          <span itemProp="version">0.11.0 </span>for Android
                        </div>
                        <div className="details-rating">
                          <div className="stars" title="average: 8.8 out of 10">
                          </div>
                          <div className="rating-info">
                            <span className="rating" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                              <span className="average" itemProp="ratingValue">8.8</span>
                              <meta itemProp="ratingCount" content={31865} />
                              <meta itemProp="bestRating" content={10} />
                              <meta itemProp="worstRating" content={1} />
                            </span>
                            <span className="details-delimiter"> | </span>
                            <a href="#comment" className="details-to-bottom" data-type="reviews">7.5k Reviews</a>
                            <span className="details-delimiter"> | </span>
                            <a href="#comment" className="details-to-bottom" data-type="posts">3.8k Posts</a>
                          </div>
                        </div>
                        <div className="details-author">
                          <p className="publisher">
                            <a title="Get more from Tencent Games" href="#">Tencent Games</a>
                          </p>
                        </div>
                        <div className="ny-down blue-stack">
                          <a className=" da" title="Download PUBG MOBILE latest version xapk" href="#">Download XAPK
                            <span className="fsize">(<span>1.7 GB</span>)</span>
                          </a>
                          <a title="PUBG MOBILE Previous Versions" href="#" className="ny-versions">Versions</a>
                          <a rel="nofollow" title="PUBG MOBILE safe verified" href="#" className="safe popsafe-open">
                            <img alt="PUBG MOBILE safe verified" src="img/blog/icon-verified_v2.png" width={16} /></a>
                        </div>
                      </dd>
                    </dl>
                    <div className="owl-carousel slideVideo">
                      <div className="item">
                        <div className="items__slide__block__img">
                          <a href="#">
                            <img src="img/home/pp1.jpg" />
                          </a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="items__slide__block__img">
                          <a href="#">
                            <img src="img/home/pp2.jpg" />
                          </a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="items__slide__block__img">
                          <a href="#">
                            <img src="img/home/pp3.jpg" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blog__detail__description">
                      <h2>The description of PUBG MOBILE</h2>
                      <div className="blog__detail__description__contain">
                        <p>
                          PLAYERUNKNOWN'S BATTLEGROUNDS goes mobile - the original Battle Royale game is now available on your device!
                        </p>
                        <p>
                          1. Official PUBG on Mobile
                          100 players parachute onto a remote 8x8 km island for a winner-takes-all showdown. Players have to locate and scavenge their own weapons, vehicles and supplies, and defeat every player in a graphically and tactically rich battleground that forces players into a shrinking play zone. Get ready to land, loot, and do whatever it takes to survive and be the last man standing!
                        </p>
                        <p>
                          2. High-quality Graphics and HD Audio 
                          The powerful Unreal Engine 4 creates a jaw-dropping visual experience with rich detail, realistic gameplay effects and a massive HD map for Battle Royale. Feel like you’re in the thick of the action as you play with high-quality audio, immersive 3D sound effects and 7.1 channel surround sound.
                        </p>
                        <p>
                          3. High-quality Graphics and HD Audio 
                          The powerful Unreal Engine 4 creates a jaw-dropping visual experience with rich detail, realistic gameplay effects and a massive HD map for Battle Royale. Feel like you’re in the thick of the action as you play with high-quality audio, immersive 3D sound effects and 7.1 channel surround sound.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start gamepopular */}
                <section className="popular-post-area gamehot pt-40 animated ">
                  <div className="container">
                    <div className="row">
                      <div className="title d-flex flex-column col-lg-12">
                        <h4>danh mục trả phí</h4>     
                        <span />            
                      </div>
                      <div className="col-lg-12 gamehot__contain">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <ul className="index-category cicon">
                              <li>
                                <a href="#">
                                  <i className="adventure">
                                  </i>Phiêu lưu</a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="arcade" />
                                  Trò chơi điện tử
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="puzzle" />
                                  Câu đố
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="simulation" />
                                  Mô phỏng
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <ul className="index-category cicon">
                              <li>
                                <a href="#">
                                  <i className="role-playing" />
                                  Nhập vai
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="sports" />
                                  Thể thao
                                </a>
                              </li>
                              <li>
                                <a href="/vn/game_word">
                                  <i className="word" />
                                  Tìm ô chữ
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="strategy" />
                                  Chiến thuật
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <ul className="index-category cicon">
                              <li>
                                <a href="#">
                                  <i className="trivia" />
                                  Trắc nghiệm kiến thức
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="entertainment" />
                                  Giải trí
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="racing" />
                                  Ô tô và xe cộ
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>    
                </section>
                {/* End gamepopular */}
              </div>  
            </div>  
          </section>
          
        )
    }
}
export default DetailFormView