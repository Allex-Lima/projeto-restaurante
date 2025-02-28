import { Venda } from "src/venda/entities/venda.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('mesas')
export class Mesa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mesaCodigo: string;

    @Column({default: 'A'})
    mesaSituacao: string;

    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    dataCriacao: Date;

    @UpdateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    dataAtualizacao: Date;

    @OneToMany(() => Venda, (venda) => venda.mesa)
    vendas: Venda[];

}
