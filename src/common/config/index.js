// export const API_URL = 'http://localhost:1337/api/'  //DEV
// export const API_IMAGE = 'http://localhost:1337/images/'  //DEV
// export const API_LOCAL_IMAGE = 'http://localhost:3004/static/'  //DEV

export const API_URL = 'http://api.apksafety.com/api/'  //PROD
export const API_IMAGE = 'http://api.apksafety.com/images/'  //PROD
export const API_LOCAL_IMAGE = 'http://apksafety.com/static/'  //DEV

export const DEFAULT_FOLDER = '/';

export const getImage = (data) => {    
    if (data.indexOf('http') != -1) {
        return data
    } else {
        return `${API_IMAGE + data}`
    }
}