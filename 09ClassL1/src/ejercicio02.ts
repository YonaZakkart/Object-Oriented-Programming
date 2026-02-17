// EJERCICIO 02:

//  mensaje:
// ****Cantidad de producto: cantidad*****
// ****Precio: $Precio******
// ****Descuento: $descuento****
// ****Iva: $iva****
// ****Total a pagar******

class Producto {
    nombre: string;
    precio: number;
    iva: number;
    constructor(nombre: string, precio: number, iva: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.iva = iva;
    }
    public compra(cantidad: number, descuento: number): void {
        let precioCompra= this.precio * cantidad
        this.precio = precioCompra //aqui this.precio ya tiene el nuevo precio base
        let desc = (this.precio * descuento) / 100
        descuento = desc
        let calcularIva = ((this.precio - descuento) * (this.iva)) / 100 
        this.iva = calcularIva
        let pagoTotal = (this.precio - descuento) + this.iva //al precio le resta el descuento y suma el ivA

            console.log(`
            Detalles de la compra:
            Producto: ${this.nombre}
            cantidad de compra: ${cantidad}
            Precio: $${this.precio}
            descuento: -$${descuento}
            IVA: +$${this.iva}
            TOTAL A PAGAR: $${pagoTotal}`)
    }
}
                                //precio y el IVA
let cliente = new Producto("telefono", 100, 10,)
cliente.compra(2, 20)
        //cantidad y el descuento