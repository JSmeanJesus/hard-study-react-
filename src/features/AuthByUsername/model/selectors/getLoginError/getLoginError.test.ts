import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe('getLoginError selector',  () => {
    test('should return error', () => {

        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                error: 'error',
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error');
    })

    test('should empty', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    })
})