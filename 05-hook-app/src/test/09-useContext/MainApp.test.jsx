import { render, screen } from "@testing-library/react"
import { MainApp } from "../../09-useContext/MainApp"
import { MemoryRouter } from "react-router"

describe('Pruebas en <Main/>', () => {
    test('debe de mostrar el main app', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('Home App') ).toBeTruthy();
    })

    test('debe de mostrar el loginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect( screen.getByText('Login App') ).toBeTruthy();
    })

    test('debe de mostrar el about', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        expect( screen.getByText('About App') ).toBeTruthy();
    })
})
