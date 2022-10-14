class RelojDeMesa {
    protected tipo: string;
    protected bateria: string;
    protected color: string;
    public constructor(tipo:string,bateria:string,color:string){
        this.tipo = tipo;
        this.bateria = bateria;
        this.color = color;
    }
}

class RelojDespertador extends RelojDeMesa {
    private alarma: boolean;
    constructor(tipo:string,bateria:string,color:string){
        super(tipo,bateria,color);
        this.alarma = false;
    }
    public sonarAlarma(){
        this.alarma = true;
    };
    public apagarAlarma(){
        this.alarma = false;
    };
}

let MiRelojDespertador: RelojDespertador = new RelojDespertador("Analogico","AAA","Azul");

console.log(MiRelojDespertador);
MiRelojDespertador.sonarAlarma();
console.log(MiRelojDespertador);