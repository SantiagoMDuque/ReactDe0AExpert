import { fireEvent, screen } from "@testing-library/dom"
import { LoginPage } from "../../09-useContext/LoginPage"
import { UserContext } from "../../09-useContext/context/UserContext"
import { render } from "@testing-library/react"

describe('pruebas del loginPage', () => {
    test('debe de mostar el componenete sin el usuario', () => {

        render(
            <UserContext.Provider value={ { user:null } }>
                <LoginPage/>
            </UserContext.Provider >
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
        
    })
    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={ { user:null, setUser: setUserMock } }>
                <LoginPage/>
            </UserContext.Provider >
        )

        const button = screen.getByRole('button');
        fireEvent.click( button );
        expect( setUserMock ).toHaveBeenCalledWith({"emal": "sa@g.com", "id": 123, "name": "santiago"})
    })
    
})
