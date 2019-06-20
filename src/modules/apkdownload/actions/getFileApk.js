
export default (idgame = '') => {
    return new Promise((resolve, rejects) => {
        axios.post(`${Config.API_URL}getapk`, { id: idgame })
            .then(function (response) {
                let { Data } = response.data
                axios({
                    method: 'post',
                    url: `https://api-apk.evozi.com/download`,
                    data: Data,
                    config: { headers: { 'Content-Type': 'multipart/form-data' } }
                })
                    .then(function (response2) {
                        let { data } = response2
                        console.log('data>>>');
                        //handle success
                        resolve(response2)
                    })
                    .catch(function (response2) {
                        //handle error
                        reject(response2)
                        console.log(response2);
                    });
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    })
}
