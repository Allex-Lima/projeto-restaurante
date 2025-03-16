import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { Mesa } from './entities/mesa.entity';

@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Post()
  async create(@Body() createMesaDto: CreateMesaDto) {
    const resultMesa = await this.mesaService.createServiceMesa(createMesaDto);
    
    return resultMesa;
  }

  @Get()
  async findAll(): Promise<Mesa[]> {
    return this.mesaService.findAllMesas();
  }

  @Get(':mesaCodigo')
  async findOne(@Param('mesaCodigo', ParseIntPipe) mesaCodigo: number) {
    return this.mesaService.findOneMesa(mesaCodigo);
  }

  @Patch(':mesaCodigo')
  async update(@Param('mesaCodigo', ParseIntPipe) mesaCodigo: number, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.updateMesa(mesaCodigo, updateMesaDto);
  }

  @Delete(':mesaCodigo')
  remove(@Param('mesaCodigo', ParseIntPipe) mesaCodigo: number) {
    return this.mesaService.removeMesa(mesaCodigo);
  }
}
