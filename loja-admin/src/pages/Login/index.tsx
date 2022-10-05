import { ICredential } from '@typesCustom';
import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { FormEvent, useState } from "react";
import { signInAdmin } from '../../services/server';
import { useAuth } from '../../hook/useAuth';

export function LoginPage() {

    const { user, signIn } = useAuth();

    const[credential, setCredential] = useState<ICredential>({
        email: '',
        password: ''
    });

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();
        
        try {
        await signIn(credential)
        } catch(e) {
            console.log('Deu errado: ', e)
        }
        console.log(credential);

    }

    return (
        <div id="login-page">
            <Stack horizontal={false}>
                <form onSubmit={handleSignIn}>
                    <TextField label="E=mail"
                        required 
                        value={credential.email}
                        onChange={event => setCredential({...credential, email: (event.target as HTMLInputElement).value})}/>

                    <TextField label="Senha"
                        required
                        type="password" 
                        value={credential.password}
                        onChange={event => setCredential({...credential, password: (event.target as HTMLInputElement).value})}/>

                    <PrimaryButton
                        type="Submit">
                        <span>Entrar</span>
                    </PrimaryButton>
                </form>

                <h2> # {JSON.stringify(user)} # </h2>

            </Stack>
        </div>
    )
}