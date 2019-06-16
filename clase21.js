function Persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

function Desarrollador (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador`);
}

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo.prototype;
}



/* Persona.prototype.soyAlto = function() {
    if (this.altura > 1.8) {
        console.log('Soy alto');
    } else {
        console.log('Soy bajo');
    }
} */

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

/* Persona.prototype.soyAlto = () => {    
    return this.altura > 1.8;
}  */

// var juan = new Persona('Juan','Ballesteros', 1.65);
// var andrea = new Persona('Andrea', 'Perez',1.98);
// var jose = new Persona('Jose', 'Barrionuevo',1.88);