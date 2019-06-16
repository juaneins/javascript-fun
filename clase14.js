var contador = 0;

const llueve = () => Math.random() < 0.25;


do {
    contador++;
    var etiqueta = contador === 1 ? 'vez' : 'veces';
} while(llueve());

console.log(`Fui a ver si llovía ${contador} ${etiqueta}`); 