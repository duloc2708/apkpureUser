import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import { getBlogBySection } from 'modules/home.content/actions/'
import GameRecent from './GameRecent'

class ContentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        }
    }
    componentDidMount() {
        getBlogBySection('game_new').then(Response => {
            let { Data } = Response
            this.setState({ data: Data })
        })
    }
    render() {
        const { data } = this.state
        const { link, title, gameother } = this.props
        return (
            <div className="col-md-8 col-sm-12">
                <h3 className="video__block__title">{title}</h3>
                <div className="video__wrapper">
                    <iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                </div>
                <GameRecent listgame={gameother} />
            </div>
        )
    }
}
export default ContentDetail