import express from "express"
import router from "./routes/productoRoutes"

const app = express();

app.use(express.json());

app.use("/productos", router);

export default app;

// export default app;