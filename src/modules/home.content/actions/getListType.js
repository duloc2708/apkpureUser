
export default () => {
    return new Promise((resolve, rejects) => {
        axios('https://api.apksafety.com/api/post/sitemapListType')
            .then(res => {
                let { data } = res
                resolve(data)
            })
            .catch(err => {
                rejects(err)
            })
    })
}