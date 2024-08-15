console.log("Bienvenido a tu puesto de empanadas")
console.log("empanada de jamon $55 - empanada de queso 50")

let torta = prompt (" que empanada quieres?").toLowerCase();

let precio = 0.0;

if (torta =="jamon"){
    }precio = 55;
    let refresco = prompt("Desea refresco por $10 o mas? s/n")
    if(refresco =="s"){
        precio = precio + 10;
    }
else if(empanada == "queso"){
    precio = 50;
    let quesoExtra = prompt ("Desea queso extra por $20" s/n)
    if (quesoExtra == "s"){
        precio += 20;
    }
}else{
    console.log("perdon tu opcion no esta en el menu")
}
console.log("El precio de tu empanada es $"+ precio);