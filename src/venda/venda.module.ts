import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Venda } from "./entities/venda.entity";
import { vendaService } from "./venda.service";
import { MesaController } from "src/mesa/mesa.controller";
import { VendaController } from "./venda.controller";
import { IdCheckMiddleware } from "src/middlewares/id-check.middleware";


@Module({
    imports: [TypeOrmModule.forFeature([Venda])],
    controllers: [VendaController],
    providers: [vendaService],

})
export class VendaModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(IdCheckMiddleware).forRoutes({
            path:'venda/:codigo',
            method: RequestMethod.ALL,
        })
    }
}