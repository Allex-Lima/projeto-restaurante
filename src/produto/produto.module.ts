import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./produto.service";
import { ProdutoController } from "./produto.controller";
import { IdCheckMiddleware } from "src/middlewares/id-check.middleware";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    controllers: [ProdutoController],
    providers: [ProdutoService],
})
export class ProdutoModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(IdCheckMiddleware).forRoutes({
            path: 'produtos/:codigo',
            method: RequestMethod.ALL,
        })
    }
}