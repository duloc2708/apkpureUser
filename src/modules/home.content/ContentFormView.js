import PopularFormView from 'modules/home.content/PopularFormView.js'
import GameHotFormView from 'modules/home.content/GameHotFormView.js'
import VideoFormView from 'modules/home.content/VideoFormView.js'
import ListTypeGame from 'modules/home.content/ListTypeGame.js'
import TopDownFormView from 'modules/home.content/TopDownFormView.js'
import FeaturedGame from 'modules/home.content/FeaturedGame.js'
import FeaturedApp from 'modules/home.content/FeaturedApp.js'

class ContentFormView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PopularFormView />
                <GameHotFormView />
                <TopDownFormView/>
                <FeaturedGame/>
                <FeaturedApp/>
                <VideoFormView />
                <ListTypeGame />
            </React.Fragment>
        )
    }
}
export default ContentFormView