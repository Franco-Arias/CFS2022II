//14- Crear una clase Abstracta
//15- Crear una relación de herencia
//16- Crear un ejemplo de composición
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
var Propietario = /** @class */ (function () {
    function Propietario(nombre, apellido, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
    ;
    return Propietario;
}());
;
var Propiedad = /** @class */ (function () {
    function Propiedad(calle, numero, propietario) {
        this.calle = calle;
        this.numero = numero;
        this.propietario = propietario;
    }
    ;
    return Propiedad;
}());
;
var Tienda = /** @class */ (function (_super) {
    __extends(Tienda, _super);
    function Tienda(calle, numero, propietario, nombreTienda) {
        var _this = _super.call(this, calle, numero, propietario) || this;
        _this.nombreTienda = nombreTienda;
        _this.estaAbierto = false;
        return _this;
    }
    ;
    Tienda.prototype.entrar = function () {
        if (this.estaAbierto === true) {
            console.log("Entrando...");
        }
        else {
            console.log("Esta cerrado.");
        }
    };
    ;
    Tienda.prototype.abrirCerrar = function () {
        if (this.estaAbierto === false) {
            this.estaAbierto = true;
        }
        else {
            this.estaAbierto = false;
        }
        ;
    };
    ;
    return Tienda;
}(Propiedad));
;
var PropietarioTienda = new Propietario("Jose", "Gomez", 2494890155);
var NuevaTienda = new Tienda("Alberdi", 587, PropietarioTienda, "Ferreteria Gomez");
console.log(NuevaTienda);
NuevaTienda.entrar();
NuevaTienda.abrirCerrar();
NuevaTienda.entrar();
console.log(NuevaTienda);
