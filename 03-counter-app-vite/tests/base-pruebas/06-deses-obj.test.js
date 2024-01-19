import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const Context = {
            clave: 'ABC123',
            edad: '6'
        }
        const user = usContext(Context);
        expect( user ).toEqual({
            nombreClave: Context.clave,
            anios: Context.edad,
            latlng: { lat: 14.1232, lng: -12.3232 }
        });
    });
})
