import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { Mesa } from "src/mesa/entities/mesa.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Repository } from "typeorm";


@Injectable()
export class CheckIDService {
    constructor(
        @InjectRepository(Mesa)
        private readonly checkIDServiceRepositoryMesa: Repository<Mesa>,
        @InjectRepository(Funcionario)
        private readonly checkIDServiceRepositoryFuncionario: Repository<Funcionario>,
        @InjectRepository(Produto)
        private readonly checkIdServiceRepositoryProduto: Repository<Produto>,
    ) { }

    async idExists(paramRota: string, codigo: number, msn: string): Promise<void> {
        
        if (paramRota.includes('funcionario')) {
            const funcionario = await this.checkIDServiceRepositoryFuncionario.findOne({
                where: { codigo }
            });
            
            if (!funcionario) {
                throw new NotFoundException(msn);
            }
        }

        if (paramRota.includes('mesa')) {
            const mesa = await this.checkIDServiceRepositoryMesa.findOne({
                where: { codigo }
            });
            
            if (!mesa) {
                throw new NotFoundException(msn);
            }
        }

        if (paramRota.includes('produtos')) {
            const produto = await this.checkIdServiceRepositoryProduto.findOne({
                where: { codigo }
            });
            
            if (!produto) {
                throw new NotFoundException(msn);
            }
        }
    }
}