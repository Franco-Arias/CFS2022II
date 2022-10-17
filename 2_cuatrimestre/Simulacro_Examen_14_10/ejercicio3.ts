class Bicicleta{
    protected marca: string;
    protected color: string;
    protected rodado: number;
    constructor(marca:string,color:string,rodado:number){
        this.marca = marca;
        this.color = color;
        this.rodado = rodado;
    };
    pedalear(){
        console.log("pedaleando...");
    };
    frenar(){
        console.log("frenando...");
    };
};
class BicicletaDeMontana extends Bicicleta{
    capacidadBotella: number;
    velocidades: number;
    velocidadActual: number;
    constructor(marca:string,color:string,rodado:number,capacidadBotella:number,velocidades:number){
        super(marca,color,rodado)
        this.capacidadBotella = capacidadBotella;
        this.velocidades = velocidades;
        this.velocidadActual = 1;
    }
    subirVelocidad(){
        if(this.velocidadActual < this.velocidades){
            this.velocidadActual = this.velocidadActual + 1;
        };
    }
    bajarVelocidad(){
        if(this.velocidadActual > 1){
            this.velocidadActual = this.velocidadActual - 1;
        };
    };
};

let MiBicicleta: Bicicleta = new Bicicleta("Fire Bird","azul",26);
console.log(MiBicicleta);
MiBicicleta.pedalear();
MiBicicleta.frenar();

let MiBicicletaDeMontana: BicicletaDeMontana = new BicicletaDeMontana("Merida","roja",29,1.2,7);
console.log(MiBicicletaDeMontana);
MiBicicletaDeMontana.subirVelocidad();
MiBicicletaDeMontana.subirVelocidad();
MiBicicletaDeMontana.bajarVelocidad();
console.log(MiBicicletaDeMontana);
MiBicicletaDeMontana.pedalear();
MiBicicletaDeMontana.frenar();