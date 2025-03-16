import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
    private readonly mesaServiceRepository: Repository<Mesa>,
  ) {}

  async createServiceMesa(createMesaDto: CreateMesaDto): Promise<MesaType> {
    try {
      const mesa = this.mesaServiceRepository.create(createMesaDto);

      await this.mesaServiceRepository.save(mesa);

      return {
        message: 'Mesa criada com sucesso.',
      };

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAllMesas(): Promise<Mesa[]> {
    try{
      const mesas = await this.mesaServiceRepository.find();

      return mesas;
    } catch(error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOneMesa(mesaCodigo: number): Promise<MesaType> {
    try {
      const mesa = await this.mesaServiceRepository.findOne({ where: { mesaCodigo } });

      if (!mesa) {
        throw new NotFoundException(`Mesa (${mesaCodigo}) não encontrado.`);
      }

      return {
        mesa
      };

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateMesa(mesaCodigo: number, updateMesaDto: UpdateMesaDto) {
    try {
      const mesa = await this.mesaServiceRepository.findOne({ where: {mesaCodigo } });

      if (!mesa) {
        throw new NotFoundException(`Mesa (${mesaCodigo}) não encontrada.`);
      }
      
      await this.mesaServiceRepository.update(mesaCodigo, updateMesaDto);

      const mesaAtualizada = await this.mesaServiceRepository.findOne({ where: { mesaCodigo } });

      return {
        message: 'Mesa atualizada',
        mesaAtualizada
      }

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async removeMesa(mesaCodigo: number): Promise<MesaType> {
    try {
      const mesa = await this.mesaServiceRepository.findOne({ where: { mesaCodigo } });

      if (!mesa) {
        throw new NotFoundException(`Mesa ${mesaCodigo} não encontrada.`);
      }

      await this.mesaServiceRepository.remove(mesa);

      return {
        message: 'Mesa DELETADA com sucesso.',
      }
      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
