// export const API_URL = 'http://localhost:1337/api/'  //DEV
// export const API_IMAGE = 'http://localhost:1337/api/image'  //DEV
// export const API_LOCAL_IMAGE = 'http://localhost:3004/static/'  //DEV
//export const API_DOMAIN_CURRENT = 'http://www.apksafety.com/'  //DEV

export const API_URL = 'http://api.apksafety.com/api/'  //PROD
export const API_IMAGE = 'http://api.apksafety.com/images/'  //PROD
export const API_LOCAL_IMAGE = 'http://apksafety.com/static/'  //DEV
export const API_DOWNLOAD_FILE = 'http://apkverified.com/api/'  //DEV
export const API_DOMAIN_CURRENT = 'http://www.apksafety.com/'  //DEV

export const DEFAULT_FOLDER = '/';

export const getImage = (data, width = 10, height = 10) => {
    if (data.indexOf('http') != -1) {
        return data
    } else {
        return `${API_IMAGE + data}`
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
export const ORG_IMAGE = 'http://apksafety.com/static/img/logo-d.png';

