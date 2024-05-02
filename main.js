import { PAGES } from './data.js';
import { getLocationPath } from './util/getLocationPath.js';
import { startTimer } from './util/timer.js';

const routeBlocks = document.querySelectorAll('.route__block');

function changePage(page) {
  if (!!PAGES[page].path) {
    PAGES[page].component();
  }
  startTimer();
}

routeBlocks.forEach((page, index) => {
  page.addEventListener('click', (e) => {
    const element = e.currentTarget;
    if (element && !element.classList.contains('active')) {
      const routeActive = document.querySelector('.active');
      routeActive.classList.remove('active');

      const routeLink = element.dataset.routeName;
      history.pushState({ page: index }, routeLink, routeLink);
      element.classList.add('active');
    }
    changePage(PAGES[getLocationPath()].path);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (!!PAGES[getLocationPath()].path) {
    const activeRoute = document.querySelector(
      `[data-route-name="${PAGES[getLocationPath()].path}"]`
    );
    activeRoute.classList.add('active');
    changePage(PAGES[getLocationPath()].path);
  } else {
  }
});
