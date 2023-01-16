function largoDelNombre(nombre = "") {

    if (typeof nombre != "string")

    {
        return `El parámetro recibido es invalido.`;
    }
    else
    {
        let largo = nombre.length;
        if (largo >= 0 && largo < 5)
            {return `Es un nombre corto. Su largo es de: ${largo}`;}
        else
            {
                if (largo > 5 && largo < 11)
                    {return `Su largo es de: ${largo}`;}

                if (largo >= 11)

                    {return `Es un nombre largo. Su largo es de: ${largo}`;}
            }

    }

}
const a=largoDelNombre("Luis Reyes");
console.log(a);