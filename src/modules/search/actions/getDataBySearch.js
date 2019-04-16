
export default (key = '') => {
    return new Promise((resolve, rejects) => {
        axios.get(`${Config.API_URL}post/get_data_by_search`,
            { params: { q: key } })
            .then(res => {
                let { data } = res
                resolve(data)
            })
            .catch(err => {
                rejects(err)
            })
    })
}