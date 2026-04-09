import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
let failed = false;

function check(condition, message) {
  if (condition) {
    console.log(`✓ ${message}`);
  } else {
    failed = true;
    console.error(`✗ ${message}`);
  }
}

function read(path) {
  return readFileSync(join(root, path), 'utf8');
}

for (const file of [
  'app/lib/seo.ts',
  'app/lib/content.ts',
  'app/components/JsonLd.tsx',
  'app/robots.txt/route.ts',
  'app/sitemap.xml/route.ts',
  'app/opengraph-image.tsx',
  'app/twitter-image.tsx',
]) {
  check(existsSync(join(root, file)), `${file} exists`);
}

const layout = read('app/layout.tsx');
check(layout.includes('defaultMetadata'), 'layout uses shared metadata');
const page = read('app/page.tsx');
check(page.includes('buildHowToSchema'), 'page emits HowTo schema');
check(page.includes('buildFaqSchema'), 'page emits FAQ schema');

if (failed) process.exit(1);
console.log('SEO checks passed.');
