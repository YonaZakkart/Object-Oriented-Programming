import request from "supertest";
import app from "../app"
import { response } from "express";
import { text } from "node:stream/consumers";

describe("pruebas CRUD Usuario", () => {

    test("Debe de crearse un usuario", async () => {
        const response = await request(app)
            .post("/usuarios")
            .send({
                nombre: "Will",
                email: "will@gmail.com"
            });
        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty(
            "mensaje",
            "usuario creado"
        );
    });

    test("Listar usuarios", async () => {
        const response = await request(app)
            .get("/usuarios");
        expect(response.status).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);
    })

});