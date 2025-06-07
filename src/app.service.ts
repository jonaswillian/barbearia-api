import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World!';
  }

  getMensagem(): string{
    return 'Esta é a listagem de clientes';
  }



}
