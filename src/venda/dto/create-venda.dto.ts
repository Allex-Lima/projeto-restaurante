import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVendaDto {

    @IsNumber()
    funcionarioId: number;

    @IsNumber()
    mesaId: number;

    @IsNumber()
    vendaCodigo: number;

    @IsNumber()
    vendaValor: number;

    @IsNumber()
    vendaTotal: number;

    @IsNumber()
    vendaDesconto: number;

    @IsString()
    vendaSituacao: string;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsOptional()
    @IsDateString()
    dataAtualizacao?: Date;
}