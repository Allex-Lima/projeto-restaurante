import { Global, Module } from "@nestjs/common";
import { CheckIDService } from "./checkID.service";
import { MesaModule } from "src/mesa/mesa.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mesa } from "src/mesa/entities/mesa.entity";

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Mesa]), MesaModule],
    controllers: [],
    providers: [CheckIDService],
    exports: [CheckIDService]

})
export class CheckIDModule {}