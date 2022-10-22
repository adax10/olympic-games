import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class addTableMedal1666452834708 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'medal',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true
          },
          {
            name: 'country',
            type: 'varchar'
          },
          {
            name: 'amount',
            type: 'varchar'
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medal');
  }
}
