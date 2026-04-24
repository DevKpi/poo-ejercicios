class Alumno {
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

estudiante.promedio();
