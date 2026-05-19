class Usuario {
  private id?: number;
  private nombre: string;
  private email: string;
  private prestamosActivos: number;

  constructor(nombre: string, email: string, id?: number, prestamosActivos: number = 0) {
    this.nombre = nombre;
    this.email = email;
    this.id = id;
    this.prestamosActivos = prestamosActivos;
  }

  public getId(): number | undefined { return this.id; }
  public getNombre(): string { return this.nombre; }
  public getEmail(): string { return this.email; }
  public getPrestamosActivos(): number { return this.prestamosActivos; }

  public puedePedir(limite: number = 3): boolean {
    return this.prestamosActivos < limite;
  }
}

export default Usuario;