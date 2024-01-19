import { render, screen } from "@testing-library/react"
import FistApp from "../src/FistApp"

describe('Pruebas en <FirstApp>', () => {

    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un Subtitulo';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <FistApp title={ title }/>);
        expect( container ).toMatchSnapshot();
    })
    
    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        render( <FistApp title={ title }/> );
        expect( screen.getByText(title) ).toBeTruthy();
    });
    
    test('debe de mostrar el titulo en un h1', () => {
        render( <FistApp title={ title }/> );
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
    })
    
    test('debe de mostrar el subtitulo enviado por props', () => {
        render( <FistApp 
            title={ title }
            subTitle={ subTitle }
        /> );
        
        expect( screen.getAllByText(subTitle).length ).toBe(2);
    })
    
})
