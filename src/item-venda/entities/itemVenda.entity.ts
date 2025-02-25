import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}