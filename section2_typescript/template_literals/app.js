"use strict";
function getNombre() {
    return "Fernando";
}
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
var texto = "Hola,\n" + nombre + " " + apellido + "\n(" + edad + ")";
var texto2 = "" + getNombre();
console.log(texto);
console.log(texto2);
