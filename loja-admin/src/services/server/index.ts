import { ICredential } from '@typesCustom';
import axios, { AxiosError } from "axios";


const api = axios.create({
    baseURL: 'http://localhost:3300'
});

//Endpoint dos serviços
const _ACCOUNT = '/account/admin';
const _BACKOFFICE = '/backoffice';


//Brands
const listBrands = () => (api.get(`${_BACKOFFICE}/brands`));

//Account
const signInAdmin = async (credential: ICredential) => {
    try {
        const result = await api.post(`${_ACCOUNT}/signin`, credential);

        return new Promise(resolve => {
            resolve(result.data);
        });

    } catch (e) {
        const error = e as AxiosError;
        
        return new Promise((resolve,reject) => {
            reject(error.response?.data);
        });

    }
}

export { 
    listBrands,    
    signInAdmin 
}