import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('pruebas componente Autoreducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged:false });
    });

    test('debe de (login) llamar el login autenticar y establecer el useContext', () => {

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Santiago'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ 
            logged: true,
            user: action.payload
         });
    });

    test('debe de retornar el estado por defecto', () => {

        const state = {
            loggerd: true,
            user: {
                id: '123',
                name: 'Juan'
            }
        }
        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged:false });
    })
    
})
