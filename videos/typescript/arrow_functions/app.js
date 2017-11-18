"use strict";
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
console.log(miFuncion("Normal"));
console.log(miFuncion("Flecha"));
console.log(miFuncion2(1, 2));
console.log(miFuncion2F(1, 2));
console.log(miFuncion3("rodrigo"));
console.log(miFuncion3F("rodrigo"));
hulk.smash();
