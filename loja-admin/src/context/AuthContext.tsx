import { ICredential, IUser } from "@typesCustom";
import { createContext, ReactNode, useEffect } from "react";
import { useState } from "react";
import { signInAdmin } from "../services/server";

//O que eu vou compartilhar do AuthContext
type AuthContextType = {
    //hora será user, hora será indefinido - Condiçao de tipagem
    user: IUser | undefined;
    signIn(credential: ICredential): void;
    signOut(): void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);


type AuthContextProviderProp = {
    children:  ReactNode;
}
export function AuthContextProvider(props: AuthContextProviderProp) {
    const [user, setUser] = useState<IUser>();

    //Chaver da Local Storage
    const keyUser = '@PRM:user';

    useEffect(() => {
        //Leio
        const storageUser = localStorage.getItem(keyUser);

        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }
    }, []);

    async function signIn(credential: ICredential){
        try {
            
            const result = await signInAdmin(credential) as any;
            
            if (result){
                setUser(result.user);

                //Gravar na LocalStorage o usuário
                localStorage.setItem(keyUser, JSON.stringify(result.user));
            }

        } catch (error) {
            //não trata aqui, quem chama que trata
            throw error;
        }
    }

    function signOut() {
        localStorage.removeItem(keyUser);
        setUser({} as IUser);

    }

    return (
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}
