class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    Presentarse(){
        console.log('Me presento, soy ' + this.nombre);
    }
}

class Alumno extends Persona{
    constructor(nombre){
        super(nombre);
    }

    Presentarse(){
        console.log('Me presento, soy el alumno ' + this.nombre);
    }

    Estudiar(){
        console.log('El alumno ' + this.nombre + ' ahora se encuentra estudiando.');
    }
}

class Profesor extends Persona{
    constructor(nombre){
        super(nombre);
    }

    Presentarse(){
        console.log('Me presento, soy el profesor ' + this.nombre);
    }

    Enseñar(){
        console.log('El profesor ' + this.nombre + ' está enseñando.');
    }
}

const persona = new Persona('Mario');
persona.Presentarse();

const alumno = new Alumno('José');
alumno.Presentarse();
alumno.Estudiar();

const profe = new Profesor('Gamal');
profe.Presentarse();
profe.Enseñar();
