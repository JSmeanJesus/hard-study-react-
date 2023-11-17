interface User {
    id: number;
    username: string;
}

interface UserSchema {
    authData?: User;
}


export { User, UserSchema };