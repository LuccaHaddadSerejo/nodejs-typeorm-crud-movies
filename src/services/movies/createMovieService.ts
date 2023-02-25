import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { tResMovie } from "../../interfaces/moviesInterfaces";

const createMovieService = async (data: any): Promise<tResMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: any = movieRepository.create(data);

  await movieRepository.save(movie);

  return movie;
};

export default createMovieService;
