class Notificacion {
    enviar(mensaje) {
        console.log(mensaje);
    }
} 

class Email extends Notificacion {
    enviar(mensaje) {
        console.log("Enviado desde email " + mensaje);
    }
}

class SMS extends Notificacion {
    enviar(mensaje) {
        console.log("Enviado desde SMS " + mensaje);
    }
}

class Push extends Notificacion {
    enviar(mensaje) {
        console.log("Enviado desde Push " + mensaje);
    }
}

const notis = [new Email(), new SMS(), new Push];

notis.forEach(a => a.enviar("Test"));
