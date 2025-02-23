import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MesaModule } from './mesa/mesa.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { VendaModule } from './venda/venda.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    DatabaseModule,
    FuncionarioModule,
    MesaModule,
    ProdutoModule,
    VendaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
