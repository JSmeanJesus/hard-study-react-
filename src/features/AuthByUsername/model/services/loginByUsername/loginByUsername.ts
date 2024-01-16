import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}


// eslint-disable-next-line max-len
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi ) => {

        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            // @ts-ignore
            const response = await extra.api.post<User>('/login', authData);

            // dosent work error
            if(!response.data) {
                throw new Error('No data');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    }
)