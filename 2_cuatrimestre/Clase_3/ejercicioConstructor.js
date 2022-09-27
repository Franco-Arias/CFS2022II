var Calculadora = /** @class */ (function () {
    function Calculadora(marca, color, bateria, metodoDeCarga) {
        this.marca = marca;
        this.color = color;
        this.bateria = bateria;
        this.metodoDeCarga = metodoDeCarga;
    }
    return Calculadora;
}());
;
var CalculadoraCasio = new Calculadora("casio", "gris", 300, "solar");
console.log(CalculadoraCasio);
