import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('produtos')
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    produtoCodigo: string;

    @Column()
    produtoNome: string;

    @Column()
    produtoValor: number;

    @Column()
    produtoSituacao: string;

    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dataCriacao: Date;

    @UpdateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dataAtualizacao: Date;
}