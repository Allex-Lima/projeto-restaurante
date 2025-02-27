import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comissao } from "./entities/comissao.entity";
import { ComissaoController } from "./comissao.controller";
import { ComissaoService } from "./comissao.service";


@Module({
    imports: [TypeOrmModule.forFeature([Comissao])],
    controllers: [ComissaoController],
    providers: [ComissaoService],
})
export class ComissaoModule { }