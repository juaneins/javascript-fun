class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        var {nombre, apellido} = this;
        //var nombre = this.nombre;
        //var apellido = this.apellido;
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre,apellido,false);
        }
    }

    soyAlto() {
        return this.altura > 1.8;
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    } 

    saludar(fn) {
        var { nombre, apellido } = this;
        //var nombre = this.nombre;
        //var apellido = this.apellido;
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolador`);
        if (fn) {
            fn(nombre,apellido,true);
        }
    }

}

function responderSaludo(nombre,apellido,esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`No sabía que eres desarrolador`);
    }

}
 var juan = new Persona('Juan','Ballesteros', 1.65);
 var andrea = new Persona('Andrea', 'Perez',1.98);
 var jose = new Desarrollador('Jose', 'Barrionuevo',1.88);

 juan.saludar();
 andrea.saludar(responderSaludo);
 jose.saludar(responderSaludo);