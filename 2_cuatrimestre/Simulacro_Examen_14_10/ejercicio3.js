var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bicicleta = /** @class */ (function () {
    function Bicicleta(marca, color, rodado) {
        this.marca = marca;
        this.color = color;
        this.rodado = rodado;
    }
    ;
    Bicicleta.prototype.pedalear = function () {
        console.log("pedaleando...");
    };
    ;
    Bicicleta.prototype.frenar = function () {
        console.log("frenando...");
    };
    ;
    return Bicicleta;
}());
;
var BicicletaDeMontana = /** @class */ (function (_super) {
    __extends(BicicletaDeMontana, _super);
    function BicicletaDeMontana(marca, color, rodado, capacidadBotella, velocidades) {
        var _this = _super.call(this, marca, color, rodado) || this;
        _this.capacidadBotella = capacidadBotella;
        _this.velocidades = velocidades;
        _this.velocidadActual = 1;
        return _this;
    }
    BicicletaDeMontana.prototype.subirVelocidad = function () {
        if (this.velocidadActual < this.velocidades) {
            this.velocidadActual = this.velocidadActual + 1;
        }
        ;
    };
    BicicletaDeMontana.prototype.bajarVelocidad = function () {
        if (this.velocidadActual > 1) {
            this.velocidadActual = this.velocidadActual - 1;
        }
        ;
    };
    ;
    return BicicletaDeMontana;
}(Bicicleta));
;
var MiBicicleta = new Bicicleta("Fire Bird", "azul", 26);
console.log(MiBicicleta);
MiBicicleta.pedalear();
MiBicicleta.frenar();
var MiBicicletaDeMontana = new BicicletaDeMontana("Merida", "roja", 29, 1.2, 7);
console.log(MiBicicletaDeMontana);
MiBicicletaDeMontana.subirVelocidad();
MiBicicletaDeMontana.subirVelocidad();
MiBicicletaDeMontana.bajarVelocidad();
console.log(MiBicicletaDeMontana);
MiBicicletaDeMontana.pedalear();
MiBicicletaDeMontana.frenar();
