import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
class GameHotFormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('popular').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
            // var myscript = document.createElement('script');
            // myscript.setAttribute('src', 'http://apksafety.com/static/js/main.js');
            // var div = document.getElementById('target');
            // div.appendChild(myscript);
        })


    }
    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area gamehot">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>trò chơi mới nên chơi</h4>
                            <span></span>
                        </div>
                        <ul className="gamehot__list">
                            {
                                data.map((item, i) => {
                                    let { id, title, type_name, type, thumbnail, title_slug } = item

                                    return (
                                        <li  key={`i_${id}`} className="gamehot__list__items">
                                            <dl>
                                                <dt className="gamehot__img">
                                                    <img width="75px" height="50px" src={Config.getImage(thumbnail)} alt={title} />
                                                </dt>
                                                <dd className="gamehot__title">
                                                    <div>
                                                        <p>
                                                            <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a href="#">{title && title.substring(0, 10) + '...' || ''}</a></Link>                                                    </p>
                                                        <span>Hành động</span>
                                                    </div>
                                                </dd>
                                                <dd className="gamehot__buttom">
                                                    <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a className="btn btn-primary"> Nhận</a></Link>
                                                </dd>
                                            </dl>
                                        </li>

                                        // <ul key={`i_${id}`} className="gamehot__list">
                                        //     <li className="gamehot__img">
                                        //         <img width="75px" height="50px" src={Config.getImage(thumbnail)} alt={title} />
                                        //     </li>
                                        //     <li className="gamehot__title">
                                        //         <div>
                                        //             <p>
                                        //                 <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a href="#">{title && title.substring(0, 10) + '...' || ''}</a></Link>
                                        //             </p>
                                        //             <span>{type_name}</span>
                                        //         </div>
                                        //     </li>
                                        //     <li className="gamehot__buttom">
                                        //         <Link as={`/${type}/${title_slug}`} href={`/post?id=${title_slug}`}><a className="btn btn-primary"> Nhận</a></Link>
                                        //     </li>
                                        // </ul>
                                    )

                                })
                            }

                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}
export default GameHotFormView