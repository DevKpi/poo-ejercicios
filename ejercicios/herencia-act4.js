class Invitado{
    constructor(nombre){
        this.nombre = "Invitado";
    }

    Ingreso(){
        console.log(this.nombre + ' ha ingresado');
    }
}

class Usuario{
    constructor(nombre, permiso){
        this.nombre = nombre;
        this.permiso = permiso;
    }

    Ingreso(){
        console.log('El usuario ' + this.nombre + ' ha ingresado al sistema');
    }

    ListaPermisos(){
        console.log("Permisos de usuario: " + this.permiso);
    }
}

class Admin extends Usuario{
    constructor(nombre, rango, permiso, superpermiso){
        super(nombre);
        this.rango = rango;
        this.permiso = superpermiso;
    }

    Alerta(){
        console.log('El administrador ' + this.nombre + ' (rango: ' + this.rango + ')' + ' ha enviado una alerta');
    }

    ListaPermisos(){
        console.log("Permisos de admin: " + this.permiso);
    }
}

const adm = new Admin("Thiago", "Super Admin", "Leer", "Publicar");
adm.Alerta();
const user = new Usuario("Mario", "Leer");
user.Ingreso();
const inv = new Invitado();
inv.Ingreso();

user.ListaPermisos();
adm.ListaPermisos();
