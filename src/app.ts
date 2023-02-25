import "express-async-errors";
import express, { Application } from "express";
import handleError from "./errors/handleErrors";
import moviesRoutes from "./routes/moviesRoutes";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRoutes);

app.use(handleError);
export default app;
