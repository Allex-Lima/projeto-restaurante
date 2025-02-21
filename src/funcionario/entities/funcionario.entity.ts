import { Venda } from "src/venda/entities/venda.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('funcionarios')
export class Funcionario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    funcionarioCodigo: string;

    @Column()
    funcionarioNome: string;

    @Column({ default: 'A'})
    funcionarioSituacao: string;

    @Column()
    funcionarioComissao: number;

    @Column()
    funcionarioCargo: string;

    @CreateDateColumn( { type: 'date', default: () => 'CURRENT_TIMESTAMP' } )
    dataCriacao: Date;

    @UpdateDateColumn( { type: 'date', default: () => 'CURRENT_TIMESTAMP' } )
    dateAtualizacao: Date;

}