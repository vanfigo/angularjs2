let avenger = {
  nombre: "Steve",
  clave: "Capitan América",
  poder: "Droga"
};

let {nombre, clave, poder} = avenger;

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

console.log(nombre, clave, poder);

let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, , ironman] = avengers;

console.log(thor, ironman);
