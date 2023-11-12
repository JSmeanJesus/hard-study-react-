import { StateSchema } from "app/providers/StoreProvider";
import { counterReducer, counterActions} from "./counterSlice";
import { DeepPartial } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/CounterSchema";

describe('counterSliceTest', () => {
    test('', () => {
        const state: CounterSchema = { value: 10}
        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({value: 9});
    });
});

describe('increment', () => {
    test('', () => {
        const state: CounterSchema = { value: 10}
        expect(
            counterReducer(state, counterActions.increment())
        ).toEqual({value: 11});
    });
});