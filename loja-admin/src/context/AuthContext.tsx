import { ICredential } from "index";
import { IUser } from "index";
import { useState } from "react";
import { createContext } from "react";
import { signInAdmin } from "../services/server";

type AuthContextType = {
    user: IUser | undefined;
    signIn(credential: ICredential):void;
}
export const AuthContext = createContext<AuthContextType>{} as AuthContextType);

type AuthContextProviderProp = {
    children: <ReactNode>
}

export function AuthContextPrivider(props: AuthContextProviderProp){ 
    const [user, setUser] = useState<IUser>();

    async function signIn(credential: ICredential){

        const result = await signIn(credential);

        try {
            const result = await signInAdmin(credential)

        } catch (error) {
            throw error;
            
        }


    }

    return(
        <AuthContext.Provider value={{user,sign}}>
            (props.children)


        </AuthContext.Provider>
    )
}