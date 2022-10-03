"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-Sync");
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
    ;
    return Vehiculo;
}());
;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaVehiculos) {
        this.listaVehiculos = listaVehiculos;
    }
    ;
    RegistroAutomotor.prototype.verVehiculos = function () {
        console.log(this.listaVehiculos);
    };
    ;
    RegistroAutomotor.prototype.agregarVehiculo = function () {
        var marca = readlineSync.question("Ingrese la marca: ");
        var modelo = readlineSync.question("Ingrese el modelo: ");
        var annio = Number(readlineSync.question("Ingrese el annio: "));
        var nuevoVehiculo = new Vehiculo(marca, modelo, annio);
        this.listaVehiculos.push(nuevoVehiculo);
    };
    ;
    RegistroAutomotor.prototype.editarVehiculo = function () {
        var posicion = readlineSync.question("Ingrese la posicion del vehiculo que desea editar: ");
        var marca = readlineSync.question("Ingrese la marca: ");
        var modelo = readlineSync.question("Ingrese el modelo: ");
        var annio = Number(readlineSync.question("Ingrese el annio: "));
        var nuevoVehiculo = new Vehiculo(marca, modelo, annio);
        this.listaVehiculos[posicion] = nuevoVehiculo;
    };
    ;
    RegistroAutomotor.prototype.borrarVehiculo = function () {
        var posicion = readlineSync.question("Ingrese la posicion del vehiculo que desea borrar: ");
        delete this.listaVehiculos[posicion];
    };
    ;
    return RegistroAutomotor;
}());
;
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
;
var listaVehiculos = new Array;
var datos;
var entrada = 5;
function crearVehiculo(vehiculo, arrayVehiculos) {
    var propiedadVehiculo = vehiculo.split(",");
    var marca = propiedadVehiculo[0];
    var modelo = propiedadVehiculo[1];
    var annio = Number(propiedadVehiculo[2]);
    var nuevoVehiculo = new Vehiculo(marca, modelo, annio);
    arrayVehiculos.push(nuevoVehiculo);
}
;
datos = new GestorDeArchivos('vehiculos.txt');
for (var i = 0; i < datos.getArregloString().length; i++) {
    crearVehiculo(datos.getArregloString()[i], listaVehiculos);
}
;
var nuevoRegistroAutomotor = new RegistroAutomotor(listaVehiculos);
while (entrada !== 0) {
    entrada = Number(readlineSync.question("<REGISTRO AUTOMOTOR> Ingrese un numero para... 1 ver, 2 agregar, 3 editar, 4 borrar, 0 salir: "));
    if (entrada === 1) {
        nuevoRegistroAutomotor.verVehiculos();
    }
    if (entrada === 2) {
        nuevoRegistroAutomotor.agregarVehiculo();
    }
    if (entrada === 3) {
        nuevoRegistroAutomotor.editarVehiculo();
    }
    if (entrada === 4) {
        nuevoRegistroAutomotor.borrarVehiculo();
    }
}
;
