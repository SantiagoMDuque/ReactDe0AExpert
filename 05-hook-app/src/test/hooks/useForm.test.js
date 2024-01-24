import { renderHook } from "@testing-library/react";
import { useForm } from "../../Hooks/useForm"
import { act } from "react-dom/test-utils";

describe('pruebas en useForm', () => {

    const initialForm = {
        name: 'Santiago',
        email: 'santiago@gmail.com'
    };

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange } = result.current;

        const change = { 
            target:{
                name: 'name',
                value: 'Santiago2'
            }
        }
        act(()=>{
            onInputChange(change);
        });

        expect(result.current.name).toBe(
            'Santiago2'
        );
    })

    test('debe de realizar el reset del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        const change = { 
            target:{
                name: 'name',
                value: 'Santiago2'
            }
        }
        act(()=>{
            onInputChange(change);
            onResetForm();
        });

        expect(result.current.name).toBe(
            initialForm.name
        );
    })
})
