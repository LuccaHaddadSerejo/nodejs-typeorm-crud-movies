import { z } from "zod";

const reqMovieSchema = z.object({
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int().positive(),
});

const movieCreateSchema = reqMovieSchema.extend({ id: z.number() });

const updateMovieSchema = reqMovieSchema.partial();

const multipleMoviesSchema = movieCreateSchema.array();

export {
  reqMovieSchema,
  movieCreateSchema,
  updateMovieSchema,
  multipleMoviesSchema,
};
