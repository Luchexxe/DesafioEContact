function obtenerCantidadDePares(numero1, numero2){

    if (numero2 > numero1)
    {
        if(typeof numero1 === "number" && typeof numero2 === "number" ) {
            let c = 0;
            for (let i = numero1; i <= numero2; i++) {
            if ((i % 2) == 0) {
                c = c + 1;
            }
        }    
           return `La cantidad de números pares obtenido fue de: ${c}`;
    
        }
        else
        {return `El valor ingresado no es correcto`;}

    }
    else
    {return `El primer numero debe ser menor al segundo numero`}

}
console.log(obtenerCantidadDePares(1,10));





