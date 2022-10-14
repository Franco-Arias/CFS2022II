class Pava{
    protected capacidad: number;
    protected material: string;

    constructor(capacidad: number, material: string){
        this.capacidad = capacidad;
        this.material = material;
    };

    llenar(){
        console.log("La pava se lleno.")
    };
    servir(){
        console.log("Sirviendo...")
    };
};

class PavaElectrica extends Pava{
    private temperatura: number;
    private estaEncendida: boolean;

    constructor(capacidad,material){
        super(capacidad,material);
        this.temperatura = 30;
        this.estaEncendida = false;
    };

    subirTemperatura(){
        if(this.temperatura <= 95){
            this.temperatura = this.temperatura + 5;
        };
    };
    bajarTemperatura(){
        if(this.temperatura >= 35){
            this.temperatura = this.temperatura - 5;
        };
    };
    encenderApagar(){
        if(this.estaEncendida === false){
            this.estaEncendida = true;
        }
        else{
            this.estaEncendida = false;
        };
    };
};

let miPavaElectrica: PavaElectrica = new PavaElectrica(1.5,"acero inoxidable");

console.log(miPavaElectrica);
miPavaElectrica.llenar();
miPavaElectrica.subirTemperatura();
miPavaElectrica.subirTemperatura();
miPavaElectrica.subirTemperatura();
miPavaElectrica.subirTemperatura();
miPavaElectrica.encenderApagar();
miPavaElectrica.servir();
console.log(miPavaElectrica);