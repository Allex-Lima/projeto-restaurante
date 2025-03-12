import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComissaoModule } from 'src/comissoes/comissao.module';
import { FuncionarioModule } from 'src/funcionario/funcionario.module';
import { ItemVendaModule } from 'src/item-venda/itemVenda.module';
import { MesaModule } from 'src/mesa/mesa.module';
import { ProdutoModule } from 'src/produto/produto.module';
import { VendaModule } from 'src/venda/venda.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
        migrations: ['dist/migrations/*.js'], // Ajuste para TypeScript se necessário: ['src/migrations/*.ts']
      }),
      inject: [ConfigService],
    }),
    ComissaoModule,
    FuncionarioModule,
    ItemVendaModule,
    MesaModule,
    ProdutoModule,
    VendaModule,
  ],
})
export class DatabaseModule {}
