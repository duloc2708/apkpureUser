
import ReactGA from 'react-ga'

export const API_URL = 'https://api.apksafety.com/api/'  //PROD
export const API_IMAGE = 'https://api.apksafety.com/api/image'  //PROD
export const API_LOCAL_IMAGE = 'https://apksafety.com/static/'  //DEV
export const API_DOWNLOAD_FILE = 'http://apkverified.com/api/'  //DEV
export const API_DOMAIN_CURRENT = 'https://apksafety.com/'  //DEV

export const DEFAULT_FOLDER = '/';

export const getImage = (data, width = 10, height = 10) => {
    if (data && data.indexOf('http') != -1) {
        return data
    } else {
        return `${API_IMAGE + data}`
    }
}
export const getImageIndex = (data, width = 10, height = 10) => {
    if (data) {
        if (data && data.indexOf('http') != -1) {
            return data
        } else {
            let filename = data.split('\\').pop().split('/').pop();
            // filename = filename.substring(0, filename.lastIndexOf('.'));
            return `${API_IMAGE}?name=${filename}&width=${width}&height=${height}`
        }
    } else {
        return ''
    }

}
export const APP_ID_FACEBOOK = "1496370120424382";
export const CONSTANT_NUMBER_2 = 'hello I am also a constant';
export const OG_LOCATION = 'vi_VN';
export const PROPERTY_OG_URL = 'apksafety.com';
export const PROPERTY_OG_SITENAME = 'Download APK free online downloader';

export const TITLE = 'Download APK free online downloader | Apksafety.com';
export const PROPERTY_OG_TITLE = 'apk download, apk downloader, android apk download';
export const NAME_TWITTER_TITLE = 'apk download, apk downloader, android apk download';
export const NAME_DESCRIPTION = 'apk download, apk downloader, android apk download';
export const PROPERTY_OG_DESCRIPTION = 'apk download, apk downloader, android apk download';
export const NAME_TWITTER_DESCRIPTION = 'apk download, apk downloader, android apk download';;
export const NAME_KEYWORD = 'apk download, apk downloader, android apk download';
export const OG_KEYWORD = 'apk download, apk downloader, android apk download';
export const OG_PROPERTY_IMAGE = '';
export const NAME_TWITTER_IMAGE_SRC = '';
export const PROPERTY_OG_TYPE = 'apksafety.com';
export const ORG_SITENAME = 'apksafety.com';
export const ORG_IMAGE = 'https://apksafety.com/static/img/logo-d.png';


export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-136793328-1')
}

export const logPageView = () => {
  console.log('Logging pageview for ${window.location.pathname}')
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
