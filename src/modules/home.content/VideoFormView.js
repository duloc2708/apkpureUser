class VideoFormView extends React.Component {
    render() {
        return (
            <section className="latest-post-carusel-area popular-post-area pt-40">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>Video game</h4>
                            <span></span>
                        </div>
                        <div className="active-latest-post-carusel pt-40">
                            <div className="single-post-carusel item">
                                <div className="feature-image relative">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KI0MHwGzl6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="single-post-carusel item">
                                <div className="feature-image">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mH8v3Q5amuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="single-post-carusel item">
                                <div className="feature-image">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sfXqKHaZwLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="single-post-carusel item">
                                <div className="feature-image">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZyvwODEjmXw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default VideoFormView