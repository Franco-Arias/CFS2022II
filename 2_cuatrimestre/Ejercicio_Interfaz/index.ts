interface Auto{
    marca: string;
    modelo: string;
    velocidadMaxima: number;
    estaEncendido: boolean;
    velocidadActual: number;
    encenderApagar(): void;
    acelerar(): void;
    frenar(): void;
}

class AutoCarrera implements Auto{
    marca: string; 
    modelo: string;
    velocidadMaxima: number = 300;
    estaEncendido: boolean;
    velocidadActual: number;

    public constructor(marca:string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
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
    };
};

class AutoFamiliar implements Auto{
    marca: string; 
    modelo: string;
    velocidadMaxima: number = 180;
    estaEncendido: boolean;
    velocidadActual: number;

    public constructor(marca:string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
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
    };
};