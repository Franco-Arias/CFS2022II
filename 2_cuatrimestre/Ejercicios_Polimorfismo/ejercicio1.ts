class Auto{
    protected marca: string;
    protected modelo: string;
    protected velocidadMaxima: number;
    protected estaEncendido: boolean;
    protected velocidadActual: number;

    public constructor(marca:string, modelo:string, velocidadMaxima:number){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
        this.estaEncendido = false;
        this.velocidadActual = 0; 
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
            if(this.velocidadActual < (this.velocidadMaxima - 10)){
               this.velocidadActual = this.velocidadActual + 10;
            }
            else if(this.velocidadActual > (this.velocidadActual - 10) && this.velocidadActual < this.velocidadMaxima){
                this.velocidadActual = this.velocidadMaxima;
            };
        };
    };

    public frenar(): void{
        if(this.velocidadActual > 20){
            this.velocidadActual = this.velocidadActual - 20;
        }
        else{
            this.velocidadActual = 0;
        }
    }
};

class AutoCarreras extends Auto{
    public constructor(marca:string, modelo:string, velocidadMaxima:number){
        super(marca,modelo,velocidadMaxima);
    };

    public acelerar(): void{
        if(this.estaEncendido === true){
            if(this.velocidadActual < (this.velocidadMaxima - 20)){
                this.velocidadActual = this.velocidadActual + 20;
            }
            else if(this.velocidadActual > (this.velocidadActual - 20) && this.velocidadActual < this.velocidadMaxima){
                this.velocidadActual = this.velocidadMaxima;
            };
        };
    };

    public frenar(): void{
        if(this.velocidadActual > 40){
            this.velocidadActual = this.velocidadActual - 40;
        }
        else{
            this.velocidadActual = 0;
        }
    }
};

let MiAuto: Auto = new Auto("Ford", "Focus", 250);

console.log(MiAuto);
MiAuto.encenderApagar();
MiAuto.acelerar();
MiAuto.acelerar();
MiAuto.acelerar();
MiAuto.frenar();
console.log(MiAuto);
MiAuto.frenar();
MiAuto.encenderApagar();
console.log(MiAuto);

let MiAutoDeCarreras: AutoCarreras = new AutoCarreras("Renault","Fluence",290);

console.log(MiAutoDeCarreras);
MiAutoDeCarreras.encenderApagar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.acelerar();
MiAutoDeCarreras.frenar();
console.log(MiAutoDeCarreras);