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

  async findOne(codigo: number) {
    return await this.prisma.pedido.findUnique({
      where: {
        codigo
      }
    });
  }

  async update(
    codigo: number,
    updatePedidoDto: UpdatePedidoDto
  ) {
    const {
    sala,
    procedimento,
    doutor,
    paciente,
    hospital,
    data_cirurgia,
    observacao
    } = updatePedidoDto;

    return this.prisma.pedido.update({
      where : {
        codigo,
      },
      data : {
        sala,
        procedimento,
        doutor,
        paciente,
        hospital,
        data_cirurgia,
        observacao,
      }
    });
  }

  async remove(codigo: number) {
    await this.prisma.pedido.delete({
      where: {
        codigo
      }
    });

    return null;
  }
}
