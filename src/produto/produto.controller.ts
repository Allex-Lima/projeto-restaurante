import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";

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
}