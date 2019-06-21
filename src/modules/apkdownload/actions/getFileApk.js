
export default (idgame = '') => {
    return new Promise((resolve, rejects) => {
        axios.post(`${Config.API_URL}getapk`, { id: idgame })
            .then(function (response) {
                let { Data } = response.data
                console.log('response>>',response);
                resolve(response)
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    })
}
