import { MigrationInterface, QueryRunner } from "typeorm";

export class fixDescriptionConstraints1677295575964
  implements MigrationInterface
{
  name = "fixDescriptionConstraints1677295575964";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" ALTER COLUMN "description" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" ALTER COLUMN "description" SET NOT NULL`
    );
  }
}
