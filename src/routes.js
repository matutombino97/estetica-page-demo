import { services } from './site.js';
import { agendaView } from './agenda.js';
import { home, treatments, center, gifts, contact, business, privacy, detail, notFound } from './views.js';
export const pages = {
 '/gestion': {title:'Agenda de turnos · Demo',description:'Demostración local de gestión de turnos, estados y disponibilidad para centros de estética.',view:agendaView},
 '/': { title:'Piel, cuerpo y pausa', description:'Conocé Mímara: tratamientos faciales, corporales y de mirada. Descubrí tu cuidado y consultá por WhatsApp.', view:home },
 '/tratamientos': { title:'Tratamientos de estética', description:'Explorá tratamientos por interés y duración, compará opciones y consultá por WhatsApp.', view:treatments },
 '/el-centro': { title:'El centro y la experiencia', description:'Conocé la propuesta de cuidado y bienestar de Mímara. Una experiencia pensada para escucharte y acompañarte.', view:center },
 '/bonos-y-regalos': { title:'Bonos y regalos', description:'Prepará una consulta por un regalo de bienestar o un bono de sesiones. Conocé opciones y condiciones.', view:gifts },
 '/contacto': { title:'Contacto y turnos', description:'Consultá por WhatsApp, prepará tu solicitud de visita y resolvé tus dudas sobre tratamientos y turnos.', view:contact },
 '/para-centros': { title:'Webs para centros de estética', description:'Conocé la propuesta de una web multipágina para mostrar tus servicios y captar consultas.', view:business },
 '/privacidad': { title:'Privacidad', description:'Cómo se usan los favoritos locales y los enlaces de consulta en esta demostración de Mímara.', view:privacy },
 ...Object.fromEntries(services.map(s=>['/tratamientos/'+s.id,{title:s.name,description:s.desc,view:()=>detail(s)}]))
};
export const aliases={'/nosotros':'/el-centro','/galeria':'/el-centro#espacio'};
export const missingPage={title:'Página no encontrada',description:'La página solicitada no está disponible. Volvé al inicio de Mímara.',view:notFound};
