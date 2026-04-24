class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerSonido(){
        console.log('El animal ' + this.nombre + ' de tipo ' + this.tipo + ' emite un sonido');
    }
}

const animal1 = new Animal('Toby', 'Perro');

animal1.hacerSonido();
