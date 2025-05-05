import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarTipo1746482990880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "vendas" 
            ALTER COLUMN "vendaCodigo" TYPE INTEGER 
            USING NULLIF("vendaCodigo", '')::INTEGER;    
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
           ALTER TABLE "vendas"
           ALTER COLUMN "vendaCodigo" TYPE VARCHAR(10) 
           USING "vendaCodigo"::VARCHAR(10);
        `);
    }
}
