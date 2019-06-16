var juan = {
    nombre: 'Juan',
    apelllido: 'Ballesteros',
    edad: 40,
    peso: 98
};

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANIO = 365;
const META = juan.peso - 3;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho= () => Math.random() < 0.3;
const haceEjercicio = () => Math.random() < 0.4;

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`);
var dias = 0;

/* for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random();
    if (random < 0.25) {
        aumentarDePeso(juan);
    } else if (random < 0.5) {
        adelgazar(juan);
    }
} */

while (juan.peso > META) {
    
    if (comeMucho()) {
        aumentarDePeso(juan);
    }
    if (haceEjercicio()) {
        adelgazar(juan);
    }
    dias += 1;
}

//console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)} kg`);
console.log(`Pasaron ${dias} días hasta que ${juan.nombre} adelgazó 3 Kg.`);