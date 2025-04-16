import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { Request } from "express";
import { updateProdutoDto } from "./dto/update-produto.dto";

@Controller('produtos')
export class ProdutoController {
    constructor(
        private readonly produtoService: ProdutoService,
    ) {}

    @Post()
    async create(@Body() createProdutoDto: CreateProdutoDto) {
        return this.produtoService.createProduto(createProdutoDto);
    }

    @Get()
    async findAll() {
        return this.produtoService.findAllProdutos();
    }

    @Get(':codigo')
    async findOne(
        @Req() req: Request,
        @Param('codigo', ParseIntPipe) codigo: number) {
            return this.produtoService.findOneProduto(req, codigo);
    }

    @Patch(':codigo')
    async update(
        @Req() req: Request,
        @Param('codigo', ParseIntPipe) codigo: number,
        @Body() body: updateProdutoDto) {
            return await this.produtoService.updateProduto(req, codigo, body);
    }
}