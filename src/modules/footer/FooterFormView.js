import Link from 'next/link'
const linkStyle = {
    marginRight: 15
}
const FooterFormView = () => (
    <footer className="footer-area">
        <img className="pattern-right" src={`${Config.API_DOMAIN_CURRENT}/img/pattern-right.png`} alt="" />
        <div className="container">
            <div className="row">
                <div className="col-lg-2  col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h4>APKSAFETY</h4>
                        <ul className="menu-list">
                            <li><a href="#">APK downloader</a></li>
                            <li><a href="#">Android Apps</a></li>
                            <li><a href="#">Android Games</a></li>
                            <li><a href="#">Youtube Downloader</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2  col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h4>Top Android Apps</h4>
                        <ul className="menu-list">
                            <li><a href="#">WIFI WPS WPA TESTER</a></li>
                            <li><a href="#">WPS connect</a></li>
                            <li><a href="#">Wordpress</a></li>
                            <li><a href="#">XPOSED IMEI changer</a></li>
                            <li><a href="#">WhatsApp Messenger</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2  col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h4>Top Android Games </h4>
                        <ul className="menu-list">
                            <li><a href="#">clash of Clans</a></li>
                            <li><a href="#">Asphalt 8: Airborne</a></li>
                            <li><a href="#">Clash of Kings</a></li>
                            <li><a href="#">Case Clicker</a></li>
                            <li><a href="#">Mesgram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h4>Newsletter</h4>
                        <p>You can trust us. we only send  offers, not a single spam.</p>
                        <div className="d-flex flex-row" id="mc_embed_signup">
                            <form className="navbar-form" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get">
                                <div className="input-group add-on align-items-center d-flex">
                                    <input className="form-control" name="EMAIL" placeholder="Your email address" required="" type="email" />
                                    <div className="input-group-btn">
                                        <button className="genric-btn"><span className="lnr lnr-arrow-right"></span></button>
                                    </div>
                                </div>
                                <div className="info mt-20"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom row align-items-center">
                <p className="footer-text m-0 col-lg-6 col-md-12">Copyright © 2019 <a href="#">Game</a></p>
                <div className="footer-social col-lg-6 col-md-12">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-behance"></i></a>
                </div>
            </div>
        </div>
    </footer>
)

export default FooterFormView
