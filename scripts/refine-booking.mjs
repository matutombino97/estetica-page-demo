import fs from 'node:fs';
for(const file of ['src/main.js','src/views.js','src/site.js']) {
 let s=fs.readFileSync(file,'utf8').replaceAll('rituales','tratamientos').replaceAll('Rituales','Tratamientos').replaceAll('ritual','tratamiento').replaceAll('Ritual','Tratamiento').replaceAll('RITUAL','CUIDADO');
 if(file==='src/main.js') {
 s=s.replace('services, config, money','services, config, money, photo');
 s=s.replace('<p class="eyebrow">TU PRÓXIMA PAUSA</p><h2 id="modal-title">Hagámosle <em>lugar.</em></h2><p>Prepará tu solicitud. El horario se acuerda después con el centro.</p>',`<div class="booking-header"><div><p class="eyebrow">MÍMARA · ESTÉTICA & BIENESTAR</p><h2 id="modal-title">Tu piel.<br><em>Tu momento.</em></h2><p>Elegí tu tratamiento y contanos cuándo te gustaría venir.</p></div><svg class="beauty-line" viewBox="0 0 120 160" fill="none" aria-hidden="true"><path d="M73 17C32 11 20 48 34 75c6 12 9 15 8 30-1 12 8 24 25 28m6-116c30 17 29 42 19 57-8 11-11 18-9 30 2 12-4 24-16 29m-25-72c7-7 15-7 22-1m8-1c5-5 10-5 15-1M66 66l-6 22 9 3m-15 13c9 6 17 6 24 0m-34 26-14 22m48-19 12 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M18 32c0-9-5-14-10-17 8 0 14-5 16-12 0 9 5 14 11 17-9 0-14 5-17 12Z" stroke="currentColor" stroke-width="1.2"/></svg></div>`);
 s=s.replace('<span>${s.name}<small>${s.minutes} min · ${money(s.price)}</small></span></label>', '<img class="booking-thumb" src="${photo(s.img,150)}" alt="" width="54" height="54"><span>${s.name}<small>${s.category} · ${s.minutes} min</small></span><b class="booking-price">${money(s.price)}</b></label>');
 s=s.replace('01 / ¿Qué te gustaría disfrutar?','01 / Elegí tu tratamiento').replace('02 / Tu momento ideal','02 / ¿Cuándo te gustaría venir?').replace('El tratamiento incluye','El tratamiento incluye');
 }
 fs.writeFileSync(file,s);
}
