import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarTipoCodFuncionario1743281291408 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "funcionarios" 
            ALTER COLUMN "funcionarioCodigo" TYPE INTEGER 
            USING NULLIF("funcionarioCodigo", '')::INTEGER;`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
           ALTER TABLE "funcionarios"
           ALTER COLUMN "funcionarioCodigo" TYPE VARCHAR(10) 
           USING "funcionarioCodigo"::VARCHAR(10);
        `);
    }

}
