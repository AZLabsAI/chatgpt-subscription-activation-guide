import { NextResponse } from 'next/server';
import { buildRobotsTxt } from '../lib/seo';

export function GET() {
  return new NextResponse(buildRobotsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
