import { Body, Controller, Post } from "@nestjs/common";
import { vendaService } from "./venda.service";
import { CreateVendaDto } from "./dto/create-venda.dto";


@Controller('venda')
export class VendaController {
    constructor(
        private readonly vendaService: vendaService
    ) { }

    @Post()
    async create(@Body() createVendaDto: CreateVendaDto) {
        return await this.vendaService.createVendaService(createVendaDto);
    }
}