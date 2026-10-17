export const services = [
 {id:'limpieza-facial',name:'Reset facial',category:'Facial',minutes:60,price:38000,tag:'Empezá por acá',img:'photo-1570172619644-dfd03ed5d881',desc:'Limpieza, suavidad y un ratito dedicado a tu piel.',steps:['Conversación sobre tu cuidado','Limpieza y exfoliación adaptada','Mascarilla y cierre hidratante'],goal:'Cuidar mi piel'},
 {id:'hidratacion',name:'Baño de luz',category:'Facial',minutes:45,price:34000,tag:'Tu pausa express',img:'photo-1515377905703-c4788e51af15',desc:'Un tratamiento de hidratación para una piel que pide un mimo.',steps:['Evaluación de la piel','Aplicación de productos hidratantes','Mascarilla y cuidado final'],goal:'Cuidar mi piel'},
 {id:'masaje',name:'Modo pausa',category:'Corporal',minutes:60,price:42000,tag:'Bajá un cambio',img:'photo-1544161515-4ab6ce6db874',desc:'Un masaje de bienestar para desconectar del ritmo de todos los días.',steps:['Elección de intensidad con el equipo','Masaje de bienestar','Un cierre sin apuro'],goal:'Desconectar'},
 {id:'corporal',name:'Piel de seda',category:'Corporal',minutes:75,price:48000,tag:'El tratamiento completo',img:'photo-1519823551278-64ac92734fb1',desc:'Exfoliación e hidratación corporal. Tiempo para sentirte bien.',steps:['Bienvenida y selección de productos','Exfoliación corporal','Hidratación y cierre'],goal:'Desconectar'},
 {id:'mirada',name:'Mirada propia',category:'Mirada',minutes:30,price:22000,tag:'Pequeños detalles',img:'photo-1560750588-73207b1ef5b8',desc:'Diseño de cejas que acompaña tus rasgos y tu estilo.',steps:['Conversación sobre el diseño','Perfilado acordado con vos','Terminación y recomendaciones'],goal:'Cuidar mi mirada'}
];
export const config={name:'Mímara',phone:'5492613433108',businessPhone:'5492613433108'};
export const money=n=>new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n);
export const photo=(id,w=900)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const whatsappURL=message=>'https://wa.me/'+config.phone+'?text='+encodeURIComponent(message);
export const treatmentMessage=s=>'Hola, vi '+s.name+' en Mímara. Me gustaría consultar disponibilidad y valor final para este tratamiento. ¿Podrían darme más información?';
