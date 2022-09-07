export interface ICredential {
    email:string;
    password:string;

}

export interface IUser{
    uid?: string;
    name:string;
    email:string;
    password?:string;
}