
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

//const { nombre, clave, edad } = persona

//console.log(nombre, clave, edad);

const retornaPersona = ({ nombre, clave, edad, rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.342,
            lng: 34.54
        }
    }
}


const { nombreClave, anios, latlng:{ lat, lng}} = retornaPersona(persona);

console.log(nombreClave, anios, lat, lng)