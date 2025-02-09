import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';  // Importa el módulo de autenticación
import { UsersModule } from './users/users.module'; // Importa el módulo de usuarios
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), 
    UsersModule, 
    AuthModule],


  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
