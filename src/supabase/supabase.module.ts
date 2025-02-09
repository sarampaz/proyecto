import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService], // Exporta el servicio para que otros módulos lo usen
})
export class SupabaseModule {}