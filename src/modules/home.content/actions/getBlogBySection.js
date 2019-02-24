
export default (type = '') => {
    return new Promise((resolve, rejects) => {
        axios(`${Config.API_URL}articles/get_blog_by_section`,
            { params: { type: type } })
            .then(res => {
                let { data } = res
                resolve(data)
            })
            .catch(err => {
                rejects(err)
            })
    })
}