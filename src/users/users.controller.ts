import { Controller, Get, Put, Body, Param, Headers } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Obtener información del usuario actual
  @Get('me')
  async getCurrentUser(@Headers('Authorization') authHeader: string) {
    const token = authHeader.replace('Bearer ', ''); // Obtener el token del header
    return this.usersService.getCurrentUser(token);
  }

  // Actualizar el perfil de usuario
  @Put('me')
  async updateUser(
    @Headers('Authorization') authHeader: string,
    @Body() userData: { nombre?: string; correo?: string },
  ) {
    const token = authHeader.replace('Bearer ', ''); // Obtener el token del header
    return this.usersService.updateUser(token, userData);
  }

  // Obtener perfil específico (si tienes una tabla de perfiles)
  @Get(':id')
  async getUserProfile(@Param('id') userId: string) {
    return this.usersService.getUserProfile(userId);
  }
}
