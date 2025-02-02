// Personaje Fav

let nomnbre = "Lucyna K";
let anime = "Cyberpunk";
let edad = 23;

let personaje = {
    nomnbre: "Lucyna K",
    anime: "Cyberpunk",
    edad: 23,
};

console.log (personaje);
console.log (personaje.nomnbre);
console.log (personaje['nomnbre']);

personaje.edad = 18;

delete personaje.edad;

console.log (personaje);