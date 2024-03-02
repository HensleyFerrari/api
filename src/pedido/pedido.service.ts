import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PedidoRepository } from '../database/repositories/pedido.respositories';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(private readonly pedidoRepo: PedidoRepository) {}

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

    const roomTaken = await this.pedidoRepo.findFirst({
      where: {
        sala,
        data_cirurgia
      }
    })

    if (roomTaken) {
      throw new ConflictException(
        `Essa sala já está reservada para essa data.`
      )
    }

    return await this.pedidoRepo.create({
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
    return await this.pedidoRepo.findAll();
  }

  async findOne(codigo: number) {
    return await this.pedidoRepo.findFirst({
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

    const updatePedidoNotTaken = await this.pedidoRepo.findFirst({
      where: {
        sala
      }
    })

    if(updatePedidoNotTaken) {
      throw new NotFoundException('Pedido de cirurgia não encontrado.')
    }

    return this.pedidoRepo.update({
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
    await this.pedidoRepo.delete({
      where: {
        codigo
      }
    });

    return null;
  }
}
