export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['React 19', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Mantine UI', 'Redux Toolkit', 'TanStack Query', 'Framer Motion', 'Recharts'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'Express 5', 'TypeScript', 'REST', 'GraphQL', 'Socket.io', 'BullMQ', 'WebSockets'],
  },
  {
    label: 'Mobile',
    items: ['React Native', 'Expo', 'NativeWind', 'Push Notifications', 'In-App Purchases', 'Native OAuth'],
  },
  {
    label: 'AI / ML',
    items: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LangChain', 'Pinecone', 'Replicate', 'Vector Search', 'RAG'],
  },
  {
    label: 'Data',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose', 'Zod', 'Pinecone'],
  },
  {
    label: 'Cloud / DevOps',
    items: ['AWS', 'GCP Cloud Run', 'AWS S3', 'GCP Storage', 'Docker', 'Linux', 'GitHub Actions', 'Sentry'],
  },
  {
    label: 'Realtime / Geo',
    items: ['Socket.io', 'Ably', 'WebSockets', 'Mapbox GL', 'MapLibre', 'Leaflet', 'Turf.js', 'Radar SDK'],
  },
  {
    label: 'Design / Product',
    items: ['Figma', 'UX Design', 'Information Architecture', 'Prototyping', 'Design Systems', '3D Modeling'],
  },
];

export const allTechKeywords = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Express',
  'React Native', 'Expo', 'MongoDB', 'PostgreSQL', 'Redis', 'BullMQ',
  'Socket.io', 'WebSockets', 'OpenAI', 'Claude', 'Gemini', 'LangChain',
  'Pinecone', 'AWS', 'GCP', 'Cloud Run', 'Docker', 'Stripe',
  'Tailwind', 'Mantine', 'Figma', 'Mapbox', 'Turf.js', 'FFmpeg',
  'Sharp', 'Radar', 'TanStack Query', 'Redux Toolkit', 'GraphQL',
];
