import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import AppError from "../../errors/appError";

const checkUniqueName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  if (req.body.name) {
    const movie = await movieRepository.findOneBy({
      name: req.body.name,
    });

    if (movie) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  return next();
};

export default checkUniqueName;
