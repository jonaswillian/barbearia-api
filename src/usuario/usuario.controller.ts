import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { UsuarioDto } from './usuario.dto';

@Controller("usuarios")
export class UsuarioController{
    constructor(private readonly UsuarioService: UsuarioService) {}

    @Get()
    mensagem_inicial():string{
        return this.UsuarioService.mensagem_inicial()
    }

    @Get("listar")
    listar_usuarios(): Promise<Usuario[]>{
        return this.UsuarioService.listar_usuarios()
    }

    @Get("listar/:id")
    listar_usuario(@Param('id') id:number){
        return this.UsuarioService.listar_usuario(id)
    }

    @Delete("deletar/:id")
    deletar_usuario(@Param('id') id:number){
        return this.UsuarioService.deletar_usuario(id)
    }

    @Post("cadastrar")
    async cadastrar_usuario(@Body() dados:UsuarioDto){
        return this.UsuarioService.cadastrar_usuario(dados)
    }

    @Put("editar/:id")
    async editar_usuario(@Param('id') id:number, @Body() dados: UsuarioDto){
        return this.UsuarioService.editar_usuario(id, dados)
    }


    

}
