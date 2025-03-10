import {
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { MesaService } from './mesa.service';
import { MesaController } from './mesa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mesa } from './entities/mesa.entity';
import { IdCheckMiddleware } from 'src/middlewares/id-check.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Mesa])],
  controllers: [MesaController],
  providers: [MesaService],
})
export class MesaModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdCheckMiddleware).forRoutes({
      path: 'mesa/:codigo',
      method: RequestMethod.ALL,
    });
  }
}
