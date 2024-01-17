
const saludar = (nombre) => {
    return `Hola, ${ nombre }`
}

const saludar2 = (nombre) => `Hola, ${ nombre }`;
const saludar3 = () => `Hola`;


console.log( saludar('Santiago') );
console.log( saludar2('Andres') );
console.log( saludar3() );

// const getUser= () => {
//     return {
//         uid: 'ABC123',
//         username: 'User123'
//     }
// };

const getUser= () => ({
    uid: 'ABC123',
    username: 'User123'
});
const user = getUser();
console.log(user);

const getUsearioActivo= (nombre) => ({
    uid: 'ABC123',
    username: nombre
});
const userAc = getUsearioActivo('SantiagoMD');
console.log(userAc);