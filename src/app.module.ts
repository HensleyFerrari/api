import { Module } from '@nestjs/common';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [PedidoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
