class VideoMobileFormView extends React.Component {
    render() {
        return (
            <section className="latest-post-carusel-area popular-post-area pt-40">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column">
                            <h4>Video</h4>
                            <span></span>
                        </div>
                        <div className="col-lg-12 slide__video">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="single-post-carusel item videoWrapper">
                                        <div className="feature-image relative videoWrapper">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/KI0MHwGzl6U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="button_prev">
                                    <a >
                                        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="button_next">
                                    <a>
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
export default VideoMobileFormView