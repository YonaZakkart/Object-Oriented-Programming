"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(id, nombre, email) {
        this.nombre = nombre;
        this.id = id;
        this.email = email;
    }
    getNombre() {
        return this.nombre;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map