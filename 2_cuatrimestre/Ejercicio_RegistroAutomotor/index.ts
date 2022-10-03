import * as fs from 'fs';
import * as readlineSync from 'readline-Sync';

class Vehiculo{
    private marca: string;
    private modelo: string;
    private annio: number;

    public constructor(marca: string,modelo: string,annio: number){
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    };
};

class RegistroAutomotor{
    public listaVehiculos: Array<Vehiculo>;
    
    public constructor(listaVehiculos: Array<Vehiculo>){
        this.listaVehiculos = listaVehiculos;
    };

    public verVehiculos(){
        console.log(this.listaVehiculos)
    };
    public agregarVehiculo(){
        let marca: string = readlineSync.question("Ingrese la marca: ");
        let modelo: string = readlineSync.question("Ingrese el modelo: ");
        let annio: number = Number(readlineSync.question("Ingrese el annio: "));
        let nuevoVehiculo: Vehiculo = new Vehiculo(marca,modelo,annio);
        this.listaVehiculos.push(nuevoVehiculo);
    };
    public editarVehiculo(){
        let posicion: string = readlineSync.question("Ingrese la posicion del vehiculo que desea editar: ");
        let marca: string = readlineSync.question("Ingrese la marca: ");
        let modelo: string = readlineSync.question("Ingrese el modelo: ");
        let annio: number = Number(readlineSync.question("Ingrese el annio: "));
        let nuevoVehiculo: Vehiculo = new Vehiculo(marca,modelo,annio);
        this.listaVehiculos[posicion] = nuevoVehiculo;
    };
    public borrarVehiculo(){
        let posicion: string = readlineSync.question("Ingrese la posicion del vehiculo que desea borrar: ");
        delete this.listaVehiculos[posicion];
    };
};

class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');    
    }

    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

};

let listaVehiculos = new Array;
let datos: GestorDeArchivos;
let entrada: number = 5;

function crearVehiculo(vehiculo: string,arrayVehiculos: Array<Vehiculo>){
    let propiedadVehiculo = vehiculo.split(",");
    let marca: string = propiedadVehiculo[0];
    let modelo: string = propiedadVehiculo[1];
    let annio: number = Number(propiedadVehiculo[2]);
    let nuevoVehiculo: Vehiculo = new Vehiculo(marca,modelo,annio);
    arrayVehiculos.push(nuevoVehiculo);
};

datos = new GestorDeArchivos('vehiculos.txt');

for (let i: number = 0; i < datos.getArregloString().length; i++) {
    crearVehiculo(datos.getArregloString()[i], listaVehiculos)};

let nuevoRegistroAutomotor = new RegistroAutomotor(listaVehiculos);

while(entrada !== 0){
    entrada = Number(readlineSync.question("<REGISTRO AUTOMOTOR> Ingrese un numero para... 1 ver, 2 agregar, 3 editar, 4 borrar, 0 salir: "));
    if(entrada === 1){
        nuevoRegistroAutomotor.verVehiculos();
    }
    if(entrada === 2){
        nuevoRegistroAutomotor.agregarVehiculo();
    }
    if(entrada === 3){
        nuevoRegistroAutomotor.editarVehiculo();
    }
    if(entrada === 4){
        nuevoRegistroAutomotor.borrarVehiculo();
    }
};