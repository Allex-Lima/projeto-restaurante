import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Venda } from "./entities/venda.entity";
import { vendaService } from "./venda.service";
import { MesaController } from "src/mesa/mesa.controller";
import { VendaController } from "./venda.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Venda])],
    controllers: [VendaController],
    providers: [vendaService],

})
export class VendaModule {}