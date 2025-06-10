import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agendamento } from './agendamento.entity';
import { AgendamentoDto } from './agendamento.dto';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private BaciaDeAgendamentos: Repository<Agendamento>,
  ) {}
  
  mensagem_inicial():string{
    return "Bem vindo ao módulo de agendamentos";
  }

  listar_usuarios(): Promise<Agendamento[]> {
    return this.BaciaDeAgendamentos.find();
  }

  listar_usuario(id: number): Promise<Agendamento | null> {
    return this.BaciaDeAgendamentos.findOneBy({ id });
  }

  async deletar_usuario(id: number): Promise<void> {
    await this.BaciaDeAgendamentos.delete(id);
  }

  cadastrar_usuario(x:AgendamentoDto){
    var a = new Agendamento()
    a.nome = x.nome
    a.data = x.data
    a.servico = x.servico
    return this.BaciaDeAgendamentos.save(a)

    .then((resultado)=>{
      return "Agendamento salvo com sucesso!"
    })

    .catch((erro)=>{
      return "Erro ao salvar agendamento!"
    })
  }

  async editar_usuario(id:number, z:AgendamentoDto){
    var a2 = await this.listar_usuario(id)
    if (a2 != null){
      a2.nome = z.nome
      a2.data = z.data
      a2.servico = z.servico     
      return this.BaciaDeAgendamentos.save(a2)
    }
    
    

    
  }
}