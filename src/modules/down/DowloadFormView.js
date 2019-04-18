
import Link from 'next/link'
import HotUpdateFormView from 'modules/down/HotUpdateFormView'
import LastReleaseFormView from 'modules/down/LastReleaseFormView'
import { getlink } from 'modules/down/actions'

let { initGA, logPageView } = Config
class DowloadFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 60
        };
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        let { time } = this.state
        if (time > 0) {
            this.setState({
                time: time - 1
            });
        }
    }

    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView();
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );

        getlink(this.props.data).then(res => {
            const { Data } = res.data
            let { url_down } = Data
            const link = document.createElement('a');
            link.href = url_down
            document.getElementById("link_down").href = url_down
            link.setAttribute('download', 'download'); //or any other extension
            document.body.appendChild(link);
            link.click();
            this.setState({
                time: 0
            });
        })
    }

    // componentDidMount() {
    //     // getlink(this.props.data).then(res => {
    //     //     const { Data } = res.data
    //     //     console.log('data>>>>>>>', Data);
    //     //     const link = document.createElement('a');
    //     //     document.getElementById("link_down").href = Data
    //     //     link.setAttribute('download', 'download'); //or any other extension
    //     //     document.body.appendChild(link);
    //     //     link.click();
    //     // })


    //     // lấy link từ apk nhâp
    //     // const { name, mineType, title } = context.query
    //     // const res = await axios(`${Config.API_URL}post/get_link_apk`, { params: { title_slug: name } })
    //     // const { Data } = await res.data

    //     // setTimeout(() => {
    //     //     const { name, mineType } = this.props.data
    //     //     const link = document.createElement('a');
    //     //     const href = `${Config.API_DOWNLOAD_FILE}post/getfileapk?namefile=${name}&mineType=${mineType}`
    //     //     link.href = href
    //     //     document.getElementById("link_down").href = href
    //     //     link.setAttribute('download', 'download'); //or any other extension
    //     //     document.body.appendChild(link);
    //     //     link.click();
    //     // }, 3000)


    //     // lấy link apkpure
    //     // setTimeout(() => {
    //     //     const { atr10 } = this.props.data
    //     //     if (atr10) {
    //     //         const link = document.createElement('a');
    //     //         const href = atr10
    //     //         link.href = atr10
    //     //         document.getElementById("link_down").href = href
    //     //         link.setAttribute('download', 'download'); //or any other extension
    //     //         link.setAttribute("target", "_blank");
    //     //         document.body.appendChild(link);
    //     //         link.click();
    //     //     }
    //     // }, 0)
    // }
    render() {
        const { title } = this.props.data
        let { time } = this.state
        return (
            <React.Fragment>
                <section className="popular-post-area download__time pt-120">
                    <div className="container bg__time">
                        <h3>Downloading {title}</h3>
                        <p>Your link are ready</p>
                        {time == 0 ? '' :
                            [<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                , <h2>{time}s</h2>
                            ]
                        }

                        <div className="download__time__btn">
                            <a type="button" id="link_down" className="btn btn-success">Download APK</a>
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