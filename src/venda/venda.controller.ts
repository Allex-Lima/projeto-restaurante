import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { vendaService } from "./venda.service";
import { CreateVendaDto } from "./dto/create-venda.dto";
import { VendaType } from "src/types/venda.type";
import { Venda } from "./entities/venda.entity";
import { Request } from "express";
import { UpdateVendaDto } from "./dto/update-venda.dto";


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

    @Get(':codigo')
    async find(
        @Param('codigo', ParseIntPipe) codigo: number,
        @Req() req: Request ) {
        return this.vendaService.findVendaService(req, codigo);
    }

    @Patch(':codigo')
    async update(
        @Req() req: Request,
        @Param('codigo', ParseIntPipe) codigo: number,
        @Body() updateVendaDto: UpdateVendaDto) {
            return this.vendaService.updateVendaService(req, codigo, updateVendaDto);
    }
}