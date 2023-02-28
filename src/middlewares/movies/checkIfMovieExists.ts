import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import AppError from "../../errors/appError";

const checkIfMovieExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = await movieRepository.findOneBy({
    id: +req.params.id,
  });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export default checkIfMovieExists;
