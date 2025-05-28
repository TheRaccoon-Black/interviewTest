import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Home } from './components/home.js';
import { About } from './components/about.js';
import { Contact } from './components/contact.js';

const routes = {
  home: Home,
  about: About,
  contact: Contact
};

function showLoader() {
  document.getElementById('loader').style.display = 'flex';
}

function hideLoader() {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
}

function render() {
  showLoader();
  setTimeout(() => {
    const hash = location.hash.replace('#', '') || 'home';
    const PageComponent = routes[hash] || Home;

    document.body.innerHTML = `
      <div id="loader" class="loader">Loading...</div>
      ${Header()}
      <main>${PageComponent()}</main>
      ${Footer()}
    `;

    hideLoader();
    setActiveLink();
  }, 100);
}

function setActiveLink() {
  const currentHash = location.hash.replace('#', '') || 'home';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.link === currentHash) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('load', render);
window.addEventListener('hashchange', render);

window.submitForm = function (e) {
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 3000);
  return false;
};

window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
  }
});