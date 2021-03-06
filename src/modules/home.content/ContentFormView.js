import SlideFormView from 'modules/home.content/SlideFormView.js'
import SectionOne from 'modules/home.content/SectionOne.js'
// import VideoFormView from 'modules/home.content/VideoFormView.js'
// import VideoMobileFormView from 'modules/home.content/VideoMobileFormView.js'
import ListTypeGame from 'modules/home.content/ListTypeGame.js'
import FeaturedGame from 'modules/home.content/FeaturedGame.js'
// import FeaturedApp from 'modules/home.content/FeaturedApp.js'
// import SlideMobileFormView from 'modules/home.content/SlideMobileFormView.js'
// import SlideTabletFormView from 'modules/home.content/SlideTabletFormView.js'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
// import {
//     TabletView,
//     BrowserView,
//     MobileView,
//     isBrowser,
//     isMobile,
//     isTablet
// } from "react-device-detect";
class ContentFormView extends React.Component {
    componentDidMount() {
        window.onload = function () {
            $.getScript(`/static/js/owl.carousel.min.js?v=${Config.build_version}`, function () { }, true);
            $.getScript(`/static/js/jquery.matchHeight-min.js?v=${Config.build_version}`, function () { }, true);

        }();
    }
    getExt(path) {
        return (path.match(/(?:.+..+[^\/]+$)/ig) != null) ? path.split('.').slice(-1) : 'null';
    }
    render() {
        let { slide, block1, block2, block3, dataCollection } = this.props.dataInit
        return (
            <React.Fragment>
                <SlideFormView slide={slide} />
                <SectionOne data={block1} data2={block2} data3={block3} dataCollection={dataCollection} />
            </React.Fragment>
        )
    }
}
export default ContentFormView