import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Counter } from "./Counter";
import {screen} from "@testing-library/react"

describe('Counter', () => {
    test('Counter', () => {
        renderWithTranslation( <Counter/>, {
            initialState: {counter: {value: 10}}
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    }) 
})