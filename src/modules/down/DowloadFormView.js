
import Link from 'next/link'
import HotUpdateFormView from 'modules/down/HotUpdateFormView'
import LastReleaseFormView from 'modules/down/LastReleaseFormView'

class DowloadFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // setTimeout(() => {
        //     const { name, mineType } = this.props.data
        //     const link = document.createElement('a');
        //     link.href = `${Config.API_DOWNLOAD_FILE}articles/getfileapk?namefile=${name}&mineType=${mineType}`
        //     link.setAttribute('download', 'download'); //or any other extension
        //     document.body.appendChild(link);
        //     link.click();
        // }, 3000)
    }
    render() {
        let { title, type_name, type, thumbnail, content_long, title_slug, atr3 } = this.props.data
        return (
            <React.Fragment>
                <section className="popular-post-area download__time pt-120">
                    <div className="container bg__time">
                        <h3>Downloading Crafting Idle Clicker (Mod Money) 4.1.7mod</h3>
                        <p>Your link are ready</p>
                        <div className="download__time__btn">
                            <button type="button" className="btn btn-success">Download APK</button>
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
                            <LastReleaseFormView/>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}
export default DowloadFormView