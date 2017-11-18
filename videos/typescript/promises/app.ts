let prom1 = new Promise(function(resolve:any, reject:any){
  setTimeout(() => {
    console.log("Promesa terminada");
    //Termina bien
    // resolve();
    //Termina mal
    reject();
  }, 1500);
});

prom1.then(function() {
  console.log("Ejecutarme cuando se termine bien");
}, function() {
  console.error("Ejecutarme si todo sale mal");
})
