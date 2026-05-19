class Libro {
  private id?: number;
  private titulo: string;
  private autor: string;
  private disponible: boolean;

  constructor(titulo: string, autor: string, disponible: boolean = true, id?: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = disponible;
    this.id = id;
  }

  public getId(): number | undefined { return this.id; }
  public getTitulo(): string { return this.titulo; }
  public getAutor(): string { return this.autor; }
  public estaDisponible(): boolean { return this.disponible; }
}

export default Libro;