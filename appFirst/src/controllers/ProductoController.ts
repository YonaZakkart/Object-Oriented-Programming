import { upload } from './../conf/multer';
import { Request, Response } from "express";
import Database from "../config/database";
import Producto from "../models/Producto";

class ProductoController {
    public async crear(
        req: Request,
        res: Response
    ): Promise<void> {

        try {
            const { nombre, precio } = req.body;
            const db = Database.getInstance().getConnection();
            const rutaFoto = req.file
                ? `src/productos/${req.file.filename}`
                : null;

            await db.query(
                `
            INSERT INTO productos
            (
            nombre,
            precio,
            imagen
        )
            VALUES
            (
            ?,
            ?,
            ?
            )
        `,
                [
                    nombre,
                    precio,
                    rutaFoto
                ]
            );
            res.status(201).json({
                mensaje: "Producto creado",
                foto: rutaFoto
            })
        } catch (error) {
            res.status(500).json({
                mensaje: "Error interno",
                error
            })
        }
    }


    public async listar(req: Request, res: Response) {
        const db = Database.getInstance().getConnection();

        const [rows] = await db.query("SELECT * FROM productos");

        res.json(rows);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, precio } = req.body;

        const db = Database.getInstance().getConnection();

        const [result]: any = await db.query(
            "UPDATE productos SET nombre = ?, precio = ? WHERE idProducto = ?",
            [nombre, precio, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json({ mensaje: "Producto actualizado correctamente" });
    }

    public async eliminar(req: Request, res: Response) {
        const { id } = req.params;
        const db = Database.getInstance().getConnection();
        const [result]: any = await db.query(
            "DELETE FROM productos WHERE idProducto = ?",
            [id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        res.json({ mensaje: "Producto eliminado correctamente" });
    }

    public async obtenerPorId(req: Request, res: Response) {
        const { id } = req.params;

        const db = Database.getInstance().getConnection();

        const [rows]: any = await db.query(
            "SELECT * FROM productos WHERE idProducto = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json(rows[0]);
    }
}
export default new ProductoController();

