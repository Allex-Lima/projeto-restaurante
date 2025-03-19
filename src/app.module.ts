import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MesaModule } from './mesa/mesa.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { VendaModule } from './venda/venda.module';
import { ProdutoModule } from './produto/produto.module';
import { ItemVendaModule } from './item-venda/itemVenda.module';
import { ComissaoModule } from './comissoes/comissao.module';
import { CheckIDModule } from './util/checkID/checkID.module';

@Module({
  imports: [
    CheckIDModule,
    ComissaoModule,
    DatabaseModule,
    FuncionarioModule,
    ItemVendaModule,
    MesaModule,
    ProdutoModule,
    VendaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
