"use strict";
var enviarMision = function (xmen) {
    console.log("Enviando a: " + xmen.nombre);
};
var enviarCuartel = function (xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
};
var wolevrine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolevrine);
enviarCuartel(wolevrine);
