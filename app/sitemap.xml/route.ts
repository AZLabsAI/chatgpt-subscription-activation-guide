import { NextResponse } from 'next/server';
import { buildSitemapXml } from '../lib/seo';

export function GET() {
  return new NextResponse(buildSitemapXml(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
