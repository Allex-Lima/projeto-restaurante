import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { Repository } from "typeorm";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { ProdutoType } from "src/types/produto.type";


@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto) 
        private readonly produtoRepository: Repository<Produto>
    ) { }

    async createProduto(createProduto: CreateProdutoDto): Promise<ProdutoType> {
        try {
            const createProd = this.produtoRepository.create(createProduto);

            const produto = await this.produtoRepository.save(createProd);

            return {
                message: 'Produto cadastrado com sucesso.',
                produto
            }

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findAllProdutos(): Promise<Produto []> {
        return await this.produtoRepository.find();
    }
}