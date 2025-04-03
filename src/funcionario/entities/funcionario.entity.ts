import { Comissao } from "src/comissoes/entities/comissao.entity";
import { Venda } from "src/venda/entities/venda.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('funcionarios')
export class Funcionario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: number;

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

    @OneToMany(() => Venda, (venda) => venda.funcionario)
    vendas: Venda[];

    @OneToMany(() => Comissao, (comissao) => comissao.funcionario)
    comissoes: Comissao[];

}