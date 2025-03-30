import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Funcionario } from "./entities/funcionario.entity";
import { FuncionarioController } from "./funcionario.controller";
import { FuncionarioService } from "./funcionario.service";
import { IdCheckMiddleware } from "src/middlewares/id-check.middleware";


@Module({
    imports: [TypeOrmModule.forFeature([Funcionario])],
    controllers: [FuncionarioController],
    providers: [FuncionarioService],
})
export class FuncionarioModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(IdCheckMiddleware).forRoutes({
            path:'funcionario/:codigo',
            method: RequestMethod.ALL,
        })
    }
}