import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column("text")
  description: string;

  @Column()
  duration: number;

  @Column()
  price: number;
}

export default Movie;