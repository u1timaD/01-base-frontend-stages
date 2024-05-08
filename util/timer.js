import { PAGES } from '../data.js';

export const getTimerValue = (sessionStartTimer) => {
  const duration = Date.now() - sessionStartTimer;
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
};

const formatTime = (timeName) =>
  timeName.toString().length !== 2 ? `0${timeName}` : timeName;

const displayTimer = (timerContent, spanTimer) => {
  let sessionStartTimer = sessionStorage.getItem('sessionStartTimer');

  // В данный момент оставил так, потому что по тз надо чтобы сбрасывалось только при закрытии вкладки. Если без сессии, то в локале, но надо перед закрытием вкладки очищать локал. В данном случае сессия кажется хорошим решением. 
  if (!sessionStartTimer) {
    sessionStartTimer = Date.now();
    sessionStorage.setItem('sessionStartTimer', sessionStartTimer);
  }

  const timerValue = getTimerValue(sessionStartTimer);
  if (timerContent) {
    spanTimer.textContent = timerValue;
    timerContent.append(spanTimer);
  }
};

export const startTimer = () => {
  let timerContent, spanTimer;
  if (PAGES[window.location.pathname]?.path === PAGES['/timer']?.path) {
    timerContent = document.querySelector('.timer__content');
    spanTimer = document.createElement('span');
  }
  displayTimer(timerContent, spanTimer);

  setInterval(() => {
    displayTimer(timerContent, spanTimer);
  }, 1000);
};
