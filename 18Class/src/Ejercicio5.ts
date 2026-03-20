// Crear una clase abstracta Pago con el método procesarPago(). El usuario debe poder 
// seleccionar entre pago en efectivo, pago con tarjeta o transferencia bancaria. Cada clase 
// debe implementar su proceso de pago. 

abstract class Pago{
    monto: number;
    constructor(monto: number){
        this.monto=monto
}

    abstract procesarPago(a: number, b: number): void;
}

class PagoEfectivo extends Pago {
    constructor(monto:number){
        super(monto)
    }
    procesarPago(efectivo: number): void{
        if(efectivo>= this.monto){
            efectivo = efectivo - this.monto
            console.log(`Pago realizado con exito, su cambio es: $${efectivo}`)
        } else {
            console.log(`Dinero insuficiente`)
        }   
    }
}

class PagoTarjeta extends Pago {
    constructor(monto:number){
        super(monto)
    } 
    procesarPago(dineroTarjeta: number, pin: number): void{
         if(pin === 123 && dineroTarjeta >= this.monto){
            dineroTarjeta = dineroTarjeta - this.monto
            console.log(`Pago realizado con exito, dinero restante en su tarjeta: $${dineroTarjeta}`)
         } else {
            console.log(`Hubo un error al intentar realizar el pago`)
         }
    }
}

class Transferencia extends Pago {
    constructor(monto:number){
        super(monto)
    } 
    procesarPago(dineroCuenta: number, codigo: number): void{
         if(codigo === 111 && dineroCuenta >= this.monto){
            let costoTransferencia= this.monto * 0.10
            dineroCuenta= dineroCuenta - (this.monto + costoTransferencia)
            console.log(`Pago realizado con exito, dinero restante: $${dineroCuenta}`)
         } else {
            console.log(`Hubo un error al intentar realizar el pago`)
         }
    }
}

const pagoEnEfectivo = new PagoEfectivo(20)
pagoEnEfectivo.procesarPago(50)

const pagoConTarjeta = new PagoTarjeta(20)
pagoConTarjeta.procesarPago(400, 123)

const pagoTransferencia = new Transferencia(20)
pagoTransferencia.procesarPago(400, 111)