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
var RelojDeMesa = /** @class */ (function () {
    function RelojDeMesa(tipo, bateria, color) {
        this.tipo = tipo;
        this.bateria = bateria;
        this.color = color;
    }
    return RelojDeMesa;
}());
var RelojDespertador = /** @class */ (function (_super) {
    __extends(RelojDespertador, _super);
    function RelojDespertador(tipo, bateria, color) {
        var _this = _super.call(this, tipo, bateria, color) || this;
        _this.alarma = false;
        return _this;
    }
    RelojDespertador.prototype.sonarAlarma = function () {
        this.alarma = true;
    };
    ;
    RelojDespertador.prototype.apagarAlarma = function () {
        this.alarma = false;
    };
    ;
    return RelojDespertador;
}(RelojDeMesa));
var MiRelojDespertador = new RelojDespertador("Analogico", "AAA", "Azul");
console.log(MiRelojDespertador);
MiRelojDespertador.sonarAlarma();
console.log(MiRelojDespertador);
