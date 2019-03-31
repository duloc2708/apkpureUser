import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
class GameHotFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: -1, title: 'Citytopia: Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: 'static/img/no-image2.jpg', title_slug: '', atr4: 'static/img/no-image2.jpg' },
                { id: -2, title: 'Arena Brawls APK', type_name: 'Game action', type: '', thumbnail: 'static/img/no-image2.jpg', title_slug: '', atr4: 'static/img/no-image2.jpg' },
                { id: -3, title: 'Magic Rampage APK', type_name: 'Game action', type: '', thumbnail: 'static/img/no-image2.jpg', title_slug: '', atr4: 'static/img/no-image2.jpg' },
                { id: -4, title: 'Build your Dream City APK', type_name: 'Game action', type: '', thumbnail: 'static/img/no-image2.jpg', title_slug: '', atr4: 'static/img/no-image2.jpg' }
            ],

            isLoad: false
        }
    }
    componentDidMount() {
        getBlogBySection('game_new').then(Response => {
            let { Data } = Response
            this.setState({ data: Data, isLoad: true })
            // var myscript = document.createElement('script');
            // myscript.setAttribute('src', 'https://apksafety.com/static/js/main.js');
            // var div = document.getElementById('target');
            // div.appendChild(myscript);
        })


    }
    render() {
        let { data, isLoad } = this.state
        return (
            <section className="popular-post-area gamehot">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>NEW GAMES</h4>
                            <span></span>
                        </div>
                        {
                            isLoad ?
                                <ul className="gamehot__list">
                                    {
                                        data.map((item, i) => {
                                            let { id, title, type_name, type, thumbnail, title_slug } = item

                                            return (
                                                <li key={`i_${id}`} className="gamehot__list__items">
                                                    <dl>
                                                        <dt className="gamehot__img">
                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                                <a>
                                                                    <LazyImage image={{ src: Config.getImageIndex(thumbnail, 75, 75), alt: title, width: 75, height: 75 }} />

                                                                </a>
                                                                {/* <img alt={title} title={title} width="75px" height="50px" src={Config.getImageIndex(thumbnail, 75, 75)} /> */}
                                                            </Link>
                                                        </dt>
                                                        <dd className="gamehot__title">
                                                            <div>
                                                                <p>
                                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a href="#">{title}</a></Link>                                                    </p>
                                                                <span>Hành động</span>
                                                            </div>
                                                        </dd>
                                                        <dd className="gamehot__buttom">

                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                                <a className="btn btn-primary">  <span>Download</span></a>
                                                            </Link>
                                                        </dd>
                                                    </dl>
                                                </li>
                                            )

                                        })
                                    }

                                </ul>
                                :
                                <ul className="gamehot__list">
                                    {
                                        data.map((item, i) => {
                                            let { id, title, type_name, type, thumbnail, title_slug } = item

                                            return (
                                                <li key={`i_${id}`} className="gamehot__list__items">
                                                    <dl>
                                                        <dt className="gamehot__img">
                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                                <a>
                                                                    <img alt={title} title={title} width="75px" height="50px" src={thumbnail} />
                                                                </a>
                                                            </Link>
                                                        </dt>
                                                        <dd className="gamehot__title">
                                                            <div>
                                                                <p>
                                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a href="#">{title}</a></Link>                                                    </p>
                                                                <span>Hành động</span>
                                                            </div>
                                                        </dd>
                                                        <dd className="gamehot__buttom">

                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}>
                                                                <a className="btn btn-primary">  <span>Download</span></a>
                                                            </Link>
                                                        </dd>
                                                    </dl>
                                                </li>
                                            )

                                        })
                                    }

                                </ul>


                        }
                    </div>
                </div>
            </section>

        )
    }
}
export default GameHotFormView