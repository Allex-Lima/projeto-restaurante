import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMesaDto {

    @IsString()
    @IsNotEmpty()
    mesaCodigo: string;

    @IsString()
    mesaSituacao: string;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsOptional()
    @IsDateString()
    dataAtualizacao?: Date;
    
}
