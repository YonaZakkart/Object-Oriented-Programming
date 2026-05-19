import { Request, Response } from 'express';
import Database from '../config/database';

class LibroController {
  public async crear(req: Request, res: Response) {
    const { titulo, autor } = req.body;
    const db = Database.getInstance().getConnection();
    await db.query(
      "INSERT INTO libros (titulo, autor) VALUES (?, ?)",
      [titulo, autor]
    );
    res.json({ message: "Libro creado" });
  }

  public async listar(req: Request, res: Response) {
    const db = Database.getInstance().getConnection();
    const [rows] = await db.query("SELECT * FROM libros");
    res.json(rows);
  }

  public async obtenerPorId(req: Request, res: Response) {
    const { id } = req.params;
    const db = Database.getInstance().getConnection();
    const [rows]: any = await db.query(
      "SELECT * FROM libros WHERE id = ?", [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json(rows[0]);
  }

  public async eliminar(req: Request, res: Response) {
    const { id } = req.params;
    const db = Database.getInstance().getConnection();
    const [result]: any = await db.query(
      "DELETE FROM libros WHERE id = ?", [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json({ message: "Libro eliminado" });
  }
}

export default new LibroController();