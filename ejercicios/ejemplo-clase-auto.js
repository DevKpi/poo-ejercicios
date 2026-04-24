class Auto {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
        this.velocidad = 0
    }

    acelerar(){
        this.velocidad += 10;
    }

    frenar() {
        this.velocidad -=10;
    }
}

const miAuto = new Auto("BMW", "M3");

miAuto.acelerar();
console.log(miAuto.velocidad + miAuto.velocidad + " " + miAuto.marca);
