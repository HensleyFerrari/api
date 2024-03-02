import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./PrismaService";
import { PedidoRepository } from "./repositories/pedido.respositories";

@Global()
@Module({
    providers: [PrismaService, PedidoRepository],
    exports: [PedidoRepository]
})

export class DatabaseModule {}