class Usuario{
    constructor(nombre, email, dni){
        this.nombreCompleto = nombre;
        this.email = email;
        this.dni = dni;
    }

    LogIn(){

    }

    LogOut(){

    }

    RealizarCompra(){
        
    }

}

class Carrito{
    constructor(cantidad){
        this.cantidadProductos = cantidad;
        this.lista = [];
    }

    InfoCarrito(){

    }

    AgregarProd(){

    }

}

class Producto{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    InfoProducto(){

    }
}

class Pedido{
    constructor(totalcarrito, monto){
        this.totalCarrito = totalcarrito;
        this.montoTotal = monto;
    }

    InfoPedido(){
        
    }
}

const user = new Usuario("Thiago Belpoliti", "thiago@gmail.com", 42044764);

//const prod = new Producto("Azucar Ledesma", "Azucar");

const listaProds = [new Producto("Azucar Ledesma", "Azucar"), new Producto("Playadito 500g", "Yerba"), new Producto("Coca Cola 2.25", "Gaseosa")];

const carrito = new Carrito(3, listaProds);

const pedido = new Pedido(3, 8500);
