
export default () => {
    return new Promise((resolve, rejects) => {
        axios(`${Config.API_URL}pageservice`)
            .then(res => {
                let { data } = res
                resolve(data)
            })
            .catch(err => {
                rejects(err)
            })
    })
}