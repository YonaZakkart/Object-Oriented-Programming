// Crear una clase abstracta Producto con los métodos calcularPrecioFinal() y 
// mostrarInformacion(). El sistema debe permitir registrar productos electrónicos, ropa y 
// alimentos. Cada tipo de producto debe aplicar diferentes reglas de impuestos o descuentos 
// para calcular el precio final. 

abstract class Producto{
    nombre: string;
    precio: number
    constructor(nombre:string, precio:number){
        this.precio=precio;
        this.nombre=nombre
    }
    // abstract calcularCosto(a: string, b: string): void;
    abstract calcularPrecioFinal(): number;
    abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
    constructor(nombre: string, precio: number){
        super(nombre,precio)
    }
    calcularPrecioFinal(): number { //se le aplica 15% de ipuestos
        let precioFinal = this.precio + (this.precio * 0.15)
        return precioFinal
    }
    mostrarInformacion(): void {
        console.log(`
            nombre del producto: ${this.nombre}
            precio del producto: $${this.precio}
            precio final (con impuestos): $${this.calcularPrecioFinal()}`)
    }
}

class Ropa extends Producto {
    constructor(nombre: string, precio: number){
        super(nombre,precio)
    }
    calcularPrecioFinal(): number { //saqui puse descuento del 10%
        let precioFinal = this.precio - (this.precio * 0.10)
        return precioFinal
    }
    mostrarInformacion(): void {
        console.log(`
            nombre del producto: ${this.nombre}
            precio del producto: $${this.precio}
            precio final (con desduento del 10%): $${this.calcularPrecioFinal()}`)
    }
}

class Alimentos extends Producto {
    constructor(nombre: string, precio: number){
        super(nombre,precio)
    }
    calcularPrecioFinal(): number { // 5% de ipuestos y 8% de descuento solo porque si
        let precioFinal = this.precio + (this.precio * 0.05) - (this.precio * 0.08)
        return precioFinal
    }
    mostrarInformacion(): void {
        console.log(`
            nombre del producto: ${this.nombre}
            precio del producto: $${this.precio}
            precio final $${this.calcularPrecioFinal()}`)
    }
}

const electronico = new Electronico("Lpatop", 1000)
electronico.mostrarInformacion()

const ropa = new Ropa("camisa", 15)
ropa.mostrarInformacion()

const alimento = new Alimentos("caja de jugos", 12)
alimento.mostrarInformacion()
console.log(alimento.calcularPrecioFinal()) //solo devuelve un number, que es el precio final