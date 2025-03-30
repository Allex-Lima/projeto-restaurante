import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { FuncionarioService } from "./funcionario.service";
import { CreateFuncionarioDto } from "./dto/create-funcionario.dto";
import { UpdateFuncionarioDto } from "./dto/update-funcionario.dto";
import { Request } from 'express';

@Controller('funcionario')
export class FuncionarioController {
    constructor(private readonly funcionarioService: FuncionarioService) {}

    @Post()
    async create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
        return this.funcionarioService.createServiceFuncionario(createFuncionarioDto);
    }

    @Get()
    async findAll() {
        return await this.funcionarioService.findAllFuncionario();
    }

    @Get(':funcionarioCodigo')
    async findOne(
        @Req() req: Request,
        @Param('funcionarioCodigo', ParseIntPipe) funcionarioCodigo: number
    ) {
        return this.funcionarioService.findOneFuncionario(req, funcionarioCodigo);
    }

    @Patch(':funcionarioCodigo')
    async update(
        @Req() req: Request,
        @Param('FuncionarioCodigo') funcionarioCodigo: string,
        @Body() body: UpdateFuncionarioDto
    ) {
        return '';
    }

    @Delete(':funcionarioCodigo')
    async remove(
        @Req() req: Request,
        @Param(':funcionarioCodigo') funcionarioCodigo: string) {
        return '';
    }
}