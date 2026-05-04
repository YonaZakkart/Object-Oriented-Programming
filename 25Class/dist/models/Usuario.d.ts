declare class Usuario {
    private id?;
    private nombre;
    private email;
    constructor(id: number, nombre: string, email: string);
    getNombre(): string;
    getID(): number | undefined;
    getEmail(): string;
}
export default Usuario;
//# sourceMappingURL=Usuario.d.ts.map