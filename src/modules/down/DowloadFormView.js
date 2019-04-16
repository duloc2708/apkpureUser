
import Link from 'next/link'
import HotUpdateFormView from 'modules/down/HotUpdateFormView'
import LastReleaseFormView from 'modules/down/LastReleaseFormView'
let { initGA, logPageView } = Config
class DowloadFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView();
    }
    componentWillMount() {
        // $('head').append('<link rel="stylesheet" type="text/css" href="https://apksafety.com/static/styles/custom.min.css">');
    }
    componentDidMount() {
        // setTimeout(() => {
        //     const { name, mineType } = this.props.data
        //     const link = document.createElement('a');
        //     const href = `${Config.API_DOWNLOAD_FILE}post/getfileapk?namefile=${name}&mineType=${mineType}`
        //     link.href = href
        //     document.getElementById("link_down").href = href
        //     link.setAttribute('download', 'download'); //or any other extension
        //     document.body.appendChild(link);
        //     link.click();
        // }, 3000)


        // lấy link apkpure
        setTimeout(() => {
            const { atr10 } = this.props.data
            if (atr10) {
                const link = document.createElement('a');
                const href = atr10
                link.href = atr10
                document.getElementById("link_down").href = href
                link.setAttribute('download', 'download'); //or any other extension
                link.setAttribute("target", "_blank");
                document.body.appendChild(link);
                link.click();
            }
        }, 0)
    }
    render() {
        const { title } = this.props.data
        return (
            <React.Fragment>
                <section className="popular-post-area download__time pt-120">
                    <div className="container bg__time">
                        <h3>Downloading {title}</h3>
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                        <p>Your link are ready</p>
                        <div className="download__time__btn">
                            <a target="_blank" id="link_down" type="button" class="btn btn-success">
                                Download APK
                              </a>
                            {/* <button type="button"  className="btn btn-success">Download APK</button> */}
                            {/* <button type="button" className="btn btn-success">Download Data Main</button>
                            <button type="button" className="btn btn-success">Download Data Patch</button> */}
                        </div>
                    </div>
                </section>
                <section className="popular-post-area">
                    <div className="container">
                        <div className="row">
                            <div className="title d-flex flex-column col-lg-12">
                                <h4>Download</h4>
                                <span></span>
                            </div>
                            <HotUpdateFormView />
                            <LastReleaseFormView />
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}
export default DowloadFormView