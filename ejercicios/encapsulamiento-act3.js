class CuentaBancaria {
    #saldo;


    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
        this.historial = [];
    }

    depositar(monto) {
        if (monto <= 0) {
            throw new Error("Monto inválido");
        }

        this.#saldo += monto;
        console.log(this.titular + " depositaste exitosamente " + monto);
        let textoHistorial = "Depósito de un total de " + monto;
        this.setHistorial(textoHistorial);
    }


    retirar(monto) {
        if (monto > this.#saldo) {
            throw new Error("Fondos insuficientes");
        }
        else if ((monto > 1000) && (monto < 2000)) {

            this.#saldo -= monto;

            let textoHistorial = "Depósito de un total de " + monto;
            this.setHistorial(textoHistorial);

            console.log(this.titular + " retiraste exitosamente " + monto);
        }
        else {
            throw new Error("El minimo de retiro por extracción es de 1000 y el máximo de 2000");
        }

    }

    setHistorial(textoHistorial) {
        let fecha = new Date();
        this.historial.push(textoHistorial + ' el día ' + fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear());
    }

    getSaldo() {
        return console.log(this.#saldo);
    }

    historialRetiros() {
        return console.log(this.historial);
    }
}

const cuenta = new CuentaBancaria("Thiago", 15000);

cuenta.retirar(1100);
cuenta.retirar(1200);
cuenta.depositar(100);
cuenta.historialRetiros();
