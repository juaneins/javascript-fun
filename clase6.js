var juan = {
    nombre: 'Juan',
    apellido: 'Ballesteros',
    edad: 28
};

var xime = {
    nombre: 'Xime',
    apellido: 'Molina',
    edad: 31
};


function imprimirNombreEnMayusculasObj(persona) {
    console.log(persona.nombre.toUpperCase());
}

function imprimirNombreEnMayusculasAttr({nombre}) {
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
    console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`);
}

function cumpleanios(persona) {
    persona.edad += 1;
}

function cumpleaniosObj(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

imprimirNombreEnMayusculasObj(juan);
imprimirNombreEnMayusculasObj(xime);

imprimirNombreEnMayusculasAttr(xime);
imprimirNombreEnMayusculasObj({nombre:'Luis'});
imprimirNombreYEdad(juan);
imprimirNombreYEdad(xime);