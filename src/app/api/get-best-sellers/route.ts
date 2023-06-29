import { NextResponse } from 'next/server';
import { supabase } from '@/supabase-client';
export async function GET() {
  try {
    const result = await supabase
      .from('collection')
      .select('metadata, type')
      .eq('name', 'best_sellers')
      .eq('is_published', true);
    if (result.status !== 200) {
      throw new Error('Failed to fetch Best Sellers');
    }
    console.log('result', result);
    const transformed = {
      data: result?.data?.[0].metadata,
      type: result?.data?.[0].type,
    };
    return NextResponse.json(transformed);
  } catch (error) {
    throw error;
  }
}
