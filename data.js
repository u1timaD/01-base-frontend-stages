import { MapPage } from './pages/MapPage.js';
import { TimerPage } from './pages/TimerPage.js';
import { ActivityPage } from './pages/ActivityPage.js';

const POST_DATA = [
  {
    title: 'Sunset Sunset Sunset',
    image: {
      src: 'wallpaper.jpg',
      description: 'abstract-purple-digital-art-retro-wave-wallpaper',
      width: 1016,
      height: 424,
    },
    time: {
      posted: '10:30',
      ago: 53,
    },
    person: {
      name: 'Jason Anderson',
      quote:
        'Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.',
    },
    comments: 47,
    views: 432,
    hide: '',
  },
  {
    title: 'Cyber Thoughts',
    image: {
      src: 'wallpaper-1.jpg',
      description: 'the-guy-looks-at-the-city-in-the-style-of-cyberpunk',
      width: 1016,
      height: 424,
    },
    time: {
      posted: '10:30',
      ago: 56,
    },
    person: {
      name: 'Artemy Lebedev',
      quote:
        'A person becomes an adult and independent when he begins to make decisions himself and feel responsible for them. A person becomes old when, feeling responsible, he is no longer able to make new decisions, but makes the same ones.',
    },
    comments: 10,
    views: 1003,
    hide: 'accordion--hide',
  },
  {
    title: 'The word of a samurai. Blood on the blade',
    image: {
      src: 'wallpaper-2.jpg',
      description: 'anime-characters-play-the-trumpet-and-have-fun',
      width: 1016,
      height: 424,
    },
    time: {
      posted: '10:30',
      ago: 59,
    },
    person: {
      name: 'Tanjiro Kamado',
      quote:
        "I'm here, standing for this street. The boys are everything to me, and I am everything to the boys. Anyone who knows me knows.",
    },
    comments: 212,
    views: 1300,
    hide: 'accordion--hide',
  },
];

const PAGES = {
  '/': {
    path: '/',
    component: ActivityPage,
  },
  '/map': {
    path: '/map',
    component: MapPage,
  },
  '/timer': {
    path: '/timer',
    component: TimerPage,
  },
};

export { POST_DATA, PAGES };
