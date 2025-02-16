import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Funcionario } from "./entities/funcionario.entity";
import { Repository } from "typeorm";

@Injectable()
export class FuncionarioService {
    constructor(
        @InjectRepository(Funcionario)
        private readonly funcionarioRepository: Repository<Funcionario>,
    ) {}

    createFuncionario() {
        return 'Está ação adiciona um novo funcionário.';
    }

    findAllFincionario() {
        return 'Está ação retorna todos os funcionários.';
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