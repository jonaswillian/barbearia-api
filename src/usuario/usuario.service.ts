import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioDto } from './usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private BaciaDeUsuarios: Repository<Usuario>,
  ) {}
  
  mensagem_inicial():string{
    return "Bem vindo ao módulo de usuários";
  }

  listar_usuarios(): Promise<Usuario[]> {
    return this.BaciaDeUsuarios.find();
  }

  listar_usuario(id: number): Promise<Usuario | null> {
    return this.BaciaDeUsuarios.findOneBy({ id });
  }

  async deletar_usuario(id: number): Promise<void> {
    await this.BaciaDeUsuarios.delete(id);
  }

  cadastrar_usuario(x:UsuarioDto){
    var u = new Usuario()
    u.username = x.username
    u.password = x.password
    return this.BaciaDeUsuarios.save(u)

    .then((resultado)=>{
      return "Usuário salvo com sucesso!"
    })

    .catch((erro)=>{
      return "Erro ao salvar usuário!"
    })
  }

  async editar_usuario(id:number, z:UsuarioDto){
    var u2 = await this.listar_usuario(id)
    if (u2 != null){
      u2.username = z.username
      u2.password = z.password      
      return this.BaciaDeUsuarios.save(u2)
    }
    
    

    
  }
}