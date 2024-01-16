import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {screen} from "@testing-library/react"
import { Counter } from "./Counter";

describe('Counter', () => {
    test('Counter', () => {
        renderWithTranslation( <Counter/>, {
            initialState: {counter: {value: 10}}
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    }) 
})