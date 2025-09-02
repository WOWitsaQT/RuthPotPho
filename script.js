const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const body = document.getElementById('modal-body');

const content = {
amiya: { title: 'AMIYA Poster System', body: '<p>Poster exploration…</p>' },
emotions: { title: 'Negative Emotions Lettering', body: '<p>Lettering study…</p>' },
djesse: { title: 'Djesse / Arc Map', body: '<p>Arcs for tracks…</p>' }
};

document.querySelectorAll('[data-modal]').forEach(card => {
card.addEventListener('click', () => {
const key = card.dataset.modal;
title.textContent = content[key]?.title || 'Project';
body.innerHTML = content[key]?.body || '<p>Write-up coming soon.</p>';
modal.showModal();
});
});

document.querySelector('[data-close]').addEventListener('click', () => modal.close());

document.getElementById('year').textContent = new Date().getFullYear();

const grid = document.getElementById('grid');
let ring = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ring')) || 1.6;
const setRing = val => document.documentElement.style.setProperty('--ring', val.toFixed(2));

window.addEventListener('keydown', e => {
if (e.key.toLowerCase() === 'g') {
grid.classList.toggle('on');
} else if (e.key === '[') {
ring = Math.max(.2, ring - .1);
setRing(ring);
} else if (e.key === ']') {
ring = Math.min(3.2, ring + .1);
setRing(ring);
}
});

modal.addEventListener('click', e => {
if (e.target === modal) modal.close();
});
