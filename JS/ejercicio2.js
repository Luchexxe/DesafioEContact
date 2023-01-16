function contarTipoNumber(arreglo = []) {
    let c=0
    for (const value of arreglo) {
        if(typeof value==="number") 
        {c +=1;}
    }
    return `El arreglo tiene ${c} valore(s) de tipo numero`;
}
console.log(contarTipoNumber(["gato","Luis",1,"1",2,]));
