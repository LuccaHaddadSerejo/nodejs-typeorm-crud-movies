import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { tReqMovie, tResMovie } from "../../interfaces/moviesInterfaces";

const updateMovieService = async (
  reqData: any,
  id: number
): Promise<tResMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldData = await movieRepository.findOneBy({
    id: id,
  });

  const movie: any = movieRepository.create({
    ...oldData,
    ...reqData,
  });

  await movieRepository.save(movie);

  return movie;
};

export default updateMovieService;
