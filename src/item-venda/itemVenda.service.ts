import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ItemVenda } from "./entities/itemVenda.entity";

@Injectable()
export class ItemVendaService {
    constructor(
        @InjectRepository(ItemVenda)
        private readonly itemVendaRepository: Repository<ItemVenda>
    ) { }

    async findAllItemVenda(): Promise<ItemVenda []> {
        return await this.itemVendaRepository.find();
    }
}