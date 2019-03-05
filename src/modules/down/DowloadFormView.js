
import Link from 'next/link'
import HotUpdateFormView from 'modules/down/HotUpdateFormView'
import LastReleaseFormView from 'modules/down/LastReleaseFormView'

class DowloadFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {
            const { name, mineType } = this.props.data
            const link = document.createElement('a');
            const href = `${Config.API_DOWNLOAD_FILE}articles/getfileapk?namefile=${name}&mineType=${mineType}`
            link.href = href
            document.getElementById("link_down").href = href
            link.setAttribute('download', 'download'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }, 3000)
    }
    render() {
        const { name, mineType, title } = this.props.data

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
                            <a id="link_down">
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