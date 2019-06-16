const API_STAR_WARS_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const LUKE_URL = `${API_STAR_WARS_URL}${PEOPLE_URL.replace(':id', 1)}`;

const opts = { crossDomain: true };
const onResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`);
};

/* function getCharacter(id, callback) {
    const CHARACTER_URL = `${API_STAR_WARS_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(CHARACTER_URL, opts, onResponse);
    if (callback) {
        callback();
    }
} */

function getCharacter(id) {

    return new Promise((resolve, reject) => {
    const CHARACTER_URL = `${API_STAR_WARS_URL}${PEOPLE_URL.replace(':id', id)}`;
    $
        .get(CHARACTER_URL, opts, function(data) {
            resolve(data)
        })
        .fail(() => reject(id))     
        });    
}

//var ids = [1,2,3,4,5,6,7];

// var promesas = ids.map(function(id) {
//     return getCharacter(id);
// });

//var promesas = ids.map(id => getCharacter(id));

// Promise
//     .all(promesas)
//     .then(personajes => console.log(personajes))
//     .catch(onError);

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promesas = ids.map(id => getCharacter(id));
    try {
        var personajes = await Promise.all(promesas);  
        console.log(personajes)      
    } catch (id) {
        onError(id);
    }   
}

obtenerPersonajes();

// getCharacter(1)
//     .then(function (personaje) {
//         console.log(`El personaje 1 es ${personaje.name}`);
//         return getCharacter(2);
//     })
//     .then(function (personaje) {
//         console.log(`El personaje 2 es ${personaje.name}`);
//         return getCharacter(3);
//     })
//     .then(function (personaje) {
//         console.log(`El personaje 3 es ${personaje.name}`);
//         return getCharacter(4);
//     })
//     .then(function (personaje) {
//         console.log(`El personaje 4 es ${personaje.name}`);
//         return getCharacter(5);
//     })
//     .then(function (personaje) {
//         console.log(`El personaje 6 es ${personaje.name}`);
//         return getCharacter(7);
//     })
//     .then(function (personaje) {
//         console.log(`El personaje 7 es ${personaje.name}`);
//     })
//     .catch(onError);

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

/* for (let index = 1; index < 100; index++) {
    getCharacter(index);
    
} */

/* getCharacter(1 ,function () {
    getCharacter(2, function() {
        getCharacter(3, function() {
            getCharacter(4, function() {
                getCharacter(5, function() {
                    getCharacter(6, function() {
                        getCharacter(7)
                    })
                })
            })
        })
    })
}); */









//$.get(LUKE_URL, opts, onResponse);