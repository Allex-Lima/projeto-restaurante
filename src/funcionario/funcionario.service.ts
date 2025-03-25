import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Funcionario } from "./entities/funcionario.entity";
import { Repository } from "typeorm";
import { CreateFuncionarioDto } from "./dto/create-funcionario.dto";
import { FuncionarioType } from "src/types/funcionario.type";

@Injectable()
export class FuncionarioService {
    constructor(
        @InjectRepository(Funcionario)
        private readonly funcionarioRepository: Repository<Funcionario>,
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

    async findAllFincionario(): Promise<Funcionario []> {
        return await this.funcionarioRepository.find();
    }

    findOneFuncionario(funcionarioCodigo: string) {
        return 'Está ação retorna um único funcionário.';
    }

    updateFuncionario() {
        return 'Está ação atualiza um único funcionário.';
    }

    removeFuncionario() {
        return 'Está ação remove um único funcionário.';
    }
}