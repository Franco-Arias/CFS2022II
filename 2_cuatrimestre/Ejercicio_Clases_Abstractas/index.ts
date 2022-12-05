abstract class Automotor {
    protected puertas: number;
    protected estaEncendido: boolean;
    protected velocidadMaxima: number;
    protected velocidadActual: number;
    protected aceleracion: number;
    protected frenado: number;

    constructor(puertas:number, velocidadMaxima:number, aceleracion:number, frenado:number){
        this.puertas = puertas;
        this.estaEncendido = false;
        this.velocidadMaxima = velocidadMaxima;
        this.velocidadActual = 0;
        this.aceleracion = aceleracion;
        this.frenado = frenado;
    };

    public encenderApagar(): void{
        if(this.estaEncendido === false){
            this.estaEncendido = true;
        }
        else{
            this.estaEncendido = false;
        };
    };
    public acelerar(): void{
        if(this.estaEncendido === true){
            if(this.velocidadActual < (this.velocidadMaxima - this.aceleracion)){
                this.velocidadActual = this.velocidadActual + this.aceleracion;
            }
            else if(this.velocidadActual > (this.velocidadActual - this.aceleracion) && this.velocidadActual < this.velocidadMaxima){
                this.velocidadActual = this.velocidadMaxima;
            };
        };
    };
    public frenar(): void{
        if(this.velocidadActual > this.frenado){
            this.velocidadActual = this.velocidadActual - this.frenado;
        }
        else{
            this.velocidadActual = 0;
        }
    };
};

class AutoCiudad extends Automotor {
    private asientoParaNinos: boolean;
    constructor(puertas:number, velocidadMaxima:number, aceleracion:number, frenado:number, asientoParaNinos: boolean){
        super(puertas,velocidadMaxima,aceleracion,frenado);
        this.asientoParaNinos = asientoParaNinos;
    };
};

class AutoDeportivo extends Automotor {
    private descapotable: boolean;
    constructor(puertas:number, velocidadMaxima:number, aceleracion:number, frenado:number, descapotable: boolean){
        super(puertas,velocidadMaxima,aceleracion,frenado);
        this.descapotable = descapotable;
    };
};

class Camioneta extends Automotor {
    private cupula: boolean;
    private traccion4Ruedas: boolean;
    constructor(puertas:number, velocidadMaxima:number, aceleracion:number, frenado:number, cupula: boolean, traccion4Ruedas: boolean){
        super(puertas,velocidadMaxima,aceleracion,frenado);
        this.cupula = cupula;
        this.traccion4Ruedas = traccion4Ruedas;
    };
};

let MiCamioneta: Camioneta = new Camioneta(4,200,20,40,true,true);
console.log(MiCamioneta);
MiCamioneta.encenderApagar();
MiCamioneta.acelerar();
MiCamioneta.acelerar();
MiCamioneta.acelerar();
MiCamioneta.frenar();
console.log(MiCamioneta);