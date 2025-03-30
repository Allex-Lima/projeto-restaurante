import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { Mesa } from "src/mesa/entities/mesa.entity";
import { Repository } from "typeorm";


@Injectable()
export class CheckIDService {
    constructor(
        @InjectRepository(Mesa)
        private readonly checkIDServiceRepository: Repository<Mesa>,
        @InjectRepository(Funcionario)
        private readonly checkIDServiceRepositoryFuncionario: Repository<Funcionario>,
    ) { }

    async idExists(paramRota: string, id: number, msn: string): Promise<void> {
        
        if (paramRota.includes('funcionario')) {
            const funcionario = await this.checkIDServiceRepositoryFuncionario.findOne({
                where: { id }
            });
            
            if (!funcionario) {
                throw new NotFoundException(msn);
            }
        }

        if (paramRota.includes('mesa')) {
            const mesa = await this.checkIDServiceRepository.findOne({
                where: { id }
            });

            if (!mesa) {
                throw new NotFoundException(msn);
            }
        }
    }
}