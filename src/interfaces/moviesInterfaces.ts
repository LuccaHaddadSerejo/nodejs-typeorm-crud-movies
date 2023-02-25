import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  movieCreateSchema,
  multipleMoviesSchema,
  reqMovieSchema,
  updateMovieSchema,
} from "../schemas";

type tReqMovie = z.infer<typeof reqMovieSchema>;
type tResMovie = z.infer<typeof movieCreateSchema>;
type test = DeepPartial<tResMovie>;
type tUpdatedMovie = z.infer<typeof updateMovieSchema>;
type tResUpdatedMovie = DeepPartial<tUpdatedMovie>;
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
  tResUpdatedMovie,
  tResMultipleMovies,
  iResMultipleMovies,
  test,
};
