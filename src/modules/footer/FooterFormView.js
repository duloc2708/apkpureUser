import { getListService } from 'modules/footer/actions/'
import Link from 'next/link'

class FooterFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        getListService().then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    render() {
        let { data } = this.state
        return (
            <footer className="footer-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>CUSTOMER SERVICE</h4>
                                <ul className="menu-list">
                                    {
                                        data.map(item => {
                                            let { id, title, routes } = item
                                            return ([
                                                <Link key={`link_${item.id}`} as={`/service/${routes}`} href={`/service?id=${routes}`}>
                                                    <a><span style={{ "color": "rgba(255,255,255,0.6)" }}>{item.title}</span></a>
                                                </Link>,
                                                , <br key={`br_${item.id}`} />]
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>Newsletter</h4>
                                <p>You can trust us. we only send  offers, not a single spam.</p>
                                <div className="d-flex flex-row" id="mc_embed_signup">
                                    <form className="navbar-form" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get">
                                        <div className="input-group add-on align-items-center d-flex">
                                            <input className="form-control" name="EMAIL" placeholder="Your email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required type="email" />
                                            <div className="input-group-btn">
                                                <button className="genric-btn"><span className="lnr lnr-arrow-right" /></button>
                                            </div>
                                        </div>
                                        <div className="info mt-20" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom row align-items-center">
                        <p className="footer-text m-0 col-lg-6 col-md-12">Copyright © 2019 <a href="http://apksafety.com">apksafety.com</a></p>
                        <div className="footer-social col-lg-6 col-md-12">
                            <a href="#"><i className="fa fa-facebook" /></a>
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-dribbble" /></a>
                            <a href="#"><i className="fa fa-behance" /></a>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
export default FooterFormView

