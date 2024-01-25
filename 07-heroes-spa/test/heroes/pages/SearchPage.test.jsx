import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('pruebas en SearchPage', () => {
    test('debe de mostrarse correctamente con valores por defecto ', () => {
        const { container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
            
        expect( container ). toMatchSnapshot();
    })

    test('debe de mostrarse correctamente con valores por defecto ', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: 'batman' }})
        screen.debug()
        //expect( input.value ).toBe('batman');
    })
})
    