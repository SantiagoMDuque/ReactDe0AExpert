import { renderHook } from "@testing-library/react"
import { useCounter } from "../../Hooks/useCounter"
import { act } from "react-dom/test-utils";

describe('Pruebas en el UseCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act(()=>{
            increment();
            increment(2);
        })

        expect( result.current.counter ).toBe(13);
    });

    test('debe de decrmentar el contador', () => {
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act(()=>{
            decrement();
            decrement(2);
        })

        expect( result.current.counter ).toBe(7);
    });

    test('debe de destablecer el reset', () => {
        const { result } = renderHook( () => useCounter() );
        const { decrement, reset } = result.current;

        act(()=>{
            decrement();
            decrement(2);
            reset();
        })

        expect( result.current.counter ).toBe(10);
    });
    
})
