import { DataSource } from 'typeorm';
import { DatabaseConfigService } from './database/databaseConfigService'; // Ajuste o caminho se necessário
import { ConfigModule, ConfigService } from '@nestjs/config';

// Inicializa o módulo de configuração (caso esteja usando dotenv)
ConfigModule.forRoot();

const configService = new DatabaseConfigService(new ConfigService());

export const dataSource = new DataSource({
  type: 'postgres',
  host: configService.host,
  port: configService.port,
  username: configService.username,
  password: configService.password,
  database: configService.database,
  entities: ['dist/**/*.entity.js'], // Ajuste para TypeScript se necessário: ['src/**/*.entity.ts']
  migrations: ['src/migrations/*.js'], // Ajuste para TypeScript se necessário: ['src/migrations/*.ts']
  synchronize: false, // Nunca use "true" em produção!
});
