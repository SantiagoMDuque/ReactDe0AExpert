const persona = {
    nombre : 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 32544566,
        lat: 32.665,
        lng: 34.543,
    }
}

//console.table({persona: persona})

const persona2 = {...persona};
persona2.nombre = 'Peter'


console.log( persona )
console.log( persona2 )

