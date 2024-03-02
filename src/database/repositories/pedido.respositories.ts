import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from '../PrismaService';

@Injectable()
export class PedidoRepository {
    constructor(private readonly PrismaService: PrismaService) {}

    create(createDto: Prisma.PedidoCreateArgs) {
        return this.PrismaService.pedido.create(createDto);
    }

    findFirst(findFirstDto: Prisma.PedidoFindFirstArgs) {
        return this.PrismaService.pedido.findFirst(findFirstDto);
    }

    findAll() {
        return this.PrismaService.pedido.findMany();
    }

    update(updateDto: Prisma.PedidoUpdateArgs) {
        return this.PrismaService.pedido.update(updateDto);
    }

    delete(deleteDto: Prisma.PedidoDeleteArgs) {
        return this.PrismaService.pedido.delete(deleteDto)
    }   
}

