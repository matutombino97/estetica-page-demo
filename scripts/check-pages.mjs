import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pages, aliases, missingPage } from '../src/routes.js';
const titles = new Set();
for (const [route,page] of Object.entries(pages)) {
 const markup = page.view();
 assert.equal((markup.match(/<h1[ >]/g)||[]).length,1,route+' must have one H1');
 assert(!titles.has(page.title),'duplicate title: '+route);titles.add(page.title);
 assert(!/ritual/i.test(markup),'old visible terminology: '+route);
 const file = route==='/'?'dist/index.html':'dist'+route+'/index.html';
 const html = await readFile(file,'utf8');
 assert(html.includes(`<title>${page.title} | Mímara</title>`),'title mismatch: '+route);
 assert(html.includes(markup),'missing prerendered page: '+route);
 assert(html.includes('noindex,follow'),'demo must stay noindex');
 for (const match of markup.matchAll(/href="(\/[^"]*)"/g)) {
  const url = new URL(match[1].replaceAll('&amp;','&'),'https://local.test');
  assert(pages[url.pathname]||aliases[url.pathname],`${route}: missing target ${url.pathname}`);
  if(url.hash){assert(pages[url.pathname].view().includes(`id="${url.hash.slice(1)}"`),'missing anchor '+match[1]);}
 }
}
assert(!pages['/'].view().includes('id="finder"'),'catalog should have its own page');
assert(pages['/tratamientos'].view().includes('id="finder"'));
assert(pages['/bonos-y-regalos'].view().includes('id="gift-form"'));
assert(pages['/contacto'].view().includes('id="preguntas"'));
assert((await readFile('dist/404.html','utf8')).includes(missingPage.title));
for(const [alias,target] of Object.entries(aliases))assert((await readFile('dist'+alias+'/index.html','utf8')).includes(`url=${target}`));
console.log(`OK: ${titles.size} distinct pages, valid internal links, heading hierarchy, prerendered content, redirects and 404.`);
