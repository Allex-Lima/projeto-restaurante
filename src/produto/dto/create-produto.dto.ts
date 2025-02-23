import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateProdutoDto {

    @IsString()
    produtoCodigo: string;

    @IsString()
    produtoNome: string;

    @IsNumber()
    produtoValor: number;

    @IsString()
    produtoSituacao: string;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsDateString()
    @IsDateString()
    dataAtualizacao?: Date;
}