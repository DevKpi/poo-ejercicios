class Figura {
    calcularArea() {
        // throw new Error("Debes definir el tipo de figura");
        console.log("ERROR: Figura sin definir");
    }
} 

class Circulo extends Figura {
    calcularArea() {
        console.log("Area circular");
    }
}

class Rectangulo extends Figura{
    calcularArea(){
        console.log("Area rectangular");
    }
}

const areas = [new Figura(), new Circulo(), new Rectangulo()];

areas.forEach(a => a.calcularArea());
