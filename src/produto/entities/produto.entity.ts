import { ItemVenda } from "src/item-venda/entities/itemVenda.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('produtos')
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: number;

    @Column()
    produtoNome: string;

    @Column('decimal', { precision: 10, scale: 2})
    produtoValor: number;

    @Column()
    produtoSituacao: string;

    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dataCriacao: Date;

    @UpdateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dataAtualizacao: Date;

    @OneToMany(() => ItemVenda, (itemVenda) => itemVenda.produto)
    itensVenda: ItemVenda[];
}