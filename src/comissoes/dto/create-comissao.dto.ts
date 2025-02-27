import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateComissaoDto {

    @IsNumber()
    funcionarioId: number;

    @IsNumber()
    comissaoValor: number;

    @IsString()
    comissaoSituacao: string;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsOptional()
    @IsDateString()
    dataAtualizacao?: Date;

}