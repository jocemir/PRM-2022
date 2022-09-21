import { ICredential } from '@typesCustom';

import axios,{AxiosError} from "axios";


const api = axios.create({
    baseURL: 'http://localhost:3300'

});

//endpoint dos servicos 

const _ACCOUNT = '/account/admin';

//account

const signInAdmin = async (credential: ICredential) => {   
    try {
        const result = await api.post('${_ACCOUNT}/signin', credential);
        console.log("deu Pau");

        return new Promise(resolve =>{
            resolve(result.data);
        })
        
    } catch (e) {
        const error = e as AxiosError;

        return new Promise((resolve,reject) => {
            reject(error.response?.data);
        });
    }
}

export { signInAdmin}
