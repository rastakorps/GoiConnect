export interface AuthResponse {
    response: {
        name: string,
        status: number,
        statusText: string,
        accessUserData : {
            token_type: string;
            expires_in: number;
            access_token: string;
            refresh_token: string;
        }
        errors : {
            formErrors : {
                name : Array<string>,
                email : Array<string>,
                password : Array<string>
            },
            dbErrors :  {
                error : string,
                message : string
            }
        }
    }
}