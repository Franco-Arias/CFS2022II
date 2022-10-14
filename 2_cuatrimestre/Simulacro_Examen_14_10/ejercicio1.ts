class Mascota{
    protected name: string;
    constructor(name:string){
        this.name = name;
    };
    public makeSound(){
        console.log(`sonido de ${this.name}`);
    }
};

class Dog extends Mascota{
    constructor(name:string) {
      super(name)
    } 
    public makeSound(){
      console.log ("wuff wuff");
    }
};

class Cat extends Mascota{
    constructor(name:string) {
      super(name)
    }  
    public makeSound(){
      console.log('meow meow');
    }
};

let minino: Cat = new Cat('Pocky');
minino.makeSound(); // -> meow meow

let firulais: Dog = new Dog('hercules');
firulais.makeSound(); // -> wuff wuff