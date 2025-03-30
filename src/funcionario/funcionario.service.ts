import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Funcionario } from "./entities/funcionario.entity";
import { Repository } from "typeorm";
import { CreateFuncionarioDto } from "./dto/create-funcionario.dto";
import { FuncionarioType } from "src/types/funcionario.type";
import { CheckIDService } from "src/util/checkID/checkID.service";
import { Request } from 'express';

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

    async findOneFuncionario(req: any, funcionarioCodigo: number) {
        try {
            const paramRota = req.path;
            
            await this.checkIDService.idExists(
                paramRota,
                funcionarioCodigo,
                `Funcionário com ID (${funcionarioCodigo}) não encontrado.`
            );

            const funcionario = await this.funcionarioRepository.findOne({
                where: { funcionarioCodigo }
            });

            return funcionario;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    updateFuncionario() {
        return 'Está ação atualiza um único funcionário.';
    }

    removeFuncionario() {
        return 'Está ação remove um único funcionário.';
    }
}