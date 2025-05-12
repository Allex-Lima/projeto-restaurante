import { Body, Controller, Get, Post } from "@nestjs/common";
import { vendaService } from "./venda.service";
import { CreateVendaDto } from "./dto/create-venda.dto";
import { VendaType } from "src/types/venda.type";
import { Venda } from "./entities/venda.entity";


@Controller('venda')
export class VendaController {
    constructor(
        private readonly vendaService: vendaService
    ) { }

    @Post()
    async create(@Body() createVendaDto: CreateVendaDto) {
        return await this.vendaService.createVendaService(createVendaDto);
    }

    @Get()
    async findAll() {
        return await this.vendaService.findAllVendaService();
    }
}