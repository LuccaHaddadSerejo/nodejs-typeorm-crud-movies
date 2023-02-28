import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { tResMovie, tUpdateMovie } from "../../interfaces/moviesInterfaces";

const updateMovieService = async (
  reqData: tUpdateMovie,
  id: number
): Promise<tResMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldData = await movieRepository.findOneBy({
    id: id,
  });

  const movie: Movie = movieRepository.create({
    ...oldData,
    ...reqData,
  });

  await movieRepository.save(movie);

  return movie;
};

export default updateMovieService;
