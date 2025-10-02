import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id: string;
  email: string;
  name: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

export type User = {
  id: string;
  email: string;
  name: string | null;
  created_at: string;
  updated_at: string;
};
