class Persona{
    protected nombre: string;
    protected apellido: string;
    protected telefono: number;

    constructor(nombre:string,apellido:string,telefono:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    };

    llamar(){
        console.log(`Llamando a ${this.telefono}...`);
    };
}

class Cliente extends Persona{
    private proyectos: string[] = new Array;

    constructor(nombre,apellido,telefono){
        super(nombre,apellido,telefono);
    };

    agregarProyecto(nuevoProyecto:string){
        this.proyectos.push(nuevoProyecto);
    };
}

let cliente1 = new Cliente("Santiago","Alvarez",2494310542);

console.log(cliente1);
cliente1.agregarProyecto("Pagina de tienda de calzado");
cliente1.llamar();
cliente1.agregarProyecto("Sistema de inventario");
console.log(cliente1);