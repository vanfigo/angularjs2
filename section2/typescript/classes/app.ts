class Avanger {
  nombre:string = "Sin nombre";
  equipo:string;
  nombreReal:string;

  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  constructor(nombre:string, equipo:string, nombreReal:string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
};

let antman = new Avanger("Antman", "cap", "Scott Lang");

console.log(antman);
