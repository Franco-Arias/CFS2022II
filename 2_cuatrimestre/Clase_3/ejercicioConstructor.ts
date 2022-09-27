class Calculadora{
    private marca: String;
    private color: String;
    private bateria: Number;
    private metodoDeCarga: String;

    public constructor(marca:string,color:string,bateria:number,metodoDeCarga:string){
        this.marca = marca;
        this.color = color;
        this.bateria = bateria;
        this.metodoDeCarga = metodoDeCarga;
    }
};

let CalculadoraCasio: Calculadora = new Calculadora("casio","gris",300,"solar");
console.log(CalculadoraCasio);