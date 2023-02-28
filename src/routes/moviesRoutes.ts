import { Router } from "express";
import {
  createMovieController,
  getAllMoviesController,
  updateMovieController,
  deleteMovieController,
} from "../controllers/moviesControllers";
import { checkIfMovieExists, checkUniqueName } from "../middlewares/movies";
import validateDataMiddleware from "../middlewares/validateDataMiddleware";
import { reqMovieSchema, updateMovieSchema } from "../schemas";

const moviesRoutes: Router = Router();

moviesRoutes.post(
  "",
  validateDataMiddleware(reqMovieSchema),
  checkUniqueName,
  createMovieController
);

moviesRoutes.get("", getAllMoviesController);

moviesRoutes.delete("/:id", checkIfMovieExists, deleteMovieController);

moviesRoutes.patch(
  "/:id",
  validateDataMiddleware(updateMovieSchema),
  checkIfMovieExists,
  checkUniqueName,
  updateMovieController
);

export default moviesRoutes;
