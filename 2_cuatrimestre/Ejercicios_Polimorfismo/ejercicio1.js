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
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, velocidadMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
        this.estaEncendido = false;
        this.velocidadActual = 0;
    }
    ;
    Auto.prototype.encenderApagar = function () {
        if (this.estaEncendido === false) {
            this.estaEncendido = true;
        }
        else {
            this.estaEncendido = false;
        }
        ;
    };
    ;
    Auto.prototype.acelerar = function () {
        if (this.estaEncendido === true) {
            if (this.velocidadActual < (this.velocidadMaxima - 10)) {
                this.velocidadActual = this.velocidadActual + 10;
            }
            else if (this.velocidadActual > (this.velocidadActual - 10) && this.velocidadActual < this.velocidadMaxima) {
                this.velocidadActual = this.velocidadMaxima;
            }
            ;
        }
        ;
    };
    ;
    Auto.prototype.frenar = function () {
        if (this.velocidadActual > 20) {
            this.velocidadActual = this.velocidadActual - 20;
        }
        else {
            this.velocidadActual = 0;
        }
    };
    return Auto;
}());
;
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(marca, modelo, velocidadMaxima) {
        return _super.call(this, marca, modelo, velocidadMaxima) || this;
    }
    ;
    AutoCarreras.prototype.acelerar = function () {
        if (this.estaEncendido === true) {
            if (this.velocidadActual < (this.velocidadMaxima - 20)) {
                this.velocidadActual = this.velocidadActual + 20;
            }
            else if (this.velocidadActual > (this.velocidadActual - 20) && this.velocidadActual < this.velocidadMaxima) {
                this.velocidadActual = this.velocidadMaxima;
            }
            ;
        }
        ;
    };
    ;
    AutoCarreras.prototype.frenar = function () {
        if (this.velocidadActual > 40) {
            this.velocidadActual = this.velocidadActual - 40;
        }
        else {
            this.velocidadActual = 0;
        }
    };
    return AutoCarreras;
}(Auto));
;
var MiAuto = new Auto("Ford", "Focus", 250);
console.log(MiAuto);
MiAuto.encenderApagar();
MiAuto.acelerar();
MiAuto.acelerar();
MiAuto.acelerar();
MiAuto.frenar();
console.log(MiAuto);
MiAuto.frenar();
MiAuto.encenderApagar();
console.log(MiAuto);
var MiAutoDeCarreras = new AutoCarreras("Renault", "Fluence", 290);
console.log(MiAutoDeCarreras);
MiAutoDeCarreras.encenderApagar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.frenar();
console.log(MiAutoDeCarreras);
