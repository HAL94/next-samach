import { NextResponse } from 'next/server';
import { supabase } from '@/supabase-client';
export async function GET() {
  try {
    return NextResponse.json(await supabase.from('banner-slides').select('*'));
  } catch (error) {
    throw error;
  }
}
