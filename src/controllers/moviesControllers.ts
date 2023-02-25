import { Request, Response } from "express";
import createMovieService from "../services/movies/createMovieService";
import deleteMovieService from "../services/movies/deleteMovieService";
import getAllMoviesService from "../services/movies/getAllMoviesService";
import updateMovieService from "../services/movies/updateMovieService";
const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createMovieService(req.body);

  return res.status(201).json(newUser);
};

const getAllMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(await getAllMoviesService(req.query));
};

const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updatedUser = await updateMovieService(req.body, +req.params.id);

  return res.status(200).json(updatedUser);
};

const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(204).json(await deleteMovieService(+req.params.id));
};

export {
  createMovieController,
  getAllMoviesController,
  updateMovieController,
  deleteMovieController,
};
