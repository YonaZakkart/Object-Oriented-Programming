class Prestamo {
  private id?: number;
  private usuarioId: number;
  private libroId: number;
  private fechaInicio: string;
  private estado: 'activo' | 'devuelto';

  constructor(usuarioId: number, libroId: number, fechaInicio: string, estado: 'activo' | 'devuelto' = 'activo', id?: number) {
    this.usuarioId = usuarioId;
    this.libroId = libroId;
    this.fechaInicio = fechaInicio;
    this.estado = estado;
    this.id = id;
  }

  public getId(): number | undefined { return this.id; }
  public getUsuarioId(): number { return this.usuarioId; }
  public getLibroId(): number { return this.libroId; }
  public getFechaInicio(): string { return this.fechaInicio; }
  public getEstado(): string { return this.estado; }
}

export default Prestamo;