function verificarClave(objeto = {},clave) {

    let res = Object.prototype.hasOwnProperty.call(objeto,clave)
    return res;

}
console.log(verificarClave({nombre: 'Luis', edad: 35, profesion: 'Sistemas'},'profesion'))