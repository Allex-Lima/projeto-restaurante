import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarColunaProdutoValor1744151847363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "produtos"
            ALTER COLUMN "produtoValor" TYPE numeric(10,2);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "produtos"
            ALTER COLUMN "produtoValor" TYPE INTERGER USING ROUND("produtoValor");
        `)
    }

}
