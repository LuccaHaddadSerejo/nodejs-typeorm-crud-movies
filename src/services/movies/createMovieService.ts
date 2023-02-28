import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { tReqMovie, tResMovie } from "../../interfaces/moviesInterfaces";

const createMovieService = async (data: tReqMovie): Promise<tResMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie = movieRepository.create(data);

  await movieRepository.save(movie);

  return movie;
};

export default createMovieService;
