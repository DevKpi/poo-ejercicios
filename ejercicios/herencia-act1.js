class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    HacerSonido(){
        console.log("Sonido generico");
    }

    Nombre(){
        console.log(this.nombre);
    }
}


class Perro extends Animal {
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }

    Ladrar(){
        console.log("Guau");
    }
}
class Gato extends Animal {
    constructor(nombre, color){
        super(nombre);
        this.color = color;
    }

    Maullar(){
        console.log("Miau");
    }

}

const p = new Perro("Tobi", "Labrador");
const g = new Gato("Michi", "naranja");

p.Ladrar();
g.Maullar();
p.Nombre();
g.Nombre();
