import { upload } from './../conf/multer';
import { Request, Response } from "express";
import Database from "../config/database";
import Usuario from "../models/Usuario";

class UsuarioController {

    // public async crear(req: Request, res: Response) {
    //     const { nombre, email } = req.body;

    //     const usuario = new Usuario(nombre, email);

    //     const db = Database.getInstance().getConnection();

    //     await db.query(
    //         "INSERT INTO usuarios(nombre, email) VALUES (?, ?)",
    //         [usuario.getNombre(), usuario.getEmail()]
    //     );

    //     res.json({ mensaje: "usuario creado" });
    // }}

    public async crear(
        req:Request,
        res: Response
    ): Promise<void>{

        try {
            const { nombre, email } = req.body;
            const db = Database.getInstance().getConnection();
            const rutaFoto = req.file 
            ? `src/uploads/perfiles/${req.file.filename}`
            : null;

        await db.query(
            `
            INSERT INTO usuarios
            (
            nombre,
            email,
            foto
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
            email,
            rutaFoto
        ]
    );
    res.status(201).json({
        mensaje: "Usuario creado",
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

        const [rows] = await db.query("SELECT * FROM usuarios");

        res.json(rows);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, email } = req.body;

        const db = Database.getInstance().getConnection();

        const [result]: any = await db.query(
            "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?",
            [nombre, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json({ mensaje: "Usuario actualizado correctamente" });
    }

    public async eliminar(req: Request, res: Response) {
        const { id } = req.params;
        const db = Database.getInstance().getConnection();
        const [result]: any = await db.query(
            "DELETE FROM usuarios WHERE id = ?",
            [id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        res.json({ mensaje: "Usuario eliminado correctamente" });
    }

    public async obtenerPorId(req: Request, res: Response) {
        const { id } = req.params;

        const db = Database.getInstance().getConnection();

        const [rows]: any = await db.query(
            "SELECT * FROM usuarios WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json(rows[0]);
    }
}
export default new UsuarioController();
