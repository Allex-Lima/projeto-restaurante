import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMesaDto {

    @IsNumber()
    @IsNotEmpty()
    codigo: number;

    @IsString()
    mesaSituacao: string;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsOptional()
    @IsDateString()
    dataAtualizacao?: Date;
    
}
