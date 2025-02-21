import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Venda } from "./entities/venda.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class vendaService {
    constructor(
        @InjectRepository(Venda)
         private readonly vendaRepository: Repository<Venda>
    ) {}
    
}