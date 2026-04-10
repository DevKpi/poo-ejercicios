/*class Auto {
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
console.log(miAuto.velocidad + miAuto.velocidad + " " + miAuto.marca); */

/*const mascota = {
    nombre: "Toby",
    tipo: "Perro",
    edad: 13,

    saludar: function () {
        console.log("Hola " + this.nombre);
    }
}


mascota.saludar();*/    

/*class Alumno {
    constructor(nombre, notas) {
        this.nombre = nombre
        this.notas = notas
    }

    promedio(){
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) 
        {
            suma += this.notas[i];
        }
        console.log(suma/this.notas.length);
    }
}

const estudiante = new Alumno("Pepe", [7, 5]);

estudiante.promedio();*/

/*class CuentaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }

    depositar(){
        console.log('Depositaste el dinero, tu nuevo saldo es ' this.saldo);
    }
}*/

/* class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerSonido(){
        console.log('El animal ' + this.nombre + ' de tipo ' + this.tipo + ' emite un sonido');
    }
}

const animal1 = new Animal('Toby', 'Perro');

animal1.hacerSonido(); */

/* class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarPrecio(){
        console.log('El precio del producto ' + this.nombre + ' es ' + this.precio);
    }
}

const producto = new Producto('Yerba Playadito x 500gr', 2000);

producto.mostrarPrecio(); */

/* class CuentaBancaria {
    constructor(nombre, saldo){
        this.titular = nombre;
        this.saldo = saldo;
    }

    depositar(monto){
        if(monto <= 0) return console.log('Error de depósito, no puedes depositar saldo negativo ni 0');
        this.saldo = this.saldo + monto;
        console.log(this.titular + ', tu nuevo saldo es de ' + this.saldo);
    }

    retirar(monto){
        if(this.saldo < monto) return console.log('No hay saldo suficiente en cuenta.');
        this.saldo = this.saldo - monto;
        console.log(this.titular + ' tu saldo actual es de ' + this.saldo);
    }

    mostrarSaldo(){
        console.log('Tu saldo actual es de ' + this.saldo);
    }
}

const persona1 = new CuentaBancaria('Javier', 50);

persona1.depositar(10);
persona1.retirar(100);
persona1.depositar(10);
persona1.depositar(1);
persona1.mostrarSaldo(); */

class Libro{
    constructor(titulo, autor, paginas)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    mostrarInfo(){
        console.log('El libro ' + this.titulo + ' del autor ' + this.autor + ' tiene ' + this.paginas + ' páginas');
    }
}

const libro = new Libro('"Comentarios al Naucrato"', 'Rebord, Tomas', 267);
const libro2 = new Libro('"El archivo de las tormentas"', 'Sanderson Brandon', 6000);

libro.mostrarInfo();
libro2.mostrarInfo();