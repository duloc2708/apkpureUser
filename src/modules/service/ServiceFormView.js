
class ServiceFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        let { view, title, routes, content } = this.props.data
        console.log(' this.props.data', this.props.data);

        return (
            <section className="popular-post-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="box">
                            <div className="box__title bread-crumbs">
                                <a href="/">Home</a> » <a >{routes}</a>
                            </div>
                        </div>
                        <div className="col-lg-12 blog_detail">
                            <div className="row">
                                <div className="blog__detail__description">
                                    <div dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default ServiceFormView