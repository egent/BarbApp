import axios from 'axios';
import _ from '../services/i18n';

const config = {
    timeout: 30000,
};

export const api = (url, method, data = null, token = '', headers = {}) => {

    const abort = axios.CancelToken.source();

    const id = setTimeout(
        () => abort.cancel('TIMEOUT ERROR'),
        config.timeout
    );

    if (token.length !== 0) {
        headers = {Authorization: `Bearer ${token}`, ...headers,};
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
        cancelToken: abort.token,
        headers: {
            Accept: 'application/json',
            ...headers,
        },
        // httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        validateStatus: function (status) {
            return status >= 200 && status < 500;
        }
    };

    console.info('🚀 🚀 🚀', method, url, axiosConfig); // todo comment in production

    return axios(axiosConfig)
        .then(res => {
            clearTimeout(id);
            return Promise.resolve(res);
        })
        .catch(error => {
            // console.log(error);
            // console.log(JSON.stringify(error)); 
            let error_message = '';
            if (axios.isCancel(error)) {
                error_message = _.t('timeout_error');
            } else {
                error_message = error.message;
            }
            return Promise.resolve({data:{
                status: 0,
                type: 'error',
                message: error_message,
            }}); 
        });
};
