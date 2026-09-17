  /* ===== Menú mobile ===== */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  /* ===== Reveal on scroll ===== */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ===== Crecimiento interactivo del terrario ===== */
  const terrarium = document.getElementById('interactiveTerrarium');
  const growHintText = document.getElementById('growHintText');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

  function togglePlantGrowth(){
    const isGrown = terrarium.classList.toggle('is-grown');
    terrarium.setAttribute('aria-pressed', String(isGrown));
    growHintText.textContent = isGrown
      ? 'Tocá otra vez para verla empezar de nuevo'
      : 'Pasá el cursor o tocá para verla crecer';
  }

  terrarium.addEventListener('click', () => {
    if (!canHover.matches) togglePlantGrowth();
  });

  terrarium.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      togglePlantGrowth();
    }
  });

  /* ===== Simulación en vivo (demo de lectura de sensores) ===== */
  const tEl = document.getElementById('liveTemp');
  const hEl = document.getElementById('liveHum');
  const fEl = document.getElementById('liveFan');
  function tick(){
    // Simula valores del terrario para que se "sienta" vivo en la expo
    const temp = 22 + Math.round(Math.random()*8);   // 22–30°C
    const hum  = 40 + Math.round(Math.random()*30);  // 40–70%
    tEl.textContent = temp + '°C';
    hEl.textContent = hum + '%';
    fEl.textContent = temp >= 28 ? 'ON' : 'OFF';
    fEl.style.color = temp >= 28 ? 'var(--amber)' : 'var(--cyan)';
  }
  tick();
  setInterval(tick, 2200);
