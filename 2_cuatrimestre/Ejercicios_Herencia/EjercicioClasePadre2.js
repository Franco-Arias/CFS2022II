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
var Pava = /** @class */ (function () {
    function Pava(capacidad, material) {
        this.capacidad = capacidad;
        this.material = material;
    }
    ;
    Pava.prototype.llenar = function () {
        console.log("La pava se lleno.");
    };
    ;
    Pava.prototype.servir = function () {
        console.log("Sirviendo...");
    };
    ;
    return Pava;
}());
;
var PavaElectrica = /** @class */ (function (_super) {
    __extends(PavaElectrica, _super);
    function PavaElectrica(capacidad, material) {
        var _this = _super.call(this, capacidad, material) || this;
        _this.temperatura = 30;
        _this.estaEncendida = false;
        return _this;
    }
    ;
    PavaElectrica.prototype.subirTemperatura = function () {
        if (this.temperatura <= 95) {
            this.temperatura = this.temperatura + 5;
        }
        ;
    };
    ;
    PavaElectrica.prototype.bajarTemperatura = function () {
        if (this.temperatura >= 35) {
            this.temperatura = this.temperatura - 5;
        }
        ;
    };
    ;
    PavaElectrica.prototype.encenderApagar = function () {
        if (this.estaEncendida === false) {
            this.estaEncendida = true;
        }
        else {
            this.estaEncendida = false;
        }
        ;
    };
    ;
    return PavaElectrica;
}(Pava));
;
var miPavaElectrica = new PavaElectrica(1.5, "acero inoxidable");
console.log(miPavaElectrica);
miPavaElectrica.llenar();
miPavaElectrica.subirTemperatura();
miPavaElectrica.subirTemperatura();
miPavaElectrica.subirTemperatura();
miPavaElectrica.subirTemperatura();
miPavaElectrica.encenderApagar();
miPavaElectrica.servir();
console.log(miPavaElectrica);
