// import SlideFormView from 'modules/home.content/SlideFormView.js'
import GameHotFormView from 'modules/home.content/GameHotFormView.js'
import VideoFormView from 'modules/home.content/VideoFormView.js'
import VideoMobileFormView from 'modules/home.content/VideoMobileFormView.js'
import ListTypeGame from 'modules/home.content/ListTypeGame.js'
import TopDownFormView from 'modules/home.content/TopDownFormView.js'
import FeaturedGame from 'modules/home.content/FeaturedGame.js'
import FeaturedApp from 'modules/home.content/FeaturedApp.js'
// import SlideMobileFormView from 'modules/home.content/SlideMobileFormView.js'
// import SlideTabletFormView from 'modules/home.content/SlideTabletFormView.js'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import {
    TabletView,
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    isTablet
} from "react-device-detect";
class ContentFormView extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <BrowserView>
                    <SlideFormView />
                </BrowserView> */}
                {/* {
                    isTablet ?
                        <TabletView>
                            <SlideTabletFormView />
                        </TabletView>
                        : <MobileView>
                            <SlideMobileFormView />
                        </MobileView>
                } */}
                <LazyLoadComponent>
                    <GameHotFormView />
                    <TopDownFormView />
                    <FeaturedGame />
                    <FeaturedApp />
                    <BrowserView>
                        <VideoFormView />
                    </BrowserView>
                    {
                        isTablet ?
                            <TabletView>
                                <VideoFormView />
                            </TabletView>
                            :
                            <div>
                                {!isMobile ?
                                    ''
                                    :
                                    <MobileView>
                                        <VideoMobileFormView />
                                    </MobileView>
                                }
                            </div>

                    }
                    <ListTypeGame />
                </LazyLoadComponent>

            </React.Fragment>
        )
    }
}
export default ContentFormView