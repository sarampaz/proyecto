import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';  // Si tienes un módulo de usuarios
import { JwtService } from '@nestjs/jwt';
import { SupabaseModule } from '../supabase/supabase.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,  // Usa una clave secreta segura
      signOptions: { expiresIn: '60m' },  // El JWT expirará en 1 hora
        
    }),
    UsersModule,  // Si tienes un módulo de usuarios
    SupabaseModule,
    
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
