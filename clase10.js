const MAYORIA_DE_EDAD = 18;

var juan = {
    nombre: 'Juan',
    apellido: 'Ballesteros',
    edad: 40,
    ingeniero: true,
    guitarrista: false,
    cocinero:true,
    futbolista:true,
    abogado: false
};

var julian = {
    nombre: 'Julian',
    apellido: 'Orozco',
    edad: 17,
    futbolista: false,
    cocinero:true,
    cantante: true
}

var camilo = {
    nombre: 'Camilo',
    apellido: 'Teran',
    edad: 18,
    futbolista: false,
    cocinero: true,
    cantante: true
}

function imprimirPersonaProfesiones(persona) {
    console.log(`${persona.nombre} es: `);

    if (persona.ingeniero) {
        console.log('Ingeniero');
    }
    if (persona.guitarrista) {
        console.log('guitarrista');
    }

    if (persona.cocinero) {
        console.log('cocinero');
    }

    if (persona.futbolista) {
        console.log('futbolista');
    }
    if (persona.abogado) {
        console.log('abogado');
    }
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} ${persona.apellido} Es mayor de edad`);
    } else {
        console.log(`${persona.nombre} ${persona.apellido} Es menor de edad`);
    }
}

//function esMayorDeEdad(persona) {
//    return persona.edad >= MAYORIA_DE_EDAD;
//}

//const esMayorDeEdad = function(persona) {
//    return persona.edad >= MAYORIA_DE_EDAD;
//}

//const esMayorDeEdad = persona => {
//    return persona.edad >= MAYORIA_DE_EDAD;
//}

//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;

const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD;

function imprimirAcceso(persona) {
    if (!esMenorDeEdad(persona)) {
        console.log('ACCESO AUTORIZADO');
    } else {
        console.log('ACCESO DENEGADO');
    }
}