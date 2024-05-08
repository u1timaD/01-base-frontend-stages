import { PAGES } from './data.js';
import { initMap } from './util/createMap.js';
import { startTimer } from './util/timer.js';

function setActiveLink() {
  const routeLinks = document.querySelectorAll('.route-link');
  routeLinks.forEach((link) => {
    if (window.location.pathname === link.getAttribute('data-route-name')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function loadContent(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((html) => {
      const homeContainer = document.querySelector('.home__container');
      homeContainer.innerHTML = html;
      setActiveLink();
      startTimer();
      if (url === PAGES['/map'].component) {
        initMap();
      }
    })
    .catch((error) => {
      console.error('Error loading content:', error);
    });
}

function renderPage(path) {
  if (PAGES[path]) {
    loadContent(PAGES[path].component);
  }
}

function handleRoute(url) {
  window.history.pushState(null, null, url);
  renderPage(url);
}

window.addEventListener('popstate', () => {
  renderPage(window.location.pathname);
});

function initRouts() {
  const routeLinks = document.querySelectorAll('.route-link');
  routeLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleRoute(link.getAttribute('data-route-name'));
    });
  });
  renderPage(window.location.pathname);
}

document.addEventListener('DOMContentLoaded', () => {
  const localIndex = localStorage.getItem('localIndex');
  if (localIndex) {
    initRouts();
  } else {
    fetch('index.html')
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        localStorage.setItem('localIndex', html);
        document.body.innerHTML = html;
        initRouts();
      })
      .catch((error) => {
        console.error('Error fetching or setting index.html content:', error);
      });
  }
});
