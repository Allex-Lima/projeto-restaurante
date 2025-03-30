import { Global, Module } from "@nestjs/common";
import { CheckIDService } from "./checkID.service";
import { MesaModule } from "src/mesa/mesa.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mesa } from "src/mesa/entities/mesa.entity";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { FuncionarioModule } from "src/funcionario/funcionario.module";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([Mesa, Funcionario]),
        MesaModule, FuncionarioModule,
    ],
    controllers: [],
    providers: [CheckIDService],
    exports: [CheckIDService]

})
export class CheckIDModule {}