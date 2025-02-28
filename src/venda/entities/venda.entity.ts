import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { ItemVenda } from "src/item-venda/entities/itemVenda.entity";
import { Mesa } from "src/mesa/entities/mesa.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.vendas, { onDelete: "CASCADE" })
    funcionario: Funcionario;

    @ManyToOne(() => Mesa, (mesa) => mesa.vendas, { onDelete: 'CASCADE' })
    mesa: Mesa;

    @OneToMany(() => ItemVenda, (itemVenda) => itemVenda.venda)
    itensVenda: ItemVenda[];
}