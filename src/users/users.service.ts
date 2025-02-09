import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class UsersService {
  private supabase;

  constructor() {
    // Configura tu cliente de Supabase
    this.supabase = createClient(
      'https://tlnafxzdfuafsbkdytfy.supabase.co', // URL de tu instancia de Supabase
      'teyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsbmFmeHpkZnVhZnNia2R5dGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5ODk0NzcsImV4cCI6MjA1NDU2NTQ3N30.umQF5J5y96Us0dL-t8fMCOq8kzzJ_zC0SjBZN5VFYt4', // La clave anónima o la clave de servicio
    );
  }

  // Obtener el usuario actual desde Supabase (usando el token JWT)
  async getCurrentUser(token: string) {
    const { data: usuarios, error } = await this.supabase.auth.api.getUser(token);

    if (error) {
      throw new Error(error.message);
    }

    return usuarios;
  }

  // Método para actualizar los datos del usuario
  async updateUser(token: string, userData: { nombre?: string; correo?: string }) {
    const { data, error } = await this.supabase.auth.api.updateUser(token, userData);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  // Obtener el perfil de usuario (puedes crear tu propia tabla de perfiles si lo necesitas)
  async getUserProfile(userId: string) {
    const { data, error } = await this.supabase
      .from('usuarios')  // nombre de la tabla en supabase
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
