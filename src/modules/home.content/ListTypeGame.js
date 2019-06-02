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
            <div className="category__game wrap_bg">
                <div className="title" >
                    <h4 className="title__search">Category Games</h4>
                </div>
                <ul className="index-category index-category-b cicon">
                    {
                        data.map((item, i) => {
                            if (i <= 19) {
                                return (
                                    <li key={i}>
                                        <Link as={`/${item.code}`} href={`/type?id=${item.code}`}>
                                            <a>
                                                <i className="adventure">
                                                </i>{item.name}</a>
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>

        )
    }
}
export default ListTypeGame