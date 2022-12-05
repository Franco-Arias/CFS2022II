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
var Automotor = /** @class */ (function () {
    function Automotor(puertas, velocidadMaxima, aceleracion, frenado) {
        this.puertas = puertas;
        this.estaEncendido = false;
        this.velocidadMaxima = velocidadMaxima;
        this.velocidadActual = 0;
        this.aceleracion = aceleracion;
        this.frenado = frenado;
    }
    ;
    Automotor.prototype.encenderApagar = function () {
        if (this.estaEncendido === false) {
            this.estaEncendido = true;
        }
        else {
            this.estaEncendido = false;
        }
        ;
    };
    ;
    Automotor.prototype.acelerar = function () {
        if (this.estaEncendido === true) {
            if (this.velocidadActual < (this.velocidadMaxima - this.aceleracion)) {
                this.velocidadActual = this.velocidadActual + this.aceleracion;
            }
            else if (this.velocidadActual > (this.velocidadActual - this.aceleracion) && this.velocidadActual < this.velocidadMaxima) {
                this.velocidadActual = this.velocidadMaxima;
            }
            ;
        }
        ;
    };
    ;
    Automotor.prototype.frenar = function () {
        if (this.velocidadActual > this.frenado) {
            this.velocidadActual = this.velocidadActual - this.frenado;
        }
        else {
            this.velocidadActual = 0;
        }
    };
    ;
    return Automotor;
}());
;
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(puertas, velocidadMaxima, aceleracion, frenado, asientoParaNinos) {
        var _this = _super.call(this, puertas, velocidadMaxima, aceleracion, frenado) || this;
        _this.asientoParaNinos = asientoParaNinos;
        return _this;
    }
    ;
    return AutoCiudad;
}(Automotor));
;
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(puertas, velocidadMaxima, aceleracion, frenado, descapotable) {
        var _this = _super.call(this, puertas, velocidadMaxima, aceleracion, frenado) || this;
        _this.descapotable = descapotable;
        return _this;
    }
    ;
    return AutoDeportivo;
}(Automotor));
;
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(puertas, velocidadMaxima, aceleracion, frenado, cupula, traccion4Ruedas) {
        var _this = _super.call(this, puertas, velocidadMaxima, aceleracion, frenado) || this;
        _this.cupula = cupula;
        _this.traccion4Ruedas = traccion4Ruedas;
        return _this;
    }
    ;
    return Camioneta;
}(Automotor));
;
var MiCamioneta = new Camioneta(4, 200, 20, 40, true, true);
console.log(MiCamioneta);
MiCamioneta.encenderApagar();
MiCamioneta.acelerar();
MiCamioneta.acelerar();
MiCamioneta.acelerar();
MiCamioneta.frenar();
console.log(MiCamioneta);
