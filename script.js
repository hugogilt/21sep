const petalField = document.querySelector('.petal-field');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function addPetal() {
  if (reducedMotion) return;
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${6 + Math.random() * 7}s`;
  petal.style.animationDelay = `${Math.random() * 2}s`;
  petal.style.transform = `rotate(${Math.random() * 180}deg)`;
  petalField.appendChild(petal);
  window.setTimeout(() => petal.remove(), 15000);
}

for (let index = 0; index < 12; index += 1) window.setTimeout(addPetal, index * 450);
window.setInterval(addPetal, 1700);

document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('.make-wish').addEventListener('click', (event) => {
  const bounds = event.currentTarget.getBoundingClientRect();
  for (let index = 0; index < 14; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'wish-particle';
    particle.textContent = index % 3 === 0 ? '♥' : '✦';
    particle.style.left = `${bounds.left + bounds.width / 2}px`;
    particle.style.top = `${bounds.top + bounds.height / 2}px`;
    particle.style.setProperty('--x', `${(Math.random() - .5) * 180}px`);
    particle.style.setProperty('--y', `${-40 - Math.random() * 150}px`);
    document.body.appendChild(particle);
    window.setTimeout(() => particle.remove(), 1300);
  }
});
