import express from "express";
import { dbConnect } from "./config/dbConnect.js";
import "dotenv/config";
import cors from "cors";
import AppError from "./errors/AppError.js";
import {errorHandler} from "./errors/errorHandler.js";
import router from "./routes/index.js";
const app = express();

//middlewares
app.use(express.json());
app.use(cors())
app.use(errorHandler);
app.use(router);
app.all("/{*splat}", (req, res) => {
    throw new AppError(404, `route: ${req.originalUrl} is not defined`);
})
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await dbConnect();
    console.log(`Server is running on port ${PORT}`);
})