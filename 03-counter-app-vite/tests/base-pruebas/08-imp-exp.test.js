import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un hérpe por Id', () => {
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById( id );
        expect( hero ).toBeFalsy();
    })
    
    test('getHeroesByOwner debe de retornar un arreglo con 3 héroes de DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner( owner );
        expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
        expect(hero).toHaveLength(3);
    })

    test('getHeroesByOwner debe de retornar un arreglo con 2 héroes de Marvel', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner );
        expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
        expect(hero).toHaveLength(2);
    })
})
