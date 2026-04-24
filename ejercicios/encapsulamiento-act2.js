class Producto{
    #precio
    constructor(nombre, precio){
        this.nombre = nombre;
        this.#precio = precio;
    }

    setPrecio(valor){
        if(valor > 0){
            this.#precio = valor;
            return console.log("Cambiaste el valor del producto");
        }
        else{
            return console.log("El valor del producto debe ser mayor a 0");
        }
    }

    getPrecio(){
        return console.log("El valor de " + this.nombre + "es de " + this.#precio);
    }
}

const azucarledesma = new Producto("Azucar Ledesma", 100);

azucarledesma.getPrecio();
azucarledesma.setPrecio(100);
azucarledesma.setPrecio(0);
