import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks"
import { fireEvent, render, screen } from "@testing-library/react";
import { useFetch } from "../../Hooks/useFetch";
import { useCounter } from "../../Hooks/useCounter";

jest.mock('./../../Hooks/useFetch');
jest.mock('./../../Hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto ', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <MultipleCustomHooks/> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', { name: 'next Quotes'});
        expect( nextButton.disabled ).toBeTruthy();
    });
    
    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Santiago', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Santiago') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'next Quotes'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Santiago', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );
        const nextButton = screen.getByRole('button', { name: 'next Quotes'});
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });
    
    
})
