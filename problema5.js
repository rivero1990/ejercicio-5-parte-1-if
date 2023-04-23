const CANT_MAX_MASCOTAS = 3;
const CANT_MAX_GATOS = 1;
const CANT_MAX_PERROS = CANT_MAX_MASCOTAS;
const CANT_POR_DEF = 0;

let consultaMascota = prompt("Quiere pasear perros o un gato");
let numDeMascotas = prompt("Ingrese la cantidad de mascotas");
let opcionUno = "perros";
let opcionDos = "gato";

if ((consultaMascota == opcionUno) && (numDeMascotas == CANT_MAX_PERROS)) {
    document.write("Pedido confirmado : el paseador llegara en 20 minutos");
} else if ((consultaMascota == opcionDos) && (numDeMascotas == CANT_MAX_GATOS)) {
    document.write("Pedido confirmado : el paseador llegara en 20 minutos");
} else if (numDeMascotas == CANT_POR_DEF) {
    document.write("Numero invalido")
}else {
    document.write("Limite de mascotas excedido intente ingresar otro numero");
}