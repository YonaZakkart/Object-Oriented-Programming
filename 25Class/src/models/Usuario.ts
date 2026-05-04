class Usuario{
    private id?: number;
    private nombre: string;
    private email: string;

    constructor(id: number, nombre: string, email: string){
        this.nombre=nombre
        this.id = id
        this.email=email
    }

    public getNombre(): string{
        return this.nombre
    }
    public getID(): number | undefined{
        return this.id
    }
    public getEmail(): string{
        return this.email
    }
}

export default Usuario;