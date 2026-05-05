export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  range: string;
  summary: string;
  highlights: string[];
}

export const experience: Role[] = [
  {
    title: 'Development Team Lead',
    company: 'Turing Nova',
    location: 'Multan, Pakistan · Hybrid',
    period: 'Jul 2024 — Mar 2026',
    range: '1 yr 8 mos',
    summary:
      'Leading multi-product engineering across SaaS, AI, real-time, and mobile platforms. Architecting systems, mentoring engineers, and owning delivery from spec to ship.',
    highlights: [
      'Led full-stack delivery of AI advertising, marketplace, and logistics products',
      'Mentored engineers on system design, real-time architecture, and AI integration',
      'Drove cross-team architecture reviews and code quality standards',
    ],
  },
  {
    title: 'Chief Technology Officer',
    company: 'Intelligent Software',
    location: 'Multan, Pakistan · On-Site',
    period: 'May 2022 — Jun 2024',
    range: '2 yrs 2 mos',
    summary:
      'Set technical direction for the company, owning architecture, hiring, infrastructure, and delivery of multiple SaaS products including a 2-year construction management platform.',
    highlights: [
      'Designed and shipped Hexa Desk — full construction-management SaaS',
      'Built Cashflow Planner — financial forecasting with real-time scenario modeling',
      'Defined infrastructure, delivery practices, and long-term tech strategy',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Advicefront',
    location: 'London, UK · Remote',
    period: 'Apr 2021 — Apr 2022',
    range: '1 yr 1 mo',
    summary:
      'Built fintech features across the stack on a UK-based wealth and advice platform — focused on robust APIs, tested workflows, and high-quality client experiences.',
    highlights: [
      'Shipped customer-facing fintech features end-to-end',
      'Worked closely with product to translate financial workflows into clean APIs',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'FNZ Group',
    location: 'London, UK · Remote',
    period: 'Apr 2020 — Mar 2021',
    range: '1 yr',
    summary:
      'Engineered components of large-scale wealth management infrastructure across web and backend services in a regulated financial environment.',
    highlights: [
      'Worked on enterprise wealth platforms with strict reliability + compliance bars',
      'Developed and integrated services across complex distributed systems',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Softangles',
    location: 'Multan, Pakistan · Hybrid',
    period: 'Aug 2018 — Mar 2020',
    range: '1 yr 8 mos',
    summary:
      'Delivered web platforms and mobile apps end-to-end as part of a small senior team — gaining breadth across stacks, infrastructure, and product workflows.',
    highlights: [
      'Cross-stack feature ownership across web + mobile',
      'Worked across product, backend, and DevOps responsibilities',
    ],
  },
  {
    title: 'Game Developer',
    company: 'Hypersoft',
    location: 'Multan, Pakistan · Hybrid',
    period: 'Apr 2017 — Jul 2018',
    range: '1 yr 4 mos',
    summary:
      'Built game systems and 3D/interactive features. Foundation for graphics, physics, and animation patterns later applied to advanced web visualizations.',
    highlights: [
      'Implemented gameplay systems, 3D modeling, and tooling',
      'Foundation in graphics + animation later applied to advanced web UI',
    ],
  },
  {
    title: 'Web Developer',
    company: 'NEXGO',
    location: 'Multan, Pakistan · Hybrid',
    period: 'Jan 2016 — Feb 2017',
    range: '1 yr 2 mos',
    summary:
      'First professional engineering role. Built and shipped marketing sites, dashboards, and integrations from spec to production.',
    highlights: [
      'Shipped production websites and dashboards',
      'Set the foundation for full-stack expertise',
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "Master’s Degree, Computer Software Engineering",
    school: 'Virtual University of Pakistan',
    period: 'Jan 2015 — Dec 2020',
  },
];
