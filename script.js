document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

const form = document.getElementById('appointment-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.classList.remove('error');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (!name || !email) {
    status.textContent = 'Please share your name and email so we can get back to you.';
    status.classList.add('error');
    return;
  }
  status.textContent = `Thanks, ${name.split(' ')[0]}! We'll be in touch within one business day.`;
  form.reset();
});
