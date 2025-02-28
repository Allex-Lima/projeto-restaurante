import { Produto } from "src/produto/entities/produto.entity";
import { Venda } from "src/venda/entities/venda.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('itemVenda')
export class ItemVenda {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    produtoId: number;

    @Column()
    vendaId: number;

    @Column()
    itemValor: number;

    @Column()
    itemQuantidade: number;

    @Column()
    itemTotal: number;

    @CreateDateColumn( { type: 'date', default: () => 'CURRENT_TIMESTAMP' } )
    dataCriacao: Date;

    @UpdateDateColumn( { type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dataAtualizacao: Date;

    @ManyToOne(() => Produto, (produto) => produto.itensVenda, { onDelete: 'CASCADE'})
    produto: Produto;

    @ManyToOne(() => Venda, (venda) => venda.itensVenda)
    venda: Venda;
}