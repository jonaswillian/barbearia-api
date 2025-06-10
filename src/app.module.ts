import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/usuario.entity';
import { Agendamento } from './agendamento/agendamento.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'barbearia-app',
      entities: [Usuario, Agendamento],
      synchronize: false,
    }),
    UsuarioModule,
    AgendamentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
