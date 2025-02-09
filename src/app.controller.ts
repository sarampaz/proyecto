import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api') // Ruta base
export class AppController {
  @Get('hello')
  getHello() {
    return { message: 'Hola desde NestJS' };
  }
}
