import { ICredential } from '@typesCustom';
import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { FormEvent, useState } from "react";
import { signInAdmin } from '../../services/server';
import { useAuth } from '../../hook/useAuth';

//Criando a página de Login
export function LoginPage(){

    const { user, signIn } = useAuth();

    //Inicia os objetos email e password
    const [credential, setCredential] = useState<ICredential>({
        email: '',
        password: ''
    }) 

    //Evento de credenciamento
    async function handleSignIn(event: FormDataEvent){
        event.preventDefault();

        try {
            await signIn(credential);
        } catch (e) {
            console.log('Deu pau: ', e);    
        }

        
    }   

    return (
        <div id="login-page">
            <Stack horizontal={false}>
                <form onSubmit={handleSignIn}>
                    {/* Caixa de E-mail */}
                    <TextField label="E-mail" 
                        required 
                        value={credential.email}
                        onChange={event => setCredential({...credential, email: (event.target as HTMLInputElement).value})}/>

                    {/* Caixa de Senha */}
                    <TextField label="Senha" 
                        required type="password"   
                        value={credential.password}
                        onChange={event => setCredential({...credential, password: (event.target as HTMLInputElement).value})}/>

                    {/* Botão Entrar */}
                    <PrimaryButton
                        type="submit">
                        <span>Entrar</span>
                    </PrimaryButton>
                </form>

                <h2> # {JSON.stringify(user)} #</h2>
            </Stack>
        </div>
    )
}