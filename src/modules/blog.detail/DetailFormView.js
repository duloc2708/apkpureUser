
import Link from 'next/link'
let { initGA, logPageView } = Config
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { updateView } from 'modules/detail/actions/'
import TopGamView from 'modules/home.content/TopGamView'

import GameBottom from './GameBottom'
import ContentDetail from './ContentDetail'

class DetailFormView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { data } = this.props
        let dataTemp = data
        dataTemp.view = parseInt(dataTemp.view) + 1
        updateView(dataTemp)
    }
    render() {
        let { view, title, type_name, type, thumbnail, content_long, title_slug, atr3, atr5, atr6, atr7, link, gameother } = this.props.data
        return (
            <React.Fragment>
                <section className="page__video__detail popular-post-area wrap__section">
                    <div className="container ">
                        <div className="col-lg-12">
                            <div className="row">
                                <ContentDetail title={title} link={link} gameother={gameother} />
                                <TopGamView />
                            </div>
                        </div>
                    </div>
                </section>

                <GameBottom />
            </React.Fragment>
        )
    }
}
export default DetailFormView