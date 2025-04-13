import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { Repository } from "typeorm";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { ProdutoType } from "src/types/produto.type";
import { Request } from "express";
import { CheckIDService } from "../util/checkID/checkID.service"


@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto) 
        private readonly produtoRepository: Repository<Produto>,
        private readonly checkIDService: CheckIDService,
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
        try {
            const produtos = await this.produtoRepository.find();

            return produtos;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findOneProduto(req: Request, codigo: number) {
        try {
            const paramRota = req.path;

            await this.checkIDService.idExists(
                paramRota,
                codigo,
                `Produto com ID (${codigo}) não encontrado.`
            );

            const produto = await this.produtoRepository.findOne({
                where: { codigo }
            })

            return produto;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}