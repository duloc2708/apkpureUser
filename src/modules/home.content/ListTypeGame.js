import { getListType } from 'modules/home.content/actions/'
import Link from 'next/link'
class ListTypeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        getListType().then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })

    }
    render() {
        let { data } = this.state
        return (
            <section className="popular-post-area gamehot pt-40">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>Category Games</h4>
                            <span></span>
                        </div>
                        <div className="col-lg-12 gamehot__contain">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <ul className="index-category">
                                        {
                                            data.map((item, i) => {
                                                if (i <= 5)
                                                    return (
                                                        <li key={i}>
                                                            <Link as={`/${item.code}`} href={`/type`}>
                                                                <a>
                                                                    <i className="adventure">
                                                                    </i>{item.name}</a>
                                                            </Link>


                                                        </li>
                                                    )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <ul className="index-category">
                                        {
                                            data.map((item, i) => {
                                                if (i > 5 && i <= 11)
                                                    return (
                                                        <li key={i}>
                                                            <Link as={`/${item.code}`} href={`/type`}>
                                                                <a>
                                                                    <i className="adventure">
                                                                    </i>{item.name}</a>
                                                            </Link>
                                                        </li>
                                                    )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <ul className="index-category">
                                        {
                                            data.map((item, i) => {
                                                if (i > 11 && i <= 17)
                                                    return (
                                                        <li key={i}>
                                                            <Link as={`/${item.code}`} href={`/type`}>
                                                                <a>
                                                                    <i className="adventure">
                                                                    </i>{item.name}</a>
                                                            </Link>
                                                        </li>
                                                    )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ListTypeGame