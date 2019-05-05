
export default (listgame) => {
    console.log('listgame>>>',listgame);
    return new Promise((resolve, rejects) => {
        axios.post(`${Config.API_URL}blogs/get_list_game_recent`, { gameother: listgame })
            .then(res => {                
                let { data } = res
                resolve(data)
            })
            .catch(err => {
                rejects(err)
            })
    })
}