import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Venda } from "./entities/venda.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateVendaDto } from "./dto/create-venda.dto";
import { VendaType } from "src/types/venda.type";
import { Request } from "express";
import { CheckIDService } from "src/util/checkID/checkID.service";
import { UpdateVendaDto } from "./dto/update-venda.dto";


@Injectable()
export class vendaService {
    constructor(
        @InjectRepository(Venda)
         private readonly vendaRepository: Repository<Venda>,
         private readonly checkIDService: CheckIDService,
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

    async findAllVendaService(): Promise<Venda []> {
        try {
            const vendas = await this.vendaRepository.find();
            console.log(vendas);
            

            return vendas;
            
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findVendaService(req: Request, codigo: number) {
        try {
            const paramRota = req.path;

            await this.checkIDService.idExists(
                paramRota,
                codigo,
                `Produto com ID (${codigo}) não encontrado.`
            );

            const vendaCodigo = codigo;

            const venda = await this.vendaRepository.findOne({
                where: { vendaCodigo }
            });

            return venda;

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async updateVendaService(req: Request, vendaCodigo: number, updateVendaDto: UpdateVendaDto): Promise<VendaType> {
        try {
            const paramRota = req.path;

            await this.checkIDService.idExists(
                paramRota,
                vendaCodigo,
                `Venda não atualizada.`,
            );

            const vendaAtualizada = await this.vendaRepository.update({ vendaCodigo }, updateVendaDto);

            if (vendaAtualizada.affected === 0) {
                throw new BadRequestException(`Nenhuma atualização foi realizada no ID (${vendaCodigo})`)
            }

            const venda = await this.vendaRepository.findOne(
                { where: {vendaCodigo } }
            );

            return {
                message: 'Atualizada com sucesso.',
                venda,
            }
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    
}