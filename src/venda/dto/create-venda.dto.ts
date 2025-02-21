import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVendaDto {

    @IsNumber()
    funcionarioId: number;

    @IsNumber()
    mesaId: number;

    @IsString()
    vendaCodigo: string;

    @IsNumber()
    vendaValor: number;

    @IsNumber()
    VendaTotal: number;

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