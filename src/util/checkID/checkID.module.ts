import { Global, Module } from "@nestjs/common";
import { CheckIDService } from "./checkID.service";
import { MesaModule } from "src/mesa/mesa.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mesa } from "src/mesa/entities/mesa.entity";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { FuncionarioModule } from "src/funcionario/funcionario.module";
import { Produto } from "src/produto/entities/produto.entity";
import { ProdutoModule } from "src/produto/produto.module";
import { Venda } from "src/venda/entities/venda.entity";
import { VendaModule } from "src/venda/venda.module";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([Mesa, Funcionario, Produto, Venda]),
        MesaModule, FuncionarioModule, ProdutoModule, VendaModule,
    ],
    controllers: [],
    providers: [CheckIDService],
    exports: [CheckIDService]

})
export class CheckIDModule {}