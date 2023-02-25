import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import AppError from "../errors/appError";

const checkDescriptionValue = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.body.description) {
    req.body.description = null;
    return next();
  }

  return next();
};

const checkUniqueName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = await movieRepository.findOne({
    where: {
      name: req.body.name,
    },
  });

  if (movie) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};

const checkIfMovieExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = await movieRepository.findOne({
    where: {
      id: +req.params.id,
    },
  });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export { checkDescriptionValue, checkUniqueName, checkIfMovieExists };
