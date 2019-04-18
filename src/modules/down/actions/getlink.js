
export default (obj) => {
    return new Promise((resolve, rejects) => {
        axios(`${Config.API_URL}post/get_link_apk`, { params: { title_slug: obj.name } })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                rejects(err)
            })
    })
}