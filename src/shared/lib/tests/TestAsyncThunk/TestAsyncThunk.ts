import { AnyAction, AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { get } from "http";

type ActionCreateType<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
    rejectValue: RejectValue,
}>

export class TestAsyncThunk<Return, Arg, RejectValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreateType<Return, Arg, RejectValue>;

    constructor (actionCreator: ActionCreateType<Return, Arg, RejectValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);  

        return result;
    }
}