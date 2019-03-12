import SlideFormView from 'modules/home.content/SlideFormView.js'
import GameHotFormView from 'modules/home.content/GameHotFormView.js'
import VideoFormView from 'modules/home.content/VideoFormView.js'
import VideoMobileFormView from 'modules/home.content/VideoMobileFormView.js'
import ListTypeGame from 'modules/home.content/ListTypeGame.js'
import TopDownFormView from 'modules/home.content/TopDownFormView.js'
import FeaturedGame from 'modules/home.content/FeaturedGame.js'
import FeaturedApp from 'modules/home.content/FeaturedApp.js'
import SlideMobileFormView from 'modules/home.content/SlideMobileFormView.js'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
class ContentFormView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserView>
                   <SlideFormView />
                </BrowserView>
                <MobileView>
                   <SlideMobileFormView />
                </MobileView>
                <GameHotFormView />
                <TopDownFormView />
                <FeaturedGame />
                <FeaturedApp />
                <BrowserView>
                   <VideoFormView />
                </BrowserView>
                <MobileView>
                   <VideoMobileFormView />
                </MobileView>
                <ListTypeGame />
            </React.Fragment>
        )
    }
}
export default ContentFormView