import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { Agendamento } from './agendamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento])],
  providers: [AgendamentoService],
  controllers: [AgendamentoController],
})
export class AgendamentoModule {}