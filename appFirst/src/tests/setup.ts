import Database from "../config/database";

// Mock de la base de datos
jest.mock("../config/database", () => {
    return {
        __esModule: true,
        default: {
            getInstance: jest.fn().mockReturnValue({
                getConnection: jest.fn().mockReturnValue({
                    query: jest.fn()
                        .mockResolvedValueOnce([[{ id: 1, nombre: "Will", email: "will@gmail.com" }]]) // Para CREATE
                        .mockResolvedValueOnce([[{ id: 1, nombre: "Will", email: "will@gmail.com" }]]) // Para READ
                })
            })
        }
    };
});
