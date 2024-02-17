import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  async findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':codigo')
  async findOne(@Param('codigo') id: string) {
    return this.pedidoService.findOne(+id);
  }

  @Patch(':codigo')
  async update(@Param('codigo') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(+id, updatePedidoDto);
  }

  @Delete(':codigo')
  async remove(@Param('codigo') id: string) {
    return this.pedidoService.remove(+id);
  }
}
