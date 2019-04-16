
export default (type = '') => {
    return new Promise((resolve, rejects) => {
        axios(`${Config.API_URL}post/get_post_by_section`,
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