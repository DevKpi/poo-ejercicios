class Figura {
    calcularArea() {
        // throw new Error("Debes definir el tipo de figura");
        console.log("ERROR: Figura sin definir");
    }
} 

class Circulo extends Figura {
    constructor(radio){
        super();
        this.radio = radio;
    }
    calcularArea() {
        let result = Math.PI * Math.pow(this.radio, 2);
        console.log(result);
    }
}

class Rectangulo extends Figura{
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        let res = this.base * this.altura;
        console.log(res);
    }
}

const areas = [new Figura(), new Circulo(2), new Rectangulo(1, 2)];

areas.forEach(a => a.calcularArea());
