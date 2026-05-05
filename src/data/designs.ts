export interface Design {
  title: string;
  caption: string;
  image: string;
  span?: 'wide' | 'tall' | 'normal';
}

const base = `${import.meta.env.BASE_URL}designs/`;

export const designs: Design[] = [
  {
    title: 'Decans AI',
    caption: 'Astrology SaaS · Web Dashboard',
    image: `${base}Decans AI Astrology.png`,
    span: 'wide',
  },
  {
    title: 'Pushstarter',
    caption: 'Goal Tracker · Mobile App',
    image: `${base}Pushstarter.png`,
  },
  {
    title: 'Perspectrics',
    caption: 'Finance AI Assistant · SaaS',
    image: `${base}Perspectrics.png`,
    span: 'wide',
  },
  {
    title: 'Project Tracker',
    caption: 'Finance SaaS · Web Portal',
    image: `${base}Project Tracker.png`,
  },
  {
    title: 'Groome',
    caption: 'Salon Management System',
    image: `${base}Groome.png`,
  },
  {
    title: 'Shoutout',
    caption: 'Real-time Encrypted Social',
    image: `${base}Shoutout App.png`,
  },
  {
    title: 'Events',
    caption: 'Events Discovery · Mobile',
    image: `${base}Events App.png`,
  },
  {
    title: 'Pet Profiled',
    caption: 'Pet Habits Tracking',
    image: `${base}Pet Profiled.png`,
  },
];
