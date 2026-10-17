import assert from 'node:assert/strict';
import {services,whatsappURL,treatmentMessage} from '../src/site.js';
import {card,detail,whatsappCTA} from '../src/views.js';
for(const s of services){
 const url=new URL(whatsappURL(treatmentMessage(s)));
 assert.equal(url.pathname,'/5492613433108');
 assert.ok(url.searchParams.get('text').includes(s.name));
 assert.ok(card(s).includes('Consultar por WhatsApp'));
 assert.ok(detail(s).includes('detail-whatsapp'));
}
const message='Hola, me gustaría consultar por Reset facial + Modo pausa.\nDía preferido: 04/11/2026.\nFranja: Tarde.\n¿Podrían confirmarme disponibilidad, duración y valor final?';
assert.equal(new URL(whatsappURL(message)).searchParams.get('text'),message);
assert.ok(whatsappCTA(message).includes('rel="noopener noreferrer"'));
console.log('OK: cinco tratamientos y mensaje completo conservados en enlaces WhatsApp.');
