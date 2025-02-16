import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MesaModule } from './mesa/mesa.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [
    DatabaseModule,
    FuncionarioModule,
    MesaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
