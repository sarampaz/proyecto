import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL='https://tlnafxzdfuafsbkdytfy.supabase.co',
      process.env.SUPABASE_ANON_KEY='teyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsbmFmeHpkZnVhZnNia2R5dGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5ODk0NzcsImV4cCI6MjA1NDU2NTQ3N30.umQF5J5y96Us0dL-t8fMCOq8kzzJ_zC0SjBZN5VFYt4',
    );
  }

  async signIn(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }
}
