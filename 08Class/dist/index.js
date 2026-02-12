"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventario {
    constructor(id, producto, codigo, fecha, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fecha = fecha;
        this.precio = precio;
    }
    Agregar(precio2, precio3) {
        console.log(`Producto agregado con precio: $${this.precio}`);
        console.log(`Precios de descuento: $${precio2} y $${precio3}`);
    }
}
let producto = new Inventario(1, "Camiseta", "12usj", "12/02/2026", 8.5);
producto.Agregar(8.0, 7.5);
//# sourceMappingURL=index.js.map