import { IsDateString, IsNumber, IsOptional } from "class-validator";


export class CreateItemVendaDto {

    @IsNumber()
    produtoId: number;

    @IsNumber()
    vendaId: number;

    @IsNumber()
    itemValor: number;

    @IsNumber()
    itemQuantidade: number;

    @IsNumber()
    itemTotal: number;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsOptional()
    @IsDateString()
    dataAtualizacao?: Date;

}