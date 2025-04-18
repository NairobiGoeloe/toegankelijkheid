
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
  
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("open");
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
    });



      // Dropdown toggle
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function (e) {
    const dropdown = this.parentElement;
    const isOpen = dropdown.classList.contains('show');

    // Toggle dropdown zichtbaar/onzichtbaar
    dropdown.classList.toggle('show');

    // Update aria-expanded
    this.setAttribute('aria-expanded', !isOpen);

    // Sluit andere dropdowns en update aria-expanded
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) {
        d.classList.remove('show');
        const otherBtn = d.querySelector('.dropbtn');
        otherBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Voorkom dat document-click het menu meteen sluit
    e.stopPropagation();
  });
});

// Sluit dropdown bij klik buiten de dropdowns
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('show');
      const btn = d.querySelector('.dropbtn');
      btn.setAttribute('aria-expanded', 'false');
    });
  }
});



  // Licht/donker modus
  const toggleThemeBtn = document.getElementById('toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Zoom in en uit
  let scale = 1;
  document.getElementById('zoom-in').addEventListener('click', () => {
    scale += 0.1;
    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';
  });

  document.getElementById('zoom-out').addEventListener('click', () => {
    scale = Math.max(0.5, scale - 0.1);
    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';
  });

  // Kleine en grote fonts
  let bigFont = false;
  document.getElementById('toggle-font-size').addEventListener('click', () => {
    document.body.style.fontSize = bigFont ? '1rem' : '1.25rem';
    bigFont = !bigFont;
  });

  // Tekst voorlezen
  const readBtn = document.getElementById('read-text');
let isReading = false;
let utterance;

readBtn.addEventListener('click', () => {
  if (!isReading) {
    const content = document.querySelector('main') || document.body;
    const text = content.innerText;
    utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    isReading = true;

    // Zet terug naar false zodra klaar
    utterance.onend = () => {
      isReading = false;
    };
  } else {
    speechSynthesis.cancel();
    isReading = false;
  }
});

