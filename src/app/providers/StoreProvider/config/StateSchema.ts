import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    user: UserSchema;
    loginForm: LoginSchema;
}
