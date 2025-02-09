import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; // Opcional

@Module({
  providers: [UsersService],
  controllers: [UsersController], // Opcional
  exports: [UsersService], // Exporta el servicio para que otros módulos lo usen
})
export class UsersModule {}
