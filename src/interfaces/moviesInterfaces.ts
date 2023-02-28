import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  movieCreateSchema,
  multipleMoviesSchema,
  reqMovieSchema,
} from "../schemas";

type tReqMovie = z.infer<typeof reqMovieSchema>;
type tResMovie = z.infer<typeof movieCreateSchema>;
type tUpdateMovie = DeepPartial<tReqMovie>;
type tResMultipleMovies = z.infer<typeof multipleMoviesSchema>;

interface iResMultipleMovies {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Array<tResMovie>;
}

export {
  tReqMovie,
  tResMovie,
  tUpdateMovie,
  tResMultipleMovies,
  iResMultipleMovies,
};
