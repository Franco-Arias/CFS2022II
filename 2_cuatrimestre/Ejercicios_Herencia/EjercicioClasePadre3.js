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
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
    ;
    Persona.prototype.llamar = function () {
        console.log("Llamando a ".concat(this.telefono, "..."));
    };
    ;
    return Persona;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, apellido, telefono) {
        var _this = _super.call(this, nombre, apellido, telefono) || this;
        _this.proyectos = new Array;
        return _this;
    }
    ;
    Cliente.prototype.agregarProyecto = function (nuevoProyecto) {
        this.proyectos.push(nuevoProyecto);
    };
    ;
    return Cliente;
}(Persona));
var cliente1 = new Cliente("Santiago", "Alvarez", 2494310542);
console.log(cliente1);
cliente1.agregarProyecto("Pagina de tienda de calzado");
cliente1.llamar();
cliente1.agregarProyecto("Sistema de inventario");
console.log(cliente1);
