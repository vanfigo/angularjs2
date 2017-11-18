interface XMen {
    nombre:string,
    poder:string
}

let enviarMision = function (xmen:XMen) {
    console.log(`Enviando a: ${xmen.nombre}`);
};

let enviarCuartel = function (xmen:XMen) {
    console.log(`Enviando al cuartel: ${xmen.nombre}`);
};

let wolevrine:XMen = {
  nombre: "Wolverine",
  poder: "Regeneración"
};

enviarMision(wolevrine);
enviarCuartel(wolevrine);
