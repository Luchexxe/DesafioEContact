function quitarParteDecimal(arregloNumerosReales = []) {

        const n = Object.values(arregloNumerosReales);
        let _array =[];
        for(let i of n) {
             i=Math.floor(i);
             _array.push(parseInt(i));
             }      
        return _array;
    
}
const nr = [21.1, 12.133, 14.232];
console.log(quitarParteDecimal(nr));