import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'

class MostVideo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        const { data } = this.props
        return (
            <section className="row recent_uploads">
                <div className="container">
                    <div className="row title_row">
                        <h3>Most Viewed Videos</h3>
                    </div>
                    <div className="row media-grid content_video_posts">
                        {
                            data.map((item, i) => {
                                let { thumbnail, title, title_slug, link } = item
                                if (thumbnail.indexOf('youtube') == -1) {
                                    thumbnail = Config.getImageIndex(thumbnail, 0, 0)
                                }
                                return (
                                    <article  key={i} className="col-sm-4 video_post postType3">
                                        <div className="inner row m0">
                                            <Link as={`/${'blog-detail'}/${title_slug}`} href={`/blog-detail?id=${title_slug}`}>
                                                <a 
                                                ><div className="row screencast m0">
                                                    <img src={thumbnail} alt="" className="cast img-responsive" />
                                                    <div className="play_btn"></div>
                                                </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                    <p className="see_more"><a href="#">Read more</a></p>
                </div>
            </section>
        )
    }
}
export default MostVideo