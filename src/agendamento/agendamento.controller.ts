import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { Agendamento } from './agendamento.entity';
import { AgendamentoDto } from './agendamento.dto';

@Controller("agendamentos")
export class AgendamentoController{
    constructor(private readonly AgendamentoService: AgendamentoService) {}

    @Get()
    mensagem_inicial():string{
        return this.AgendamentoService.mensagem_inicial()
    }

    @Get("listar")
    listar_agendamentos(): Promise<Agendamento[]>{
        return this.AgendamentoService.listar_usuarios()
    }

    @Get("listar/:id")
    listar_agendamento(@Param('id') id:number){
        return this.AgendamentoService.listar_usuario(id)
    }

    @Delete("deletar/:id")
    deletar_agendamento(@Param('id') id:number){
        return this.AgendamentoService.deletar_usuario(id)
    }

    @Post("cadastrar")
    async cadastrar_agendamento(@Body() dados:AgendamentoDto){
        return this.AgendamentoService.cadastrar_usuario(dados)
    }

    @Put("editar/:id")
    async editar_agendamento(@Param('id') id:number, @Body() dados: AgendamentoDto){
        return this.AgendamentoService.editar_usuario(id, dados)
    }


    

}
