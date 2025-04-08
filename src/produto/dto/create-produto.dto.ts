import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateProdutoDto {

    @IsNumber()
    codigo: number;

    @IsString()
    produtoNome: string;

    @IsNumber()
    produtoValor: number;

    @IsString()
    produtoSituacao: string;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsOptional()
    @IsDateString()
    dataAtualizacao?: Date;
}