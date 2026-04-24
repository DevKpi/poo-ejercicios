class Usuario{
    #clave
    constructor(nombre, pass){
        this.nombre = nombre;
        this.#clave = pass;
    }

    validarPassword(pass){
        if(this.#clave == pass) {
            return console.log("Clave correcta");
        }
        else 
            {
            return console.log("Clave incorrecta");
        }
    }

    cambiarPassword(nueva){
        let largonueva = nueva.length;
        if((largonueva >= 4) && (largonueva <= 8)){
            this.#clave = nueva;
            return console.log("Cambiaste la contraseña");
        }
        else{
            return console.log("La contraseña debe tener entre 4 y 8 caracteres");
        }
        
    }
}

const user = new Usuario("Thiago", "123");

user.validarPassword("123");
user.validarPassword("1234");
user.cambiarPassword("123456");
user.validarPassword("123456");
