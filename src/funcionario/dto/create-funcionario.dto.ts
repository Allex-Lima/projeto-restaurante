import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";


export class CreateFuncionarioDto {
    
    @IsNumber()
    @IsNotEmpty()
    funcionarioCodigo: number;

    @IsString()
    @MinLength(3, {message: 'Nome deve ter pelo menos 3 caracteres.'})
    funcionarioNome: string;

    @IsString()
    funcionarioSituacao: string;

    @IsNumber()
    funcionarioComissao: number;

    @IsString()
    funcionarioCargo: string;

    @IsOptional()
    @IsDateString()
    dataCriacao?: Date;

    @IsOptional()
    @IsDateString()
    dataAtualizacao?: Date;
}