class Animal {
    hacerSonido() {
        console.log("Sonido genérico");
    }
}


class Perro extends Animal {
    hacerSonido() {
        console.log("Guau");
    }
}


class Gato extends Animal {
    hacerSonido() {
        console.log("Miau");
    }
}


const animales = [new Perro(), new Gato()];


animales.forEach(a => a.hacerSonido());
