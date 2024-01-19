import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Santiago"', ()=>{
        const name = "Santiago";
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${name}`);
    });
})
