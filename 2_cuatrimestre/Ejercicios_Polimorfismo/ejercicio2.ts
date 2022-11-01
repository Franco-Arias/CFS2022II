class Figura{
    protected lado: number;
    constructor(lado:number){
        this.lado = lado;
    };
    public obtenerArea(){};
    public obtenerPerimetro(){};
};

class Cuadrado extends Figura{
    constructor(lado:number){
        super(lado)
    };
    public obtenerArea(){
        return this.lado * this.lado;
    };
    public obtenerPerimetro(){
        return this.lado * 4;
    }
};
class TrianguloEquilatero extends Figura{
    constructor(lado:number){
        super(lado);
    };
    public obtenerArea(){
        return (this.lado*this.lado)*((Math.sqrt(3))/4);
    }
    public obtenerPerimetro(){
        return this.lado * 3;
    }
}

let MiCuadrado: Cuadrado = new Cuadrado(8);
console.log(MiCuadrado.obtenerArea());
console.log(MiCuadrado.obtenerPerimetro());
let MiTriangulo: TrianguloEquilatero = new TrianguloEquilatero(8);
console.log(MiTriangulo.obtenerArea());
console.log(MiTriangulo.obtenerPerimetro()); 