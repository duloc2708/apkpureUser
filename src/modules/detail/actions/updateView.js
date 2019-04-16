
export default (obj) => {
    return new Promise((resolve, rejects) => {
        axios.post(`${Config.API_URL}post/update_view`, { obj: obj })
            .then(res => {                
                let { data } = res
                resolve(data)
            })
            .catch(err => {
                rejects(err)
            })
    })
}