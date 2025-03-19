import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Mesa } from "src/mesa/entities/mesa.entity";
import { Repository } from "typeorm";


@Injectable()
export class CheckIDService {
    constructor(
        @InjectRepository(Mesa)
        private readonly checkIDServiceRepository: Repository<Mesa>,
    ) { }

    async idExists(id: number, msn: string): Promise<void> {
        const mesa = await this.checkIDServiceRepository.findOne({where: { id }});
        
        if (!mesa) {
        throw new NotFoundException(msn);
      }
    }
}