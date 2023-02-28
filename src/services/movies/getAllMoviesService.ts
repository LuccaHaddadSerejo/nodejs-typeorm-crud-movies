import { FindOptionsOrderValue, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { iResMultipleMovies } from "../../interfaces/moviesInterfaces";

const getAllMoviesService = async (
  payload: any
): Promise<iResMultipleMovies> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  let page: number = +payload.page || 1;
  let perPage: number = +payload.perPage || 5;
  const sort: string | undefined = payload.sort;
  let order: FindOptionsOrderValue = payload.order || "ASC";

  if (!sort) {
    order = "ASC";
  }

  if (page < 0) {
    page = 1;
  }

  if (perPage < 0 || perPage > 5) {
    perPage = 5;
  }

  const movieCount: number = await movieRepository.count();

  let getMovies: Array<Movie> = await movieRepository.find({
    take: perPage,
    skip: perPage * (page - 1),
    order: {
      id: order,
    },
  });

  if (sort === "price") {
    getMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        price: order,
      },
    });
  }

  if (sort === "duration") {
    getMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        duration: order,
      },
    });
  }

  const result: iResMultipleMovies = {
    prevPage:
      page === undefined || page === 1
        ? null
        : `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`,
    nextPage:
      movieCount <= getMovies.length + perPage * (page - 1)
        ? null
        : `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`,
    count: movieCount,
    data: getMovies,
  };

  return result;
};

export default getAllMoviesService;
