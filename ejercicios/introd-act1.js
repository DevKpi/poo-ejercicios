const mascota = {
    nombre: "Toby",
    tipo: "Perro",
    edad: 13,

    saludar: function () {
        console.log("Hola " + this.nombre);
    }
}


mascota.saludar();
