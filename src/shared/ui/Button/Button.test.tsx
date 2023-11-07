import {render, screen} from "@testing-library/react"
import { Button, ThemeButton } from "./Button"

describe('Button', () => {
    test('button', () => {
        render( <Button> test </Button> );
        expect(screen.getByText('test')).toBeInTheDocument();
    }) 

    test('button theme', () => {
        render( <Button theme={ThemeButton.CLEAR}> test </Button> );
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    }) 
})