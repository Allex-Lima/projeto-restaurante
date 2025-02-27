import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comissao } from "./entities/comissao.entity";
import { Repository } from "typeorm";


@Injectable()
export class ComissaoService {
    constructor(
        @InjectRepository(Comissao)
        private readonly comissaoService: Repository<Comissao>
    ) { }
}