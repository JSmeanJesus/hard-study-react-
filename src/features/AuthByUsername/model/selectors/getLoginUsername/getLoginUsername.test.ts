import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe('getLoginUsername selector',  () => {
    test('should return password', () => {

        const state: DeepPartial<StateSchema> = {
            //@ts-ignore
            loginForm: {
                username: 'name',
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('name');
    })

    test('should empty', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    })
})