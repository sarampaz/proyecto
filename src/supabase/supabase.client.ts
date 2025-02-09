import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tlnafxzdfuafsbkdytfy.supabase.co'; // URL de Supabase
const supabaseKey = 'teyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsbmFmeHpkZnVhZnNia2R5dGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5ODk0NzcsImV4cCI6MjA1NDU2NTQ3N30.umQF5J5y96Us0dL-t8fMCOq8kzzJ_zC0SjBZN5VFYt4'; //  clave pública de Supabase

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
