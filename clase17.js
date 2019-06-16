var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}


var personas = [sacha, alan, martin, dario, vicky, paula];

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura <= 1.8;
// const pasarAlturaCms = (persona) => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

const pasarAlturaCms = (persona) => ({
        ...persona,
        altura: persona.altura * 100    
});



var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
var personasCms = personas.map(pasarAlturaCms);

// for(var i = 0; i < personas.length; i++) {
//     console.log(`${personas[i].nombre} mide ${personas[i].altura} m`);
// }

console.log(personasAltas);
console.log(personasBajas);
console.log(personasCms);