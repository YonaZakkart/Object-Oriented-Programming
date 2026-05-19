import { Request, Response } from 'express';
import Database from '../config/database';

class UsuarioController {
  public async crear(req: Request, res: Response) {
    const { nombre, email } = req.body;
    const db = Database.getInstance().getConnection();
    await db.query(
      "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
      [nombre, email]
    );
    res.json({ message: "Usuario creado" });
  }

  public async listar(req: Request, res: Response) {
    const db = Database.getInstance().getConnection();
    const [rows] = await db.query("SELECT * FROM usuarios");
    res.json(rows);
  }

  public async obtenerPorId(req: Request, res: Response) {
    const { id } = req.params;
    const db = Database.getInstance().getConnection();
    const [rows]: any = await db.query(
      "SELECT * FROM usuarios WHERE id = ?", [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(rows[0]);
  }

  public async eliminar(req: Request, res: Response) {
    const { id } = req.params;
    const db = Database.getInstance().getConnection();
    const [result]: any = await db.query(
      "DELETE FROM usuarios WHERE id = ?", [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado" });
  }
}

export default new UsuarioController();