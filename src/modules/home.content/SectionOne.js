import { getBlogBySection } from 'modules/home.content/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
import NewGameFormView from './NewGameFormView'
import FeaturedGame from './FeaturedGame'
import TopGamView from './TopGamView'
import CollectionFormView from './CollectionFormView'

class SectionOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            data2: this.props.data2,
            data3: this.props.data3,
            dataCollection: this.props.dataCollection

        }
    }
    render() {
        let { data, data2, data3, dataCollection } = this.state
        return (
            <section className="page__home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Start gamehot */}
                            <NewGameFormView data={data} />
                            {/* End gamehot */}
                            {/* Start featured game */}
                            <CollectionFormView data={dataCollection} />
                            {/* End featured game */}
                            {/* Start gamehot */}
                            <FeaturedGame data={data2} />
                            {/* End gamehot */}
                        </div>
                        <TopGamView data={data3} />

                    </div>
                </div>
            </section>

        )
    }
}
export default SectionOne