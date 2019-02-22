import PopularFormView from 'modules/home.content/PopularFormView.js'
import GameHotFormView from 'modules/home.content/GameHotFormView.js'
import VideoFormView from 'modules/home.content/VideoFormView.js'
import ListTypeGame from 'modules/home.content/ListTypeGame.js'
class ContentFormView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PopularFormView />
                <GameHotFormView />
                <VideoFormView />
                <ListTypeGame />
            </React.Fragment>
        )
    }
}
export default ContentFormView