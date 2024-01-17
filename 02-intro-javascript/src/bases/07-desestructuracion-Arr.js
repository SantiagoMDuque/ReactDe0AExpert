const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ ,,P3 ] = personajes;

console.log(P3);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros)

const fackUseState = (valor) => {
    return [ valor, ()=>{ console.log('hola Mundo')}];
}

const [ nombre, setNombre ] = fackUseState('goku');

console.log(nombre);
setNombre()