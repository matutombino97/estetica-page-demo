import fs from 'node:fs';
let m=fs.readFileSync('src/motion.js','utf8');
m=m.replace("element.style.setProperty('--stamp-turn', `${10 + depth * 24}deg`);", "element.style.setProperty('--stamp-turn', `${10 + depth * 24}deg`);\n      element.style.setProperty('--signature-turn', `${depth * 110}deg`);");
m=m.replace("} else if (kind === 'ribbon') {", "} else if (kind === 'manifesto') {\n      element.style.setProperty('--ink-stop', `${clamp(progress * 145, 25, 100)}%`);\n      element.style.setProperty('--manifesto-rotation', `${progress * 90}deg`);\n    } else if (kind === 'ribbon') {");
m=m.replace("...document.querySelectorAll('.plan-art')", "...document.querySelectorAll('.plan-art')");
m=m.replace("...document.querySelectorAll('.hero')].map", "...document.querySelectorAll('.hero')].map");
m=m.replace("scene = [", "scene = [\n    ...[...document.querySelectorAll('.manifesto')].map(element => ({element, kind:'manifesto'})),");
m=m.replace("'.hero-actions', '.hero-stamp'", "'.hero-actions', '.hero-signature'");
m=m.replace(".related > h2').forEach", ".related > h2, .manifesto-foot, .hero-bottom').forEach");
m=m.replace("  const button = event.target.closest('.button, .floating-consult');", `  const hero = event.target.closest('.studio-hero');
  if(hero) {
    const rect=hero.getBoundingClientRect();
    hero.style.setProperty('--light-x', (event.clientX-rect.left)+'px');
    hero.style.setProperty('--light-y', (event.clientY-rect.top)+'px');
  }
  const imageArea=event.target.closest('.treatment-photo');
  if(imageArea){
    const rect=imageArea.getBoundingClientRect();
    imageArea.style.setProperty('--cursor-x',(event.clientX-rect.left)+'px');
    imageArea.style.setProperty('--cursor-y',(event.clientY-rect.top)+'px');
  }
  const button = event.target.closest('.button, .floating-consult');`);
fs.writeFileSync('src/motion.js',m);
