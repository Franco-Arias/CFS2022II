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
var Figura = /** @class */ (function () {
    function Figura(lado) {
        this.lado = lado;
    }
    ;
    Figura.prototype.obtenerArea = function () { };
    ;
    Figura.prototype.obtenerPerimetro = function () { };
    ;
    return Figura;
}());
;
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(lado) {
        return _super.call(this, lado) || this;
    }
    ;
    Cuadrado.prototype.obtenerArea = function () {
        return this.lado * this.lado;
    };
    ;
    Cuadrado.prototype.obtenerPerimetro = function () {
        return this.lado * 4;
    };
    return Cuadrado;
}(Figura));
;
var TrianguloEquilatero = /** @class */ (function (_super) {
    __extends(TrianguloEquilatero, _super);
    function TrianguloEquilatero(lado) {
        return _super.call(this, lado) || this;
    }
    ;
    TrianguloEquilatero.prototype.obtenerArea = function () {
        return (this.lado * this.lado) * ((Math.sqrt(3)) / 4);
    };
    TrianguloEquilatero.prototype.obtenerPerimetro = function () {
        return this.lado * 3;
    };
    return TrianguloEquilatero;
}(Figura));
var MiCuadrado = new Cuadrado(8);
console.log(MiCuadrado.obtenerArea());
console.log(MiCuadrado.obtenerPerimetro());
var MiTriangulo = new TrianguloEquilatero(8);
console.log(MiTriangulo.obtenerArea());
console.log(MiTriangulo.obtenerPerimetro());
