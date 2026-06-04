class Producto {
    private idProducto?: number;
    private nombre: string;
    private precio: number;
    private imagen?: string;

    constructor(nombre: string, precio: number, idProducto?: number, imagen?: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.idProducto = idProducto;
        this.imagen = imagen;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getId(): number | undefined {
        return this.idProducto;
    }

    public getFoto(): string | undefined {
        return this.imagen;
    }
}

export default Producto;