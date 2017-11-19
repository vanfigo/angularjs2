"use strict";
var Avanger = /** @class */ (function () {
    function Avanger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avanger;
}());
;
var antman = new Avanger("Antman", "cap", "Scott Lang");
console.log(antman);
