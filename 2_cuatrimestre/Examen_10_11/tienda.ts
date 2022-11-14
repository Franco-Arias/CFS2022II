//14- Crear una clase Abstracta
//15- Crear una relación de herencia
//16- Crear un ejemplo de composición

class Propietario{
    nombre: string;
    apellido: string;
    telefono: number;
    
    constructor(nombre:string, apellido:string, telefono:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    };
};

abstract class Propiedad{
    protected calle: string;
    protected numero: number;
    protected propietario: Propietario;

    constructor(calle:string, numero:number, propietario:Propietario){
        this.calle = calle;
        this.numero = numero;
        this.propietario = propietario;
    };

    abstract entrar(): void;
};

class Tienda extends Propiedad{
    private nombreTienda: string;
    private estaAbierto: boolean;
    
    constructor(calle:string, numero:number, propietario:Propietario, nombreTienda:string){
        super(calle,numero,propietario)
        this.nombreTienda = nombreTienda;
        this.estaAbierto = false;
    };

    entrar(): void {
        if(this.estaAbierto === true){
            console.log("Entrando...");
        }
        else{
            console.log("Esta cerrado.")
        }
    };

    abrirCerrar(): void{
        if(this.estaAbierto === false){
            this.estaAbierto = true;
        }
        else{
            this.estaAbierto = false;
        };
    };
};

let PropietarioTienda: Propietario = new Propietario("Jose","Gomez",2494890155);
let NuevaTienda: Tienda = new Tienda("Alberdi",587,PropietarioTienda,"Ferreteria Gomez");

console.log(NuevaTienda);
NuevaTienda.entrar();
NuevaTienda.abrirCerrar();
NuevaTienda.entrar();
console.log(NuevaTienda);