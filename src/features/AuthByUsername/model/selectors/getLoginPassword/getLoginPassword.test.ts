import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe('getLoginPassword selector',  () => {
    test('should return password', () => {

        const state: DeepPartial<StateSchema> = {
            //@ts-ignore
            loginForm: {
                password: '123123',
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    })

    test('should empty', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    })
})