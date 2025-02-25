import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemVenda } from "./entities/itemVenda.entity";
import { ItemVendaController } from "./itemVenda.controller";
import { ItemVendaService } from "./itemVenda.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemVenda])],
    controllers: [ItemVendaController],
    providers: [ItemVendaService]
})
export class ItemVendaModule { }