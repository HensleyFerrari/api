import { Module } from '@nestjs/common';
import { PedidoModule } from './pedido/pedido.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PedidoModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
