import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('comissoes')
export class Comissao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    funcionarioId: number;

    @Column()
    comissaoValor: number;

    @Column()
    comissaoSituacao: string;

    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    dataCriacao: Date;

    @UpdateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    dataAtualizacao: Date;

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.comissoes, { onDelete: 'CASCADE' })
    funcionario: Funcionario;

}