import {useState} from "react";
import {ICredential} from '@typesCustom';
import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { signInAdmin } from "../../services/server";
import { FormEvent } from "react";

export function LoginPage(){

    const [credential, setCredential] = useState <ICredential>({
        email:'',
        password:''
    });

        async function handlesSigin(event: FormEvent){
            event.preventDefault();

            await signInAdmin

            console.log(Credential);

        }

    return(
        <div id="login-page">
            <Stack horizontal={false}>
                <form onSubmit={handlesSigin}>
                    <TextField label="E-mail"
                    required 
                    value={credential.email}
                    onChange={event => setCredential({...credential, email: (event.target as HTMLInputElement).value})}/>
                        

                    <TextField label="Senha"
                     
                    type="password" 
                    required 
                    value={credential.password}
                    onChange={event => setCredential({...credential, password: (event.target as HTMLInputElement).value})}/>

                    <PrimaryButton 
                        type="submit">
                        <span>Entrar</span>

                    </PrimaryButton>


                
                </form>
            </Stack>


        </div>
    )
    
}