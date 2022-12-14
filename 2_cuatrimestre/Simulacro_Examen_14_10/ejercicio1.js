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
var Mascota = /** @class */ (function () {
    function Mascota(name) {
        this.name = name;
    }
    ;
    Mascota.prototype.makeSound = function () {
        console.log("sonido de ".concat(this.name));
    };
    return Mascota;
}());
;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("wuff wuff");
    };
    return Dog;
}(Mascota));
;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('meow meow');
    };
    return Cat;
}(Mascota));
;
var minino = new Cat('Pocky');
minino.makeSound(); // -> meow meow
var firulais = new Dog('hercules');
firulais.makeSound(); // -> wuff wuff
