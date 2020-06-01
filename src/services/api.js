import axios from 'axios';


export const api = (url, method, data = null, token = '', headers = {}) => {

    if (token.length !== 0) {
        headers = {Authorization: `Token ${token}`, ...headers,};
    }

    // if(method === 'post') {
    //     let FD = new FormData();
    //     for(const item of Object.keys(params)){
    //         FD.append(item,params[item]);
    //     }
    //     params = FD;
    // }

    const axiosConfig = {
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: data,
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
        },
        // httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        validateStatus: function (status) {
            return status >= 200 && status < 500;
        }
    };

    return axios(axiosConfig)
        .then(res => {
            return Promise.resolve(res);
        })
        .catch(error => {

            console.log(JSON.stringify(error)); 

            return Promise.resolve({
                status: 0,
                type: 'error',
                message: error.message,
            });
          
        });
};
