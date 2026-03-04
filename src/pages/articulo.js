import { initScrollAnimations } from '../components/scrollAnimations.js';

const articles = {
    '5-errores-que-envejecen-tu-piel': {
        title: '5 Errores que Envejecen tu Piel (y cómo evitarlos)',
        tag: 'Skincare',
        date: '28 Feb, 2026',
        author: 'Dra. Camila Sánchez',
        readTime: '8 min',
        heroImg: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80',
        content: `
      <p class="article-intro">
        Tu piel es tu carta de presentación. Y aunque no lo creas, hay hábitos cotidianos que están acelerando tu envejecimiento sin que te des cuenta. Después de más de 15 años tratando pacientes, puedo decirte que la mayoría de los signos prematuros de envejecimiento podrían haberse evitado con simples cambios de rutina.
      </p>

      <h2>1. No usar protector solar todos los días</h2>
      <img src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=900&q=80" alt="Protector solar" class="article-img">
      <p>
        Este es, sin exagerar, el error número uno. <strong>El 80% del envejecimiento visible de la piel se debe a la exposición solar acumulada</strong>, lo que los dermatólogos llamamos "fotoenvejecimiento". Y no, no hablo solo de cuando vas a la playa. El sol que recibís caminando al supermercado, manejando el auto o sentada cerca de una ventana también cuenta.
      </p>
      <p>
        Los rayos UVA (que son los que envejecen) atraviesan nubes y vidrios. Esto significa que incluso en días nublados o dentro de tu oficina, tu piel está recibiendo radiación que destruye el colágeno y genera manchas.
      </p>
      <blockquote>
        <strong>La regla de oro:</strong> SPF 50+ todos los días, reaplicar cada 2-3 horas, incluso en invierno. Es la inversión anti-edad más barata y efectiva que existe.
      </blockquote>

      <h2>2. Dormir con maquillaje</h2>
      <p>
        Lo sé, llegás cansada a tu casa y lo último que querés hacer es una rutina de skincare. Pero dormir con maquillaje es como poner tu piel a trabajar horas extra. Durante la noche, tu piel entra en modo reparación: las células se regeneran, el colágeno se produce y los radicales libres se neutralizan.
      </p>
      <p>
        Cuando dormís maquillada, estás bloqueando todos estos procesos. El maquillaje se mezcla con el sebo, la suciedad y la contaminación del día, creando una capa que obstruye los poros y genera:
      </p>
      <ul>
        <li>Puntos negros y acné</li>
        <li>Deshidratación severa (la piel no puede "respirar")</li>
        <li>Textura áspera e irregular</li>
        <li>Arrugas prematuras alrededor de los ojos</li>
        <li>Infecciones oculares por el rímel y sombras</li>
      </ul>
      <p>
        <strong>Tip:</strong> Si realmente no podés con una rutina completa, tené al menos toallitas desmaquillantes en tu mesa de luz. Pero lo ideal es un doble limpieza: primero aceite o bálsamo para disolver el maquillaje, y después un limpiador suave con agua.
      </p>

      <h2>3. No hidratar la piel grasa</h2>
      <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" alt="Hidratación facial" class="article-img">
      <p>
        Este es un mito súper extendido: "Tengo piel grasa, no necesito hidratante". <strong>Error.</strong> La piel grasa produce exceso de sebo, pero eso no significa que esté hidratada. De hecho, muchas veces la piel produce más grasa precisamente porque está deshidratada y trata de compensar.
      </p>
      <p>
        La clave está en elegir la hidratante correcta: texturas ligeras, en gel, oil-free, con ingredientes como ácido hialurónico (que atrae el agua) o niacinamida (que regula el sebo). Cuando hidratas correctamente la piel grasa, paradójicamente se vuelve menos grasa porque deja de sobrecompensar.
      </p>

      <h2>4. Exfoliar demasiado (o muy poco)</h2>
      <p>
        La exfoliación es fundamental para renovar la piel: elimina las células muertas, destapa poros, mejora la textura y permite que los productos penetren mejor. Pero el exceso de exfoliación es tan dañino como no exfoliar nunca.
      </p>
      <p>
        Cuando exfoliás de más (más de 2-3 veces por semana, o con productos muy agresivos), destruís la barrera protectora de la piel. Esto genera enrojecimiento, sensibilidad, brotes de acné reactivo y, paradójicamente, más arrugas porque la piel queda desprotegida ante agresores externos.
      </p>
      <blockquote>
        <strong>Mi recomendación:</strong> Exfoliación química suave (ácido glicólico al 5-8% o ácido láctico) 2 veces por semana. Si tenés piel sensible, una vez por semana es suficiente. Dejá los scrubs físicos con micropartículas abrasivas — son del pasado.
      </blockquote>

      <h2>5. Ignorar el cuello y el escote</h2>
      <p>
        La piel del cuello y el escote es más fina y delicada que la del rostro, tiene menos glándulas sebáceas (se deshidrata más rápido) y está igualmente expuesta al sol. Sin embargo, la mayoría de las personas aplican protector solar y crema hidratante solo hasta el mentón.
      </p>
      <p>
        El resultado: un rostro cuidado y un cuello que delata la edad. Las arrugas horizontales del cuello (los famosos "anillos de Venus") y las manchas del escote son extremadamente difíciles de tratar una vez establecidas.
      </p>
      <p>
        <strong>Prevención:</strong> Extendé todos tus productos de skincare (limpiador, sérum, hidratante, protector solar) desde el rostro hasta el escote. Tu yo del futuro te lo va a agradecer.
      </p>

      <h2>Bonus: El estrés también envejece</h2>
      <p>
        El cortisol (hormona del estrés) degradada el colágeno, aumenta la inflamación sistémica y altera el ciclo de renovación celular. Las personas sometidas a estrés crónico pueden aparentar hasta 10 años más de su edad biológica.
      </p>
      <p>
        Dormir 7-8 horas, hacer ejercicio regular, meditar y cuidar tu salud mental no son "lujos" — son parte fundamental de cualquier protocolo anti-edad serio.
      </p>

      <div class="article-cta">
        <h3>¿Querés un diagnóstico personalizado de tu piel?</h3>
        <p>Agendá una consulta con nuestra Dra. Camila Sánchez para un análisis completo y un plan de skincare a tu medida.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Consulta</a>
      </div>
    `,
    },
    'botox-mitos-y-verdades': {
        title: 'Botox: Mitos y Verdades que Tenés que Saber',
        tag: 'Tratamientos',
        date: '15 Feb, 2026',
        author: 'Dr. Martín Rivas',
        readTime: '7 min',
        heroImg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80',
        content: `
      <p class="article-intro">
        El botox es probablemente el tratamiento estético más popular del mundo y, al mismo tiempo, el que más mitos tiene a su alrededor. Después de aplicar más de 3.000 procedimientos, quiero contarte toda la verdad: lo bueno, lo que hay que tener en cuenta, y lo que es pura ficción.
      </p>

      <h2>¿Qué es exactamente el Botox?</h2>
      <p>
        El Botox (toxina botulínica tipo A) es una proteína purificada que, cuando se inyecta en cantidades mínimas en músculos específicos del rostro, relaja temporalmente esos músculos. Al relajarlos, se suavizan las líneas de expresión que se forman cuando gesticulamos: el entrecejo, las patas de gallo, las líneas de la frente.
      </p>
      <p>
        Es importante entender que <strong>el Botox no rellena ni estira la piel</strong>. Lo que hace es evitar que el músculo se contraiga con la misma fuerza, por lo que la arruga no se marca tanto. Es un tratamiento preventivo y correctivo a la vez.
      </p>

      <h2>MITO 1: "Te deja sin expresión facial"</h2>
      <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80" alt="Resultado natural de botox" class="article-img">
      <p>
        <strong>FALSO</strong> (si está bien aplicado). Este es el mito más extendido y el que más miedo genera. La realidad es que un profesional experimentado aplica dosis mínimas y precisas en puntos estratégicos. El resultado no es una cara "congelada", sino una versión descansada y natural de vos misma.
      </p>
      <p>
        La clave está en la técnica: no se trata de paralizar el músculo por completo, sino de reducir su fuerza de contracción. Seguís pudiendo expresar emociones, fruncir el ceño, sonreír. Lo que cambia es que esos gestos no dejan marcas profundas en la piel.
      </p>
      <blockquote>
        Los casos de "cara congelada" que ves en internet son producto de sobredosis, mala técnica o aplicación en zonas incorrectas. Un buen profesional jamás te haría eso.
      </blockquote>

      <h2>MITO 2: "Es peligroso y tóxico"</h2>
      <p>
        <strong>FALSO.</strong> El Botox tiene más de 30 años de uso médico y estético con un perfil de seguridad extraordinario. Está aprobado por la FDA (Estados Unidos), la EMA (Europa) y la ANMAT (Argentina). Las dosis utilizadas en estética son ínfimas comparadas con las que podrían causar algún efecto adverso.
      </p>
      <p>
        De hecho, el Botox se usa exitosamente en medicina para tratar migrañas crónicas, contracturas musculares, hiperhidrosis (sudoración excesiva), bruxismo e incluso espasticidad en niños con parálisis cerebral. Si fuera tan peligroso, no se usaría en niños.
      </p>

      <h2>MITO 3: "Una vez que empezás, no podés dejarlo"</h2>
      <p>
        <strong>FALSO.</strong> No genera dependencia física ni química. Si dejás de aplicarte Botox, simplemente volvés gradualmente a tu estado anterior. Los músculos recuperan su fuerza y las líneas de expresión vuelven a aparecer como antes. No hay efecto rebote, ni empeoramiento, ni cambios permanentes.
      </p>
      <p>
        Lo que sí pasa es que te acostumbrás a verte bien y no querés volver atrás. Pero eso es una decisión personal, no un efecto farmacológico.
      </p>

      <h2>VERDAD 1: Cuanto antes se empiece (con criterio), mejor</h2>
      <p>
        El "Botox preventivo" es una tendencia basada en evidencia real. Cuando se aplica antes de que las arrugas se marquen profundamente, evita que se formen surcos en la piel. Es mucho más fácil prevenir una arruga que eliminar una que ya está grabada.
      </p>
      <p>
        La edad ideal para empezar varía según cada persona: depende de tu genética, tu gesticulación, tu exposición solar y tus expectativas. Generalmente, a partir de los 28-30 años es un buen momento para considerar un Botox preventivo suave.
      </p>

      <h2>VERDAD 2: La experiencia del profesional lo es TODO</h2>
      <p>
        El Botox es un producto relativamente simple. Lo que marca la diferencia entre un resultado sublime y uno desastroso es <strong>quién te lo aplica</strong>. Un profesional experimentado conoce la anatomía facial en detalle, adapta las dosis a tu musculatura específica y sabe exactamente dónde y cuánto inyectar.
      </p>
      <ul>
        <li>Siempre consultá que sea médico matriculado</li>
        <li>Pedí ver fotos de resultados anteriores</li>
        <li>Desconfiá de precios demasiado baratos</li>
        <li>El producto debe estar sellado y visible</li>
        <li>Evitá aplicaciones en lugares no habilitados</li>
      </ul>

      <h2>¿Duele? ¿Cuánto dura? ¿Cuánto cuesta?</h2>
      <p>
        <strong>Dolor:</strong> Mínimo. Se usa una aguja ultrafina. La mayoría de los pacientes lo describen como un "pellizquito". El procedimiento dura 15-20 minutos y no requiere anestesia.
      </p>
      <p>
        <strong>Duración:</strong> Entre 4 y 6 meses en promedio. Después se reabsorbe naturalmente. La primera aplicación suele durar un poco menos; las siguientes, más, porque el músculo se "acostumbra" a estar relajado.
      </p>
      <p>
        <strong>Recuperación:</strong> Inmediata. Podés volver a tu rutina normal enseguida, solo evitando ejercicio intenso y masajes faciales por 24hs.
      </p>

      <div class="article-cta">
        <h3>¿Tenés más preguntas sobre el Botox?</h3>
        <p>El Dr. Rivas ofrece una consulta inicial donde evalúa tu caso, te muestra simulaciones y responde todas tus dudas sin compromiso.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Consulta</a>
      </div>
    `,
    },
    'rutina-skincare-tipo-piel': {
        title: 'Rutina de Skincare para Cada Tipo de Piel',
        tag: 'Tips',
        date: '02 Feb, 2026',
        author: 'Lic. Sofía Moretti',
        readTime: '10 min',
        heroImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80',
        content: `
      <p class="article-intro">
        No existe una rutina universal de skincare. Lo que le funciona a tu amiga puede ser un desastre para tu piel. La clave está en conocer tu tipo de piel, entender qué necesita, y armar un protocolo personalizado. Después de 10 años como cosmiatra, te voy a dar las rutinas paso a paso para cada tipo.
      </p>

      <h2>Primero: ¿Cómo sé qué tipo de piel tengo?</h2>
      <p>
        El test más simple es el del "papel secante": lavate la cara con un limpiador suave, no te apliques nada, y después de 2 horas presioná un papel tissue en diferentes zonas. Si sale brilloso en todos lados: piel grasa. Si solo en la zona T (frente, nariz, mentón): mixta. Si no sale brilloso en ningún lado: seca o normal.
      </p>

      <h2>Rutina para Piel Grasa</h2>
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80" alt="Skincare piel grasa" class="article-img">
      <p><strong>Tu piel produce exceso de sebo</strong>, lo que genera brillo, poros dilatados y tendencia al acné. El error más común es usar productos agresivos que la "sequen", porque eso solo genera más producción de grasa.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza suave</strong> con gel o espuma sin sulfatos (ácido salicílico al 0.5-2%)</li>
        <li><strong>Tónico</strong> con niacinamida (regula sebo) o hamamelis</li>
        <li><strong>Sérum</strong> de niacinamida al 10% + zinc</li>
        <li><strong>Hidratante</strong> en gel oil-free con ácido hialurónico</li>
        <li><strong>Protector solar</strong> SPF 50+ con acabado mate o toque seco</li>
      </ol>

      <h3>Noche:</h3>
      <ol>
        <li><strong>Doble limpieza:</strong> aceite micelar + gel limpiador</li>
        <li><strong>Exfoliante</strong> (2-3x/semana): BHA (ácido salicílico) al 2%</li>
        <li><strong>Sérum</strong> de retinol al 0.3-0.5% (noches alternas)</li>
        <li><strong>Hidratante</strong> ligera reparadora</li>
      </ol>

      <h2>Rutina para Piel Seca</h2>
      <p><strong>Tu piel no produce suficiente sebo natural</strong>, lo que genera tirantez, descamación, sensibilidad y arrugas prematuras. La clave es hidratar, hidratar e hidratar — pero también reparar la barrera cutánea.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza</strong> con leche o crema limpiadora sin espuma</li>
        <li><strong>Tónico</strong> hidratante con ácido hialurónico o agua termal</li>
        <li><strong>Sérum</strong> de ácido hialurónico multi-peso molecular</li>
        <li><strong>Crema hidratante</strong> rica con ceramidas y manteca de karité</li>
        <li><strong>Protector solar</strong> SPF 50+ con acabado hidratante</li>
      </ol>

      <h3>Noche:</h3>
      <ol>
        <li><strong>Limpieza suave</strong> con bálsamo o aceite + agua micelar</li>
        <li><strong>Exfoliante</strong> (1x/semana): AHA suave (ácido láctico al 5%)</li>
        <li><strong>Sérum</strong> reparador con péptidos o bakuchiol</li>
        <li><strong>Crema nocturna</strong> nutritiva con escualano o aceite de rosa mosqueta</li>
        <li><strong>Contorno de ojos</strong> con retinol encapsulado</li>
      </ol>

      <h2>Rutina para Piel Mixta</h2>
      <p><strong>La más desafiante:</strong> grasa en la zona T y seca en las mejillas. La clave es usar productos equilibrantes que regulen las zonas grasas sin resecar las secas.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza</strong> con gel suave pH balanceado</li>
        <li><strong>Tónico</strong> equilibrante con niacinamida</li>
        <li><strong>Sérum</strong> de ácido hialurónico (hidrata sin engrasar)</li>
        <li><strong>Hidratante</strong> gel-crema (lo mejor de ambos mundos)</li>
        <li><strong>Protector solar</strong> SPF 50+ acabado natural/semimate</li>
      </ol>

      <h2>Rutina para Piel Sensible</h2>
      <p><strong>Tu piel reacciona a todo:</strong> enrojecimiento, picazón, ardor, brotes. La barrera cutánea está comprometida y necesitás productos con pocos ingredientes, sin fragancias ni alcohol.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza</strong> con agua micelar o leche limpiadora ultra-suave</li>
        <li><strong>Sérum</strong> calmante con centella asiática o aloe vera</li>
        <li><strong>Crema barrera</strong> con ceramidas, péptidos y pantenol</li>
        <li><strong>Protector solar</strong> mineral (óxido de zinc/dióxido de titanio) SPF 50+</li>
      </ol>

      <blockquote>
        <strong>Regla universal:</strong> Nunca introduzcas más de un producto nuevo a la vez. Esperá 2 semanas entre cada incorporación para detectar posibles reacciones.
      </blockquote>

      <h2>Los ingredientes estrella según tu edad</h2>
      <ul>
        <li><strong>20s:</strong> Vitamina C (antioxidante), niacinamida, SPF</li>
        <li><strong>30s:</strong> Retinol (anti-edad), péptidos, ácido hialurónico</li>
        <li><strong>40s:</strong> Retinol más potente, factores de crecimiento, ceramidas</li>
        <li><strong>50+:</strong> Retinoides de prescripción, suplementos de colágeno, tratamientos en consultorio</li>
      </ul>

      <div class="article-cta">
        <h3>¿Necesitás un diagnóstico de piel personalizado?</h3>
        <p>La Lic. Moretti realiza análisis completos con dermatoscopio para determinar tu tipo de piel exacto y armar tu rutina ideal.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Diagnóstico</a>
      </div>
    `,
    },
    'cada-cuanto-limpieza-facial': {
        title: '¿Cada cuánto deberías hacerte una Limpieza Facial?',
        tag: 'Cuidados',
        date: '20 Ene, 2026',
        author: 'Lic. Sofía Moretti',
        readTime: '5 min',
        heroImg: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80',
        content: `
      <p class="article-intro">
        La limpieza facial profesional es la base de cualquier protocolo de cuidado serio. Pero una de las preguntas más frecuentes en el consultorio es: "¿cada cuánto me la tengo que hacer?" La respuesta, como en casi todo en estética, es: depende.
      </p>

      <h2>¿Qué hace exactamente una limpieza facial profesional?</h2>
      <p>
        Una limpieza profesional no es simplemente "lavarte la cara". Es un protocolo de varios pasos que incluye: desmaquillado profundo, vaporización para abrir poros, extracción manual de comedones (puntos negros y blancos), alta frecuencia para desinfectar, mascarilla específica para tu tipo de piel, y finalización con sérum y protección solar.
      </p>
      <p>
        Lo que logramos con esto es eliminar todo lo que tu rutina diaria no puede: impurezas profundas, células muertas acumuladas, exceso de sebo en los poros. Es como hacer un "reset" en tu piel.
      </p>

      <h2>Frecuencia según tu tipo de piel</h2>
      <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80" alt="Tratamiento facial" class="article-img">
      
      <h3>Piel grasa o acneica: cada 3-4 semanas</h3>
      <p>Tu piel produce más sebo, los poros se obstruyen más rápido y necesitás extracciones más frecuentes para evitar que se formen quistes e inflamaciones.</p>
      
      <h3>Piel mixta: cada 4-5 semanas</h3>
      <p>La zona T necesita atención regular, pero las mejillas no tanto. Un mes entre sesiones suele ser el sweet spot.</p>
      
      <h3>Piel normal: cada 5-6 semanas</h3>
      <p>Tu piel se mantiene relativamente limpia con tu rutina diaria. Las limpiezas son más de mantenimiento y optimización.</p>
      
      <h3>Piel seca o sensible: cada 6-8 semanas</h3>
      <p>Tu piel no se obstruye tanto, y una limpieza demasiado frecuente podría irritarla. Se usan técnicas más suaves y productos calmantes.</p>

      <h2>Señales de que necesitás una limpieza YA</h2>
      <ul>
        <li>Los productos que usás dejaron de "funcionar" (la piel los absorbe menos)</li>
        <li>Ves puntos negros, especialmente en nariz y mentón</li>
        <li>La piel se siente áspera al tacto, con textura irregular</li>
        <li>El maquillaje no se aplica parejo, se acumula en zonas</li>
        <li>La piel se ve opaca, sin brillo, "cansada"</li>
        <li>Tenés brotes de granitos que no se van</li>
      </ul>

      <h2>¿Se puede hacer una limpieza antes de un evento?</h2>
      <p>
        <strong>Sí, pero con al menos 3-5 días de anticipación.</strong> Después de una limpieza profunda, la piel puede quedar ligeramente enrojecida por las extracciones (especialmente si hay muchas impurezas). Ese enrojecimiento se va en 24-48hs y después la piel queda espectacular.
      </p>
      <p>
        Si tu evento es mañana, mejor hacete un Hydra-Glow (limpieza sin extracción + hidratación intensiva), que deja la piel perfecta al instante sin ningún enrojecimiento.
      </p>

      <div class="article-cta">
        <h3>¿Hace más de 2 meses que no te hacés una limpieza?</h3>
        <p>Tu piel te lo está pidiendo. Agendá tu turno y salí del consultorio brillando.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Limpieza Facial</a>
      </div>
    `,
    },
    'protector-solar-regla-anti-edad': {
        title: 'Protector Solar: La Regla de Oro Anti-Edad',
        tag: 'Cuidados',
        date: '10 Ene, 2026',
        author: 'Dra. Camila Sánchez',
        readTime: '6 min',
        heroImg: 'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1920&q=80',
        content: `
      <p class="article-intro">
        Si tuviera que recomendar un solo producto de skincare para el resto de tu vida, sería el protector solar. No el sérum más caro, no la crema más exclusiva. El protector solar. Sin negociación.
      </p>

      <h2>¿Por qué es tan importante?</h2>
      <p>
        La radiación ultravioleta es el factor externo número uno de envejecimiento cutáneo. El sol produce dos tipos de daño en la piel:
      </p>
      <ul>
        <li><strong>Rayos UVB:</strong> causan quemaduras y están relacionados con el cáncer de piel. Son más fuertes en verano y al mediodía.</li>
        <li><strong>Rayos UVA:</strong> penetran más profundo, destruyen el colágeno y la elastina, generan manchas, y están presentes TODO el año, incluso en días nublados. Atraviesan vidrios.</li>
      </ul>
      <p>
        El fotoenvejecimiento (envejecimiento por sol) es responsable del <strong>80-90% de los signos visibles de envejecimiento</strong>: arrugas, flacidez, manchas, textura despareja y pérdida de luminosidad.
      </p>

      <h2>¿Qué SPF necesito?</h2>
      <img src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=900&q=80" alt="Protección solar SPF" class="article-img">
      <p>
        <strong>SPF 30</strong> bloquea el 97% de los rayos UVB. <strong>SPF 50</strong> bloquea el 98%. La diferencia parece mínima, pero en el uso diario sostenido, ese 1% extra sí se nota a lo largo de los años. Mi recomendación: SPF 50+ siempre, especialmente en Argentina donde la radiación es alta.
      </p>
      <p>
        Pero el número de SPF es solo parte de la ecuación. También necesitás que sea de <strong>amplio espectro</strong> (UVA + UVB) y que tenga buen PPD (índice de protección UVA). Un SPF 50 con PPD bajo te protege de quemaduras pero no del envejecimiento.
      </p>

      <h2>El error más común: la cantidad</h2>
      <p>
        La mayoría de las personas usan la mitad o menos de la cantidad necesaria. La regla es: <strong>2 dedos de protector solar</strong> (dos líneas a lo largo de los dedos índice y medio) para cubrir todo el rostro, cuello y orejas.
      </p>
      <p>
        Si usás la mitad de la cantidad, estás recibiendo aproximadamente un SPF de 7, sin importar lo que diga el envase. Y si no lo reaplicás cada 2-3 horas (o después de sudor/contacto con agua), la protección baja drásticamente.
      </p>

      <h2>¿Cuál tipo de protector elegir?</h2>
      <ul>
        <li><strong>Piel grasa:</strong> Fluidos oil-free con acabado mate o toque seco</li>
        <li><strong>Piel seca:</strong> Cremas con acabado hidratante y luminoso</li>
        <li><strong>Piel sensible:</strong> Filtros minerales (óxido de zinc, dióxido de titanio)</li>
        <li><strong>Uso diario urbano:</strong> Protectores con color que unifican el tono</li>
        <li><strong>Actividad al aire libre:</strong> Resistentes al agua y sudor</li>
      </ul>

      <blockquote>
        <strong>Dato:</strong> Usar protector solar consistentemente durante 1 año revierte parcialmente el daño solar acumulado. La piel tiene capacidad de auto-reparación si le das las condiciones.
      </blockquote>

      <div class="article-cta">
        <h3>¿Querés saber cuánto daño solar acumulado tiene tu piel?</h3>
        <p>Con nuestro análisis con luz de Wood, podemos ver manchas y daño solar que aún no es visible a simple vista. Prevenir es siempre mejor.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Análisis</a>
      </div>
    `,
    },
    'tendencias-estetica-2026': {
        title: 'Tendencias en Estética 2026: Lo que Viene',
        tag: 'Tendencias',
        date: '03 Ene, 2026',
        author: 'Dra. Camila Sánchez',
        readTime: '7 min',
        heroImg: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80',
        content: `
      <p class="article-intro">
        El mundo de la medicina estética evoluciona cada vez más rápido. Lo que hace 5 años parecía ciencia ficción, hoy es parte de nuestro día a día en el consultorio. Acabo de volver del Congreso Internacional de Medicina Estética en Miami, y estas son las tendencias que van a dominar este 2026.
      </p>

      <h2>1. Glass Skin: la obsesión por la piel transparente</h2>
      <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80" alt="Glass skin tendencia" class="article-img">
      <p>
        El concepto viene de la K-Beauty (belleza coreana) y se refiere a una piel tan hidratada, luminosa y pareja que parece de vidrio. No se trata de cubrirla con maquillaje, sino de que la piel misma tenga esa calidad.
      </p>
      <p>
        Para lograrlo combinamos: peelings suaves periódicos, mesoterapia con ácido hialurónico, skinboosters y una rutina domiciliaria enfocada en hidratación multicapa. Los resultados son impresionantes y muy naturales.
      </p>

      <h2>2. Exosomas: la revolución en regeneración celular</h2>
      <p>
        Los exosomas son nanovesículas que las células usan para comunicarse entre sí. En medicina estética, los usamos como vehículos de señalización celular: llevan "mensajes" de regeneración directamente a las células de la piel.
      </p>
      <p>
        Son más potentes que el PRP (plasma rico en plaquetas) y los factores de crecimiento tradicionales. Estimulan la producción de colágeno, elastina y ácido hialurónico propio de la piel. Están revolucionando el tratamiento de cicatrices, alopecia y rejuvenecimiento facial profundo.
      </p>

      <h2>3. Batch Botox: micro-dosis para millennials</h2>
      <p>
        "Baby Botox" evolucionó a "Batch Botox": micro-dosis distribuidas en más puntos del rostro para un efecto global de relajación sutil. En lugar de tratar solo el entrecejo, se aplican cantidades mínimas en 15-20 puntos del rostro superior, logrando un efecto de "filtro de Instagram en la vida real".
      </p>
      <p>
        Cada vez más pacientes jóvenes (25-35 años) eligen esta técnica preventiva. No buscan eliminar arrugas (que todavía no tienen), sino evitar que aparezcan y mantener esa expresión descansada y fresca.
      </p>

      <h2>4. Bioestimuladores de colágeno de nueva generación</h2>
      <p>
        Los bioestimuladores como Sculptra (ácido poliláctico) y Radiesse (hidroxiapatita de calcio) están ganando terreno sobre los rellenos tradicionales. En lugar de "rellenar" mecánicamente, estimulan al cuerpo a producir su propio colágeno.
      </p>
      <p>
        Los resultados son más naturales, más duraderos (hasta 2 años) y mejoran la calidad global de la piel, no solo el volumen. La tendencia es tratar la cara como un todo: no solo rellenar un surco, sino mejorar la calidad de toda la piel del rostro.
      </p>

      <h2>5. Personalización con IA</h2>
      <p>
        La inteligencia artificial ya está en nuestros consultorios. Cámaras de alta resolución analizan la piel en segundos y detectan manchas, vascularización, profundidad de arrugas y textura con una precisión imposible para el ojo humano.
      </p>
      <p>
        Esto nos permite crear protocolos ultra-personalizados y medir objetivamente los resultados de cada tratamiento. El futuro es un skincare y planes de tratamiento diseñados específicamente para tu piel, tus genes y tu estilo de vida.
      </p>

      <h2>6. Medicina estética masculina: ya no es tabú</h2>
      <p>
        El segmento masculino creció un 40% en los últimos 3 años. Cada vez más hombres buscan verse descansados, frescos y cuidados sin que se note que "se hicieron algo". Los tratamientos más demandados por ellos: Botox preventivo, limpieza facial profunda, tratamiento de ojeras y depilación láser.
      </p>

      <div class="article-cta">
        <h3>¿Querés saber cuáles de estas tendencias son ideales para vos?</h3>
        <p>Agendá una consulta y diseñamos un plan a medida con las últimas técnicas del mercado mundial.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Consulta</a>
      </div>
    `,
    },
};

