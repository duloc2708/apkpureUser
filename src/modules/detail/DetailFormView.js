
import Link from 'next/link'

class DetailFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { title, type_name, type, thumbnail } = this.props.data
        return (
            <section className="popular-post-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="box">
                            <div className="box__title bread-crumbs">
                                <a href="/game">blog</a> »
                          <a href="/game_action">blog_detail</a> »
                          <span itemProp="name">{type_name}</span>
                            </div>
                        </div>
                        <div className="col-lg-12 blog_detail">
                            <div className="row">
                                <dl className="ny-dl ny-dl-n">
                                    <dt>
                                        <div className="icon"><img title="PUBG MOBILE icon" alt="PUBG MOBILE icon" src={Config.getImage(thumbnail)} /></div>
                                    </dt>
                                    <dd>
                                        <div className="title-like">
                                            <h1>{title}</h1>
                                        </div>
                                        <div className="details-sdk">
                                            <span itemProp="version">0.11.0 </span>for Android
                                  </div>
                                        <div className="details-rating">
                                            <div className="stars" title="average: 8.8 out of 10">
                                            </div>
                                            <div className="rating-info">
                                                <span className="rating" itemProp="aggregateRating" itemScope="" itemType="http://schema.org/AggregateRating">
                                                    <span className="average" itemProp="ratingValue">8.8</span>
                                                    {/* <meta itemProp="ratingCount" content="31865">
                                              <meta itemProp="bestRating" content="10">
                                              <meta itemProp="worstRating" content="1"> */}
                                                </span>
                                                <span className="details-delimiter"> | </span>
                                                <a href="#comment" className="details-to-bottom" data-type="reviews">7.5k Reviews</a>
                                                <span className="details-delimiter"> | </span>
                                                <a href="#comment" className="details-to-bottom" data-type="posts">3.8k Posts</a>
                                            </div>
                                        </div>
                                        <div className="details-author">
                                            <p itemProp="publisher">
                                                <a title="Get more from Tencent Games" href="#">Tencent Games</a>
                                            </p>
                                        </div>
                                        <div className="ny-down blue-stack">
                                            <a className=" da" title="Download PUBG MOBILE latest version xapk" href="#">Download XAPK
                                          <span className="fsize">(<span>1.7 GB</span>)</span>
                                            </a>
                                            <a title="PUBG MOBILE Previous Versions" href="#" className="ny-versions">Versions</a>
                                            <a rel="nofollow" title="PUBG MOBILE safe verified" href="#" className="safe popsafe-open">
                                                <img alt="PUBG MOBILE safe verified" src={`${Config.API_LOCAL_IMAGE}img/blog/icon-verified_v2.png`} width="16" /></a>
                                            <a className="play-on r" href="#" target="_blank" rel="nofollow">
                                                Play on BlueStacks
                                      </a>
                                        </div>
                                    </dd>
                                </dl>
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
                     itemProp                       The powerful Unreal Engine 4 creates a jaw-dropping visual experience with rich detail, realistic gameplay effects and a massive HD map for Battle Royale. Feel like you’re in the thick of the action as you play with high-quality audio, immersive 3D sound effects and 7.1 channel surround sound.
                                  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default DetailFormView