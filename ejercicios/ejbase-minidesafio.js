class CuentaBancaria {
    #saldo;


    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }


    depositar(monto) {
        if (monto <= 0) {
            throw new Error("Monto inválido");
        }
        this.#saldo += monto;
    }


    retirar(monto) {
        if (monto > this.#saldo) {
            throw new Error("Fondos insuficientes");
        }
        this.#saldo -= monto;
    }


    getSaldo() {
        return console.log(this.#saldo);
    }
}

const cuenta = new CuentaBancaria("Thiago", 1500);

cuenta.getSaldo();
cuenta.saldo = 100;
cuenta.depositar(100);
cuenta.getSaldo();
