"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const Usuario_1 = __importDefault(require("../models/Usuario"));
class UsuarioController {
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, email } = req.body;
            const usuario = new Usuario_1.default(nombre, email);
            const db = database_1.default.getInstance().getConection();
            yield db.query("INSERT INTO usuarios(nombre,email) VALUES(?,?)", [usuario.getNombre(), usuario.getEmail()]);
            res.json({ message: "Usuario Creado" });
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = database_1.default.getInstance().getConection();
            const [rows] = yield db.query("SELECT * FROM usuarios");
            res.json(rows);
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [id] = req.params;
            const { nombre, email } = req.body;
            const db = database_1.default.getInstance().getConection();
            const [result] = yield db.query("UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?", [nombre, email, id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.json({ message: "Usuario actualizado" });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const db = database_1.default.getInstance().getConection();
            const [result] = yield db.query("DELETE FROM usuarios WHERE id = ?", [id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.json({ message: "Usuario eliminado" });
        });
    }
    obtenerPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map