import {FirebaseError, signInAdmin} from '../services/firebase';

import { ICredential, IUser} from '@typesCustom';


import { Request, Response } from 'express';

class AuthController {
    public async signInAdmin(request: Request, response: Response) {
        const  credential = request.body;
        
        try {

            console.log('===', credential)
            
            const result = await signInAdmin(credential.email, credential.password);

            const user: IUser = {
                uid: result.user.uid,
                name: result.user.displayName || '',
                email: result.user.email || credential.email

            }

            const accessToken = await result.user.getIdToken();

            return response.json({user: user, token: accessToken});



        } catch (e) {
            const error = e as FirebaseError;

            // bad request
            if (error.code === 'auth/missing-email'){
                return response.status(404).json({message:'é preciso informar o email.'});
            }
            //user not found_
            if (error.code === 'auth/user-not-found'){
                return response.status(401).json({message:'usuário não encontrado.'});
            }

            if (error.code === 'auth/wrong-password'){
                return response.status(401).json({message:'a senha esta incorreta.'});
            }

            return response.status(500).json({message:error.message});
        }
    }
}

export default new AuthController();

