import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pages, aliases, missingPage } from '../src/routes.js';
import { esc } from '../src/views.js';
const template = await readFile('dist/index.html', 'utf8');
function documentFor(page) {
 const title = esc(page.title + ' | Mímara');
 return template.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  .replace(/<main id="app">[\s\S]*?<\/main>/, `<main id="app">${page.view()}</main>`)
  .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(page.description)}`)
  .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
  .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(page.description)}`);
}
for (const [route, page] of Object.entries(pages)) {
 const dir = route === '/' ? 'dist' : 'dist' + route;
 await mkdir(dir, { recursive:true });
 await writeFile(dir + '/index.html', documentFor(page));
}
for (const [route, destination] of Object.entries(aliases)) {
 const dir = 'dist' + route;
 await mkdir(dir, { recursive:true });
 const page = pages[destination.split('#')[0]];
 await writeFile(dir + '/index.html', documentFor(page).replace('</head>', `<meta http-equiv="refresh" content="0;url=${esc(destination)}"></head>`));
}
await writeFile('dist/404.html', documentFor(missingPage));
await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n');
console.log(`Generated ${Object.keys(pages).length} static pages, ${Object.keys(aliases).length} redirects and 404. Concept demo stays noindex.`);
