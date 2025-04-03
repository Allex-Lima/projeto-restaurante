import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mesa } from './entities/mesa.entity';
import { Repository } from 'typeorm';
import { MesaType } from 'src/types/mesa.type';
import { CheckIDService } from 'src/util/checkID/checkID.service';

@Injectable()
export class MesaService {
  constructor(
    @InjectRepository(Mesa) 
    private readonly mesaServiceRepository: Repository<Mesa>,
    private readonly checkIDService: CheckIDService,
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

  async findOneMesa(req: any, codigo: number): Promise<MesaType> {
    try {

      const paramRota = req.path;
      
      await this.checkIDService.idExists(
        paramRota,
        codigo,
        `- Mesa com ID (${codigo}) não encontrada.`
      );

      const mesa = await this.mesaServiceRepository.findOne({ where: { codigo } });

      return {
        mesa
      };

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateMesa(req: any, codigo: number, updateMesaDto: UpdateMesaDto) {
    try {
      const paramRota = req.path;

      await this.checkIDService.idExists(
        paramRota,
        codigo,
        `Mesa ID (${codigo}) não encontrada, não pode ser atualizada.`
      );
      
      await this.mesaServiceRepository.update({ codigo }, updateMesaDto);
      
      const mesaAtualizada = await this.mesaServiceRepository.findOne({ where: { codigo } });

      return {
        message: 'Mesa atualizada',
        mesaAtualizada
      }

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async removeMesa(req: any, codigo: number): Promise<MesaType> {
    try {
      const paramRota = req.path;

      await this.checkIDService.idExists(
        paramRota,
        codigo,
        `Mesa com ID (${codigo}) não existe, não pode ser deletada.`
      );

      const mesa = await this.mesaServiceRepository.findOne({ where: { codigo } });

      await this.mesaServiceRepository.remove(mesa);

      return {
        message: 'Mesa DELETADA com sucesso.',
      }
      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
