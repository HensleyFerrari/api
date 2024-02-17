import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const {
    sala,
    procedimento,
    doutor,
    paciente,
    hospital,
    data_cirurgia,
    observacao
    } = createPedidoDto;

    return await this.prisma.pedido.create({
      data: {
        sala,
        procedimento,
        doutor,
        paciente,
        hospital,
        data_cirurgia,
        observacao,
      },
    });
  }

  async findAll() {
    return await this.prisma.pedido.findMany({
      orderBy: {
        data_criacao: 'desc',
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
