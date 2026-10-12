document.querySelectorAll('input:not([type=radio]):not([type=checkbox]):not([type=submit]),textarea,select').forEach(el=>{if(!el.getAttribute('aria-label'))el.setAttribute('aria-label',el.placeholder||el.name);});
document.querySelectorAll('.navbar a.icon,.navbar a.dropbtn').forEach(el=>{el.setAttribute('role','button');el.setAttribute('aria-expanded','false');el.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();el.click();}});});
document.querySelectorAll('.dropbtn').forEach(el=>el.addEventListener('click',()=>{const open=el.getAttribute('aria-expanded')!=='true';el.setAttribute('aria-expanded',String(open));el.parentElement.classList.toggle('open',open);}));
document.querySelectorAll('.socmed').forEach(el=>el.alt=el.parentElement.hostname.replace('www.',''));

document.querySelectorAll('.navbar a.icon').forEach(el=>el.setAttribute('aria-label','Toggle navigation'));
