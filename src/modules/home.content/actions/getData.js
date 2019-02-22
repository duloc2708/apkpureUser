
export default () => {
    return new Promise((resolve, rejects) => {
        axios('https://api.tvmaze.com/search/shows?q=batman')
            .then(res => {
                let { data } = res
                resolve(data)
            })
            .catch(err => {
                rejects(err)
            })
    })
}