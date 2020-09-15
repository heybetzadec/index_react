import axios from 'axios'
const qs = require('querystring')

export default class LoginService {

    getLoginAuthentication(request){
        let axiosConfig = {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        };
        let postData = {
            email: "cavad@gmail.com",
            password: "password"
        };
        return axios.post('http://127.0.0.1:8000/api/v1/user/login', qs.stringify(postData), axiosConfig).then(res => res.data);
    }

}  