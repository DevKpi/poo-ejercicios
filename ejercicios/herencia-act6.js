class Producto{
    #precio;

    constructor(nombre, precio){
        this.nombre = nombre;
        this.#precio = precio;   
    }

    calcularPrecioFinal(){
        let preciofinal = this.#precio;
        console.log(preciofinal);
    }
}

class ProductoFisico extends Producto{
    #precio;
    constructor(nombre, precio, costoenv){
        super(nombre);
        this.#precio = precio;
        this.costoenv = costoenv;
    }

    calcularPrecioFinal(){
        let preciofinal = this.#precio + this.costoenv;
        console.log(preciofinal);
    }

}

class ProductoDigital extends Producto{
    #precio;
    constructor(nombre, precio, descuento){
        super(nombre);
        this.#precio = precio;
        this.descuento = descuento;
    }

    calcularPrecioFinal(){
        let preciofinal = this.#precio - this.descuento;
        console.log(preciofinal);
    }

}

const proddigital = new ProductoDigital('Shampoo', 1500, 100);
proddigital.calcularPrecioFinal();

const prodfisico = new ProductoFisico('Shampoo', 1500, 100);
prodfisico.calcularPrecioFinal();
