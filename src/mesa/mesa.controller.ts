import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Req } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { Mesa } from './entities/mesa.entity';
import { Request } from 'express';

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
  async findOne(@Req() req: Request, @Param('mesaCodigo', ParseIntPipe) mesaCodigo: number) {
    return await this.mesaService.findOneMesa(req, mesaCodigo);
  }

  @Patch(':mesaCodigo')
  async update(@Req() req: Request, @Param('mesaCodigo', ParseIntPipe) mesaCodigo: number, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.updateMesa(req, mesaCodigo, updateMesaDto);
  }

  @Delete(':mesaCodigo')
  remove(@Req() req: Request, @Param('mesaCodigo', ParseIntPipe) mesaCodigo: number) {
    return this.mesaService.removeMesa(req, mesaCodigo);
  }
}
