class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarPrecio(){
        console.log('El precio del producto ' + this.nombre + ' es ' + this.precio);
    }
}

const producto = new Producto('Yerba Playadito x 500gr', 2000);

producto.mostrarPrecio();
