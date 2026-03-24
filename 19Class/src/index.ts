
class CuentaBancaria {
    private _saldo: number;
    constructor(saldo: number) {
        this._saldo = saldo
    }
    //getter
    get saldo(): number {
        return this._saldo;
    }
    //setter 
    set saldo(valor: number) {
        if (valor < 0) {
            console.log('No se permite saldo negativo')
        } else{
        this._saldo = valor;}
    }
    //metodo para depositar
    depositar(monto: number) {
        if (monto > 0) {
            this._saldo += monto;
        }
    }
}

const cuenta = new CuentaBancaria(2000)
cuenta.saldo = 5000 //
cuenta.depositar(500)//
console.log(cuenta.saldo)