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

  @Get(':codigo')
  async findOne(@Param('codigo', ParseIntPipe) codigo: number) {
    return this.mesaService.findOneMesa(codigo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.update(+id, updateMesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesaService.remove(+id);
  }
}