export function renderArticulo(slug) {
    const app = document.getElementById('app');
    const article = articles[slug];

    if (!article) {
        app.innerHTML = `
      <section class="sub-hero">
        <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80');"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Artículo no encontrado</h1>
          <p class="hero-subtitle">El artículo que buscás no existe o fue eliminado.</p>
        </div>
      </section>
      <section class="section text-center">
        <div class="container">
          <a href="/blog" class="btn btn-gold" data-navigo><i class="fa-solid fa-arrow-left"></i> Volver al Blog</a>
        </div>
      </section>
    `;
        window.scrollTo(0, 0);
        return;
    }

    app.innerHTML = `
    <!-- ARTICLE HERO -->
    <section class="sub-hero" style="height:55vh;">
      <div class="hero-bg" style="background-image: url('${article.heroImg}');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content" style="max-width:800px;">
        <span class="hero-label">✦ ${article.tag}</span>
        <h1 style="font-size:clamp(1.8rem,4vw,2.8rem);">${article.title}</h1>
        <div style="display:flex;gap:var(--space-xl);justify-content:center;margin-top:var(--space-lg);flex-wrap:wrap;">
          <span style="color:var(--gray-300);font-size:0.9rem;"><i class="fa-regular fa-calendar" style="margin-right:6px;color:var(--gold);"></i>${article.date}</span>
          <span style="color:var(--gray-300);font-size:0.9rem;"><i class="fa-regular fa-user" style="margin-right:6px;color:var(--gold);"></i>${article.author}</span>
          <span style="color:var(--gray-300);font-size:0.9rem;"><i class="fa-regular fa-clock" style="margin-right:6px;color:var(--gold);"></i>${article.readTime} de lectura</span>
        </div>
      </div>
    </section>

    <!-- ARTICLE BODY -->
    <section class="section" style="padding-top:var(--space-3xl);">
      <div class="container">
        <article class="article-body anim">
          ${article.content}
        </article>

        <div style="margin-top:var(--space-3xl);padding-top:var(--space-2xl);border-top:1px solid var(--gray-200);text-align:center;">
          <a href="/blog" class="btn btn-outline" data-navigo><i class="fa-solid fa-arrow-left"></i> Volver al Blog</a>
        </div>
      </div>
    </section>
  `;

    window.scrollTo(0, 0);
    initScrollAnimations();
}

export { articles };
