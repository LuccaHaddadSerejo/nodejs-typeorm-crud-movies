import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import {} from "../../interfaces/moviesInterfaces";

const deleteMovieService = async (id: number): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = await movieRepository.findOne({
    where: {
      id: id,
    },
  });

  await movieRepository.remove(movie!);
};

export default deleteMovieService;
