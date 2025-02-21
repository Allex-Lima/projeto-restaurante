import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('vendas')
export class Venda {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    funcionarioId: number;

    @Column()
    mesaId: number;

    @Column()
    vendaCodigo: string;

    @Column()
    vendaValor: number;

    @Column()
    vendaTotal: number;

    @Column()
    vendaDesconto: number;

    @Column({ default: 'A' })
    vendaSituacao: string;

    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dataCriacao: Date;

    @UpdateDateColumn( { type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dataAtualizacao: Date;
}