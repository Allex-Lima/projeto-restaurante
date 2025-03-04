import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mesa } from './entities/mesa.entity';
import { Repository } from 'typeorm';
import { MesaType } from 'src/types/mesa.type';

@Injectable()
export class MesaService {
  constructor(
    @InjectRepository(Mesa) 
    private readonly mesaService: Repository<Mesa>,
  ) {}

  async createServiceMesa(createMesaDto: CreateMesaDto): Promise<MesaType> {
    try {
      const mesa = this.mesaService.create(createMesaDto);

      await this.mesaService.save(mesa);

      return {
        message: 'Mesa criada com sucesso.',
      };

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return `This action returns all mesa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mesa`;
  }

  update(id: number, updateMesaDto: UpdateMesaDto) {
    return `This action updates a #${id} mesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} mesa`;
  }
}
