let miFuncion = function (a:any) {
    return a;
}
let miFuncionF = (a:any) => a;

let miFuncion2 = function (a:number, b:number) {
    return a + b;
}
let miFuncion2F = (a:number, b:number) => a + b;

let miFuncion3 = function(nombre:string) {
  nombre = nombre.toUpperCase();
  return nombre;
}
let miFuncion3F = (nombre:string) => {
  nombre = nombre.toUpperCase();
  return nombre;
}

let hulk = {
  nombre: "Hulk",
  smash() {
    setTimeout(() => console.log(`${this.nombre} smash!!`), 1500);
  }
}

console.log(miFuncion("Normal"));
console.log(miFuncion("Flecha"));

console.log(miFuncion2(1, 2));
console.log(miFuncion2F(1, 2));

console.log(miFuncion3("rodrigo"));
console.log(miFuncion3F("rodrigo"));

hulk.smash();
