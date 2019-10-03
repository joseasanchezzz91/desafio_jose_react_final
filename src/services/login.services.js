import axios from 'axios';
import { apiHost } from '../configure';

const MODULE = 'login';

export const loginService = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${apiHost}/${MODULE}`, data).then(data => {
            resolve(data.data);
        }).catch(err => reject(err));
    })
}