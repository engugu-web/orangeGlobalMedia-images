import { readdir, readFile, mkdir, writeFile, cp } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const names = (await readdir('images', { withFileTypes: true }))
  .filter((entry) => entry.isFile() && /\.(webp|png|jpe?g|avif)$/i.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
if (!names.length || names.length > 48) throw new Error('images/ must contain 1–48 supported images.');
await mkdir('dist/images', { recursive: true });
const images = [];
for (const name of names) {
  const bytes = await readFile(`images/${name}`);
  if (!bytes.length || bytes.length > 8 * 1024 * 1024) throw new Error(`${name}: image must be nonempty and smaller than 8 MB.`);
  const hash = createHash('sha256').update(bytes).digest('hex');
  const extension = name.slice(name.lastIndexOf('.')).toLowerCase();
  const src = `images/${hash}${extension}`;
  await writeFile(`dist/${src}`, bytes);
  images.push({ src });
}
await writeFile('dist/manifest.json', JSON.stringify({ version: 1, images }, null, 2) + '\n');
await writeFile('dist/.nojekyll', '');
await cp('README.md', 'dist/README.txt');
console.log(`Published carousel manifest with ${images.length} images.`);
