import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

}