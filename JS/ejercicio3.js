function datosPersona(persona = {}) {

    const { nombre: nom, edad, altura} = persona;

    return `Esta persona se llama ${nom}, tiene ${edad} años y su altura es de ${altura}`;
}

const a = datosPersona({nombre: "Luis", edad: 35, altura: 1.75});
console.log(a);