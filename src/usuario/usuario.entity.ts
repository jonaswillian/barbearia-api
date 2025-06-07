import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, name: "username" })
  username: string;

  @Column({ length: 255, name: "password" })
  password: string;
}