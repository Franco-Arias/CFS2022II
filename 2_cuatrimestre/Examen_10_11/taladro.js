//11- Crear una clase -con al menos 2 métodos y 2 atributos-
//12- Crear un objeto
//13- Crear una interfaz - implementarla en una clase- 
;
var TaladroInalambrico = /** @class */ (function () {
    function TaladroInalambrico(marca, bateria) {
        this.marca = marca;
        this.bateria = bateria;
        this.bateriaActual = bateria;
    }
    ;
    TaladroInalambrico.prototype.taladrar = function () {
        if (this.bateriaActual >= 1) {
            console.log("Taladrando...");
            this.bateriaActual = this.bateriaActual - 1;
        }
    };
    ;
    TaladroInalambrico.prototype.recargar = function () {
        console.log("Recargando...");
        this.bateriaActual = this.bateria;
    };
    ;
    return TaladroInalambrico;
}());
;
var MiTaladro = new TaladroInalambrico("Gamma", 10);
console.log(MiTaladro);
MiTaladro.taladrar();
MiTaladro.taladrar();
MiTaladro.taladrar();
console.log(MiTaladro);
MiTaladro.recargar();
console.log(MiTaladro);
