import axios from 'axios'

export default class LoginService {

    getCarsSmall() {
        return axios.get('assets/layout/data/cars-small.json').then(res => res.data.data);
    }

    getCarsMedium() {
        return axios.get('assets/layout/data/cars-medium.json').then(res => res.data.data);
    }

    getCarsLarge() {
        return axios.get('assets/layout/data/cars-large.json').then(res => res.data.data);
    }
}  