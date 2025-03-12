import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarNomeDaColuna1741735929522 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mesas" RENAME COLUMN "codigo" TO "mesaCodigo" `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mesas" RENAME COLUMN "mesaCodigo" TO "codigo" `);
    }

}
