import { Request, Response } from 'express';
import Database from '../config/database';

const LIMITE_PRESTAMOS = 3;

class PrestamoController {
  public async crear(req: Request, res: Response) {
    const { usuario_id, libro_id } = req.body;
    const db = Database.getInstance().getConnection();

    // Validar que el usuario existe
    const [usuarios]: any = await db.query(
      "SELECT * FROM usuarios WHERE id = ?", [usuario_id]
    );
    if (usuarios.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Validar límite de prstamos activos
    const [prestamosActivos]: any = await db.query(
      "SELECT COUNT(*) as total FROM prestamos WHERE usuario_id = ? AND estado = 'activo'",
      [usuario_id]
    );
    if (prestamosActivos[0].total >= LIMITE_PRESTAMOS) {
      return res.status(400).json({ message: `El usuario ya tiene ${LIMITE_PRESTAMOS} prestamos activos` });
    }

    // Validar que el libro existe y que esta disponible
    const [libros]: any = await db.query(
      "SELECT * FROM libros WHERE id = ?", [libro_id]
    );
    if (libros.length === 0) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    if (!libros[0].disponible) {
      return res.status(400).json({ message: "El libro no está disponible" });
    }

    // Crear el prestamo y marcar el libro como no disponible
    const fecha = new Date().toISOString().split('T')[0];
    await db.query(
      "INSERT INTO prestamos (usuario_id, libro_id, fecha_inicio, estado) VALUES (?, ?, ?, 'activo')",
      [usuario_id, libro_id, fecha]
    );
    await db.query(
      "UPDATE libros SET disponible = false WHERE id = ?", [libro_id]
    );

    res.json({ message: "Préstamo creado exitosamente" });
  }

  public async listar(req: Request, res: Response) {
    const db = Database.getInstance().getConnection();
    const [rows] = await db.query(`
      SELECT p.id, u.nombre AS usuario, l.titulo AS libro, p.fecha_inicio, p.estado
      FROM prestamos p
      JOIN usuarios u ON p.usuario_id = u.id
      JOIN libros l ON p.libro_id = l.id
    `);
    res.json(rows);
  }

  public async devolver(req: Request, res: Response) {
    const { id } = req.params;
    const db = Database.getInstance().getConnection();

    const [prestamos]: any = await db.query(
      "SELECT * FROM prestamos WHERE id = ? AND estado = 'activo'", [id]
    );
    if (prestamos.length === 0) {
      return res.status(404).json({ message: "Prestamo no encontrado o ya devuelto" });
    }

    await db.query(
      "UPDATE prestamos SET estado = 'devuelto' WHERE id = ?", [id]
    );
    await db.query(
      "UPDATE libros SET disponible = true WHERE id = ?", [prestamos[0].libro_id]
    );

    res.json({ message: "Libro devuelto exitosamente" });
  }
}

export default new PrestamoController();