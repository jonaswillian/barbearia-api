import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity("agendamentos")
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, name: "username" })
  nome: string;

  @Column({ length: 255, name: "password" })
  data: string;

  @Column({ length: 255, name: "password" })
  servico: string;
}