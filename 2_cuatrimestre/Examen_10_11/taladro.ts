//11- Crear una clase -con al menos 2 métodos y 2 atributos-
//12- Crear un objeto
//13- Crear una interfaz - implementarla en una clase- 

interface TaladroInalambricoInterface{
    taladrar(): void;
    recargar(): void;
};

class TaladroInalambrico implements TaladroInalambricoInterface{
    private marca: string;
    private bateria: number;
    private bateriaActual: number;

    constructor(marca:string, bateria:number){
        this.marca = marca;
        this.bateria = bateria;
        this.bateriaActual = bateria;
    };

    public taladrar(): void {
        if(this.bateriaActual >= 1){
            console.log("Taladrando...");
            this.bateriaActual = this.bateriaActual -1;
        }
    };
    public recargar(): void {
        console.log("Recargando...");
        this.bateriaActual = this.bateria;
    };
};

let MiTaladro: TaladroInalambrico = new TaladroInalambrico("Gamma", 10);

console.log(MiTaladro);
MiTaladro.taladrar();
MiTaladro.taladrar();
MiTaladro.taladrar();
console.log(MiTaladro);
MiTaladro.recargar();
console.log(MiTaladro);