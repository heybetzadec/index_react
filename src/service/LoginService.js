import axios from 'axios'
const qs = require('querystring')

export default class LoginService {

    getLoginAuthentication(requestBody){
        let axiosConfig = {
            headers: {
                'Content-Type': "application/application/json",
            }
        };
        console.log(qs.stringify(requestBody))
        return axios.post('http://127.0.0.1:8000/api/v1/user/login', requestBody, axiosConfig).then(res => res.data);
    }

}  