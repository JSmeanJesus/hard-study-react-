import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe('getLoginIsLoading selector',  () => {
    test('should return true', () => {

        const state: DeepPartial<StateSchema> = {
            //@ts-ignore
            loginForm: {
                isLoading: true,
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    })

    test('should empty', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    })
})