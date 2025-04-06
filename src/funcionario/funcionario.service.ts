import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Funcionario } from "./entities/funcionario.entity";
import { Repository } from "typeorm";
import { CreateFuncionarioDto } from "./dto/create-funcionario.dto";
import { FuncionarioType } from "src/types/funcionario.type";
import { CheckIDService } from "src/util/checkID/checkID.service";
import { Request } from 'express';
import { UpdateFuncionarioDto } from "./dto/update-funcionario.dto";

@Injectable()
export class FuncionarioService {
    constructor(
        @InjectRepository(Funcionario)
        private readonly funcionarioRepository: Repository<Funcionario>,
        private readonly checkIDService: CheckIDService,
    ) {}

    async createServiceFuncionario(createFuncionarioDto: CreateFuncionarioDto): Promise<FuncionarioType> {
        try {
            const createFuncionario = this.funcionarioRepository.create(createFuncionarioDto);
            
            const funcionario = await this.funcionarioRepository.save(createFuncionario);

            return {
                message: 'Funcionário criado com sucesso.',
                funcionario
            }
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findAllFuncionario(): Promise<Funcionario []> {
        try {
            const funcionarios = await this.funcionarioRepository.find();

            return funcionarios;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findOneFuncionario(req: any, codigo: number) {
        try {
            const paramRota = req.path;
            
            await this.checkIDService.idExists(
                paramRota,
                codigo,
                `Funcionário com ID (${codigo}) não encontrado.`
            );

            const funcionario = await this.funcionarioRepository.findOne({
                where: { codigo }
            });

            return funcionario;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async updateFuncionario(req: Request, codigo: number, body: UpdateFuncionarioDto): Promise<FuncionarioType> {
        try {
            const paramRota = req.path;
            
            await this.checkIDService.idExists(
                paramRota,
                codigo,
                `Funcionário com ID (${codigo}) não encontrado, não poder ser atualizado.`
            );
            const resultadoDaAtualizacao = await this.funcionarioRepository.update({ codigo }, body);
            
            if (resultadoDaAtualizacao.affected === 0) {
                throw new BadRequestException(`Nenhuma atualização realizada para o ID ${codigo}.`);
            }
            

            const funcionario = await this.funcionarioRepository.findOne( {
                 where: { codigo } 
            });
            return {
                message: 'Funcionário Atualizado',
                funcionario
            };

        } catch (error) {
            throw new BadRequestException(error.message || 'Erro ao atualizar funcionário.');
        }
    }

    removeFuncionario() {
        return 'Está ação remove um único funcionário.';
    }
}