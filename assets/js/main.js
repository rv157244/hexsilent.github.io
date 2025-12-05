// main.js — minimal JS for small UX and terminal typing effect
(function(){
  // simple nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'block';
    });
  }

  // terminal typing effect — tasteful, non-intrusive
  const out = document.getElementById('terminalOutput');
  const lines = [
    '$ inicializando ambiente...',
    'user: HexSilent水',
    'context: Offensive Security • Pentest',
    'status: ambientes prontos — evasao | persistencia | recon',
    '$ ready.'
  ];

  let i=0; // line
  let charIdx=0;
  function step(){
    if(i >= lines.length) return; // stop
    const line = lines[i];
    if(charIdx <= line.length){
      out.textContent = lines.slice(0,i).join('\n') + (i? '\n':'') + line.slice(0,charIdx) + (charIdx%2? '\u2588':'');
      charIdx++;
      setTimeout(step, 30 + Math.random()*20);
    } else {
      i++; charIdx=0;
      setTimeout(step, 250);
    }
  }
  setTimeout(step, 600);

  // set current year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
})();

