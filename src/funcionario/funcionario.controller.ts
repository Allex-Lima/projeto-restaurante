import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { FuncionarioService } from "./funcionario.service";
import { CreateFuncionarioDto } from "./dto/create-funcionario.dto";
import { UpdateFuncionarioDto } from "./dto/update-funcionario.dto";

@Controller('funcionario')
export class FuncionarioController {
    constructor(private readonly funcionarioService: FuncionarioService) {}

    @Post()
    async create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
        return this.funcionarioService.createServiceFuncionario(createFuncionarioDto);
    }

    @Get()
    async findAll() {
        return this.funcionarioService.findAllFincionario();
    }

    @Get(':funcionarioCodigo')
    async findOne(@Param('funcionarioCodigo') funcionarioCodigo: string) {
        return this.funcionarioService.findOneFuncionario(funcionarioCodigo);
    }

    @Patch(':funcionarioCodigo')
    async update(@Param('FuncionarioCodigo') funcionarioCodigo: string, @Body() body: UpdateFuncionarioDto) {
        return '';
    }

    @Delete(':funcionarioCodigo')
    async remove(@Param(':funcionarioCodigo') funcionarioCodigo: string) {
        return '';
    }
}