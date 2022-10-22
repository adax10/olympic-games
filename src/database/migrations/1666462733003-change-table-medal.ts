import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeTableMedal1666462733003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('ALTER TABLE medal ADD UNIQUE INDEX (country)');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('medal', 'country');
  }
}
