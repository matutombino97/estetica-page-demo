export const statuses=['Pendiente','Confirmado','Realizado','Cancelado','Ausente'];
export const professionals=['Profesional 1','Profesional 2'];
export function localDate(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export const minutes=t=>Number(t.slice(0,2))*60+Number(t.slice(3,5));
export function conflict(candidate,entries){return entries.find(e=>e.id!==candidate.id&&e.date===candidate.date&&e.professional===candidate.professional&&!['Cancelado','Ausente'].includes(e.status)&&!['Cancelado','Ausente'].includes(candidate.status)&&minutes(candidate.time)<minutes(e.time)+Number(e.duration)&&minutes(e.time)<minutes(candidate.time)+Number(candidate.duration));}
export function validate(entry,entries){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(entry.date)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(entry.time))return 'Revisá la fecha y el horario.';
 if(!Number.isInteger(Number(entry.duration))||entry.duration<15||entry.duration>480)return 'La duración debe ser de 15 a 480 minutos.';
 if(minutes(entry.time)+Number(entry.duration)>1440)return 'El turno debe terminar dentro del mismo día.';
 if(!professionals.includes(entry.professional)||!statuses.includes(entry.status))return 'Revisá el profesional y el estado.';
 if(!entry.name.trim())return 'Ingresá un nombre o motivo del bloqueo.';
 if(entry.phone&&!/^\d{10,15}$/.test(entry.phone))return 'Usá entre 10 y 15 dígitos, con código de país, sin símbolos.';
 if(conflict(entry,entries))return 'Ese profesional ya tiene un turno o bloqueo en ese horario. Elegí otro horario o profesional.';
 return '';
}
export function sampleEntries(){const date=localDate();return [
 {id:'demo-1',name:'Cliente demo · Ana',phone:'',service:'limpieza-facial',date,time:'09:00',duration:60,professional:professionals[0],status:'Confirmado',kind:'turno'},
 {id:'demo-2',name:'Cliente demo · Sofía',phone:'',service:'mirada',date,time:'10:30',duration:30,professional:professionals[1],status:'Pendiente',kind:'turno'},
 {id:'demo-3',name:'Pausa del equipo',phone:'',service:'',date,time:'13:00',duration:60,professional:professionals[0],status:'Confirmado',kind:'bloqueo'}];}
