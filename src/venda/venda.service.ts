import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Venda } from "./entities/venda.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateVendaDto } from "./dto/create-venda.dto";
import { VendaType } from "src/types/venda.type";


@Injectable()
export class vendaService {
    constructor(
        @InjectRepository(Venda)
         private readonly vendaRepository: Repository<Venda>
    ) {}

    async createVendaService(createVenda: CreateVendaDto): Promise<VendaType> {
        try {
            const createV = this.vendaRepository.create(createVenda);

            const venda = await this.vendaRepository.save(createV);

            return {
                message: 'Venda cadastrada com sucesso.',
                venda,
            }

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    
}