import Link from 'next/link'
let { initGA, logPageView } = Config
import TopGamView from 'modules/home.content/TopGamView'
import LazyImage from 'common/component/LazyImage'
import { getFileApk } from 'modules/apkdownload/actions/'

class ApkDownloadFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isSearch: false,
            textValidate: '',
            isSearch: false
        }
    }
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
    }
    _getAPK() {
        let url = this.refs.inputfile.value
        let { data, isSearch } = this.state
        if (isSearch) {
            alert('Waiting ...')
        } else {
            if (url) {
                if (url.indexOf('http') != -1) {
                    var urlNew = new URL(url);
                    var c = urlNew.searchParams.get("id");
                    if (c) {
                        this._postData(c)
                    } else {
                        this.setState({ textValidate: 'The requested app is not found or invalid. Please make sure the app exist on Play Store' })
                    }
                } else {
                    this._postData(url)
                }
            } else {
                this.setState({ textValidate: 'Please make sure package name or URL is valid' })
            }
        }

    }
    _postData(id) {
        this.setState({ isSearch: true })
        getFileApk(id).then((response) => {
            let { data } = response
            if (data.status == 'error') {
                if (data.data.indexOf('Invalid URL / Package Name') != -1) {
                    this.setState({ textValidate: 'Invalid URL / Package Name', isSearch: false })
                } else {
                    this.setState({ textValidate: data.data, isSearch: false })
                }
            } else {
                this.setState({ data: data, isSearch: false })
            }
        })
    }
    render() {
        let { data, isSearch } = this.state
        return (
            <section className="popular-post-area pt-120 page__getfile container">
                <h2>Package name or Google Play URL</h2>
                <div className="form-group has-float-label">
                    <input
                        className="form-control"
                        name="getfile"
                        id="inputfile"
                        ref="inputfile"
                        placeholder="com.evozi.network or https://play.google.com/store/apps/details?id="
                    />
                </div>
                <div className="row from_get_data">
                    <div className="col-md-8">
                        {data && data.status && data.status != 'error' ?
                            <ul>
                                <li>
                                    Package name:<span>{data.packagename}</span>
                                </li>
                                <li>
                                    File size: <span>{data.filesize}</span>
                                </li>
                                <li>
                                    version: <span>{data.version}</span>
                                </li>
                            </ul>
                            : <p style={{ "color": "#a94442" }}><b>{this.state.textValidate}</b></p>
                        }
                        {isSearch ? 'Searching and downloading APK...It may take up to 3 minutes, depending on file size'
                            : ''}
                    </div>
                    {/* <div className="col-md-4">
                        <img src="img/home/icon.png" />
                    </div> */}
                </div>
                <div className="button_download">
                    <a onClick={() => this._getAPK()} className="button_download_top">
                        Generate Download Link
              </a>
                    <a href={`${data && data.url || ''}`} className="button_download_bot">
                        Click here to download {`${data && data.packagename || ''}`}
                    </a>
                </div>
            </section>


        )
    }
}
export default ApkDownloadFormView