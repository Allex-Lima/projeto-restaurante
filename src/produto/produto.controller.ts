import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { Request } from "express";

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
}