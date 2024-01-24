import { todoReducer } from "../../08-reducer/todoReducer"

describe('Pruebas en todoReducer', () => {
    const initialState=[{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    })
    
    test('debe de agregar un todo', () => {
        
        const action = {
            type: '[TODO] add todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    })

    test('debe eliminar un TODO', () => {
        
        const action = {
            type: '[TODO] Remove todo',
            payload:  1
        }

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 0 );

    })

    test('debe de realizar el Toggle del TODO', () => {
        
        const action = {
            type: '[TODO] Toggle todo',
            payload:  1
        }

        const newState = todoReducer( initialState, action);
        expect( newState.find( (todo) => todo.id === action.payload).done ).toBeTruthy();

    })

    
})
