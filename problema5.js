const CANT_MAX_MASCOTAS = 3;
const CANT_MAX_GATOS = 1;
const CANT_MAX_PERROS = CANT_MAX_MASCOTAS;
const CANT_MASCOTAS_DEF = 0;

let consultaMascota = prompt("Quiere pasear perros o un gato");
let numDeMascotas = prompt("Ingrese la cantidad de mascotas");
let opcionUno = "perros";
let opcionDos = "gato";

if (((consultaMascota == opcionUno) && (numDeMascotas <= CANT_MAX_PERROS) && (numDeMascotas > CANT_MASCOTAS_DEF))) {
    document.write("Pedido confirmado : el paseador llegara en 20 minutos");
} else if (((consultaMascota == opcionDos) && (numDeMascotas == CANT_MAX_GATOS) && (numDeMascotas > CANT_MASCOTAS_DEF))) {
    document.write("Pedido confirmado : el paseador llegara en 20 minutos");
} 

else {
    document.write("Numero incorrecto de mascotas : intente nuevamente");
}





