var AutoCarrera = /** @class */ (function () {
    function AutoCarrera(marca, modelo) {
        this.velocidadMaxima = 300;
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = false;
        this.velocidadActual = 0;
    }
    ;
    AutoCarrera.prototype.encenderApagar = function () {
        if (this.estaEncendido === false) {
            this.estaEncendido = true;
        }
        else {
            this.estaEncendido = false;
        }
        ;
    };
    ;
    AutoCarrera.prototype.acelerar = function () {
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
    AutoCarrera.prototype.frenar = function () {
        if (this.velocidadActual > 40) {
            this.velocidadActual = this.velocidadActual - 40;
        }
        else {
            this.velocidadActual = 0;
        }
    };
    ;
    return AutoCarrera;
}());
;
var AutoFamiliar = /** @class */ (function () {
    function AutoFamiliar(marca, modelo) {
        this.velocidadMaxima = 180;
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = false;
        this.velocidadActual = 0;
    }
    ;
    AutoFamiliar.prototype.encenderApagar = function () {
        if (this.estaEncendido === false) {
            this.estaEncendido = true;
        }
        else {
            this.estaEncendido = false;
        }
        ;
    };
    ;
    AutoFamiliar.prototype.acelerar = function () {
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
    AutoFamiliar.prototype.frenar = function () {
        if (this.velocidadActual > 20) {
            this.velocidadActual = this.velocidadActual - 20;
        }
        else {
            this.velocidadActual = 0;
        }
    };
    ;
    return AutoFamiliar;
}());
;
