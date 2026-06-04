//clase del modelo
class Usuario {
    //Atributos
    private id?: number;
    private nombre: string;
    private email: string;
    private foto?: string;

    //Constructor
    constructor(nombre: string, email: string, id?: number, foto?: string) {
        this.nombre = nombre;
        this.email = email;
        this.id = id;
        this.foto = foto;
    }

    //Modificadores de acceso para acceder a las variables
    public getNombre(): string {
        return this.nombre;
    }

    public getEmail(): string {
        return this.email;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getFoto(): string | undefined {
        return this.foto;
    }
}

export default Usuario;
