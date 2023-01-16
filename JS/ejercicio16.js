function devolverPosicion(numeros = [], numero) {

    let i = numeros.indexOf(numero);
    return i;
}
console.log(devolverPosicion([5,10,12,1,20],1))