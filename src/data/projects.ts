export type ProjectCategory = 'Web' | 'Mobile' | 'AI' | 'Realtime' | 'Bot' | 'SaaS';

export interface Project {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  tagline: string;
  problem: string;
  challenges: string[];
  solutions: string[];
  stack: string[];
  highlights: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'ads-at-scale',
    name: 'Ads at Scale',
    categories: ['SaaS', 'AI', 'Web'],
    tagline:
      'AI-powered Meta advertising platform with generative creative, talking-head video, and auto-scaling cloud compute.',
    problem:
      'Teams running Meta ad campaigns at scale juggle a fragmented toolchain — creative in one tool, copy in another, video in a third, and publishing back in Meta Business Manager. Built a unified workspace where marketers generate AI assets, edit media, manage brand guidelines, and ship campaigns directly to Meta.',
    challenges: [
      'Coordinating multiple AI providers (OpenAI, Gemini, Replicate) for image, video, copy and talking-head generation through a single async pipeline.',
      'Server-side video trimming, audio mixing and subtitle extraction without blocking the API or starving other tenants.',
      'Real-time job progress across concurrent users and isolated business contexts.',
      'Compute-intensive jobs hitting the ceiling of in-process BullMQ workers.',
      'Deep Meta Ads API integration for ad set creation, analysis and publishing.',
    ],
    solutions: [
      'Built a `JobStatusTracker` over Socket.io + a NestJS WebSocket gateway, scoping every event to the active business context.',
      'Routed all AI and media work through BullMQ queues with per-job-type workers and automatic retries.',
      'Layered a dedicated meta-ads-ai service over the core Meta Ads API for AI-driven creative, audience, and copy variants.',
      'Organized features into Genie (AI asset suite) and SAM (audio/video editing) modules, each backed by FFmpeg and Sharp pipelines.',
      'Offloaded the heaviest jobs to ephemeral Google Cloud Run Jobs via a `CloudRunJobService`, scaling to thousands of concurrent containers without touching the main API.',
    ],
    stack: [
      'NestJS',
      'TypeScript',
      'MongoDB',
      'BullMQ',
      'Redis',
      'Socket.io',
      'GCP Cloud Run',
      'Stripe',
      'OpenAI',
      'Gemini',
      'Replicate',
      'FFmpeg',
      'React 19',
      'Vite',
      'Mantine UI',
    ],
    highlights: [
      'Infinite-scale compute via Cloud Run Jobs',
      'Multi-provider AI orchestration',
      'Realtime job tracker across tenants',
    ],
    featured: true,
  },
  {
    slug: 'decans',
    name: 'Decans',
    categories: ['SaaS', 'AI', 'Web'],
    tagline:
      'Precision astrology platform with sub-arcminute ephemeris accuracy, AI interpretations, and 3D chart visualization.',
    problem:
      'Astrology software is split between oversimplified consumer apps and inaccessible professional desktop tools. Built a unified platform that combines rigorously accurate planetary computations with AI-generated personalized interpretations and continuous wellness tracking.',
    challenges: [
      'Achieving ±0.01° planetary precision across centuries of charts in a web environment.',
      'Generating contextually coherent astrological readings via OpenAI without drift across natal, predictive, and compatibility flows.',
      'Implementing the Human Design system on top of standard astrological calculations.',
      'Rendering complex relationship trees and orbital diagrams interactively for non-technical users.',
    ],
    solutions: [
      'Integrated the JPL DE440 ephemeris (114 MB) into a custom `decan-astrology-engine` package powering every chart type.',
      'Built a modular AI insights service that passes structured chart data to OpenAI and returns consistent guidance across reading types.',
      'Stood up a dedicated Human Design module computing gates, channels, and authority types from birth data.',
      'Used React Flow for relationship trees and OGL-based 3D for orbital visualizations — exploration over static images.',
      'Layered a server-side mood reminder scheduler on top of the user’s current transit data.',
    ],
    stack: [
      'Express 5',
      'TypeScript',
      'MongoDB',
      'OpenAI',
      'Stripe',
      'Socket.io',
      'React 19',
      'Vite',
      'Mantine UI',
      'Three.js (OGL)',
      'React Flow',
      'Recharts',
    ],
    highlights: ['Custom ephemeris engine', 'AI-driven readings', 'Interactive 3D charts'],
    featured: true,
  },
  {
    slug: 'service-connect',
    name: 'Service Connect',
    categories: ['SaaS', 'Realtime', 'Mobile'],
    tagline:
      'Multi-sided service marketplace with offer negotiation, dispute resolution, and multi-channel notifications.',
    problem:
      'Service marketplaces struggle to orchestrate discovery, negotiation, booking, payment, task execution and dispute resolution across web and mobile in a reliable way. Built a unified backend that runs every workflow with realtime communication and clean escalation paths.',
    challenges: [
      'Coordinating offer → counter-offer → booking → payment lifecycle across two parties.',
      'Providing structured dispute escalation with admin oversight and accountability logging.',
      'Reliable multi-channel delivery (push, SMS, email) without duplication or loss.',
      'Verifying provider credentials and matching only qualified pros to relevant requests.',
      'Keeping API responsive while running heavy notification, payment, and document jobs.',
    ],
    solutions: [
      'Modular NestJS architecture: auth, bookings, tasks, chat, reviews, disputes, offers, promos, support — each its own module.',
      'Persistent Socket.io chat with delivery confirmation and typing indicators across mobile + admin.',
      'BullMQ notification queue with per-channel workers (Firebase, Expo, Twilio) and retry logic.',
      'Multi-stage dispute system that auto-files support tickets and logs every admin action.',
      'Payment service interface abstracting Stripe and Authorize.net behind a single contract.',
    ],
    stack: [
      'NestJS 11',
      'TypeScript',
      'MongoDB',
      'Redis',
      'BullMQ',
      'Socket.io',
      'Stripe',
      'Authorize.net',
      'Firebase',
      'Expo',
      'Twilio',
      'Sentry',
      'Next.js',
      'React 19',
    ],
    highlights: ['End-to-end booking lifecycle', 'Multi-channel notifications', 'Dispute escalation system'],
    featured: true,
  },
  {
    slug: 'ace-roadside',
    name: 'Ace Roadside',
    categories: ['SaaS', 'Realtime', 'Mobile'],
    tagline:
      'On-demand roadside assistance with real-time dispatch, geo-aware matching, and multi-gateway billing.',
    problem:
      'Roadside assistance is time-critical. Coordinating providers, tracking jobs in realtime, processing payments, and managing a growing provider network through disconnected tools causes delays and erodes trust. Built a unified platform that automates dispatch, enables location-aware matching, and gives admins full operational visibility.',
    challenges: [
      'Matching stranded drivers with the nearest provider and pushing live updates to both sides.',
      'Reliable mapping and geolocation that scales without runaway API costs.',
      'Supporting Authorize.net and Stripe in parallel without forking billing logic.',
      'Managing providers, analytics, promos, referrals, reviews, support, and subscriptions from one backend.',
      'Dual-database (Mongo + MySQL) without sacrificing query speed.',
    ],
    solutions: [
      'Socket.io dispatch layer broadcasting job availability to nearby providers and pushing live status to customers.',
      'Radar SDK for backend geofencing with MapLibre GL on the frontend for live-position tracking.',
      'Unified payment module abstracting Authorize.net and Stripe behind a shared interface.',
      'Modular NestJS architecture per business domain — testable and independently scalable.',
      'Auto-generated Swagger docs to keep frontend integration fast and contract-stable.',
    ],
    stack: [
      'NestJS 11',
      'TypeScript',
      'MongoDB',
      'MySQL',
      'Socket.io',
      'Authorize.net',
      'Stripe',
      'Radar SDK',
      'MapLibre GL',
      'Twilio',
      'Firebase',
      'React 19',
      'Next.js 15',
    ],
    highlights: ['Realtime dispatch', 'Live geo tracking', 'Dual-gateway billing'],
    featured: true,
  },
  {
    slug: 'plurppl',
    name: 'Plurppl',
    categories: ['SaaS', 'Realtime', 'Mobile'],
    tagline:
      'Real-time logistics platform with geo-buffer dispatch, draw-on-map zones, and webhook delivery guarantees.',
    problem:
      'Logistics across multiple zones needs more than a flat order list. Dispatchers need to visualize delivery areas, assign drivers from live location, and respond to status changes instantly. Built geographic intelligence directly into the dispatch flow.',
    challenges: [
      'Determining driver eligibility for an order via geographic buffer math, not Euclidean radius.',
      'Broadcasting live driver locations without overwhelming the backend.',
      'Tracking orders + tickets through many state transitions with audit history.',
      'Reliable, ordered webhook delivery to external subscribers even under outages.',
      'Letting dispatchers draw and edit service zones directly on the map.',
    ],
    solutions: [
      'Turf.js geospatial engine for buffer calculations and point-in-polygon checks on the backend.',
      'Hybrid Ably + Socket.io realtime layer for low-latency driver pings and order status pushes.',
      'Mapbox GL Draw integration storing zone polygons as GeoJSON in MongoDB.',
      'BullMQ webhook queue with retry + exponential backoff for guaranteed delivery.',
      'Field-agent React Native app that confirms pickups and broadcasts live location.',
    ],
    stack: [
      'NestJS 9',
      'TypeScript',
      'MongoDB',
      'Socket.io',
      'Ably',
      'Turf.js',
      'BullMQ',
      'Redis',
      'React 18',
      'Mapbox GL',
      'React Native (Expo)',
    ],
    highlights: ['Geo-buffer dispatch', 'Draw-on-map zones', 'Reliable webhooks'],
    featured: true,
  },
  {
    slug: 'perspectrics',
    name: 'Perspectrics',
    categories: ['SaaS', 'AI', 'Web'],
    tagline:
      'Business analytics and financial intelligence with LangChain RAG, Pinecone vectors, and natural-language QuickBooks queries.',
    problem:
      'SMBs run on QuickBooks but can’t extract strategic insight from their financial data. Reports are static, querying needs accounting expertise, and there’s no intelligent layer for plain-English questions. Built a self-service intelligence layer over live QuickBooks data.',
    challenges: [
      'Letting non-technical owners query their books in plain English with accurate, contextual answers.',
      'Keeping the platform’s dataset in sync with live QuickBooks without manual exports.',
      'Feeding the chatbot only the relevant slice of large financial datasets per query.',
      'Tiered Stripe subscriptions plus usage-based billing for AI credits.',
      'On-demand PDF and spreadsheet export from filtered financial views.',
    ],
    solutions: [
      'LangChain + Pinecone RAG pipeline embedding financial records as vectors and retrieving only relevant context per query.',
      'QuickBooks OAuth sync pulling live data into MongoDB on a schedule.',
      'Stripe subscription billing with webhook-driven access gating.',
      'Redis caching on hot financial queries for fast repeat dashboards.',
      'pdfkit + xlsx report service for one-click exports from any view.',
    ],
    stack: [
      'Express 5',
      'TypeScript',
      'MongoDB',
      'LangChain',
      'OpenAI',
      'Pinecone',
      'Redis',
      'Socket.io',
      'Stripe',
      'QuickBooks API',
      'React 19',
      'Next.js 15',
    ],
    highlights: ['LangChain RAG', 'Live QuickBooks sync', 'Natural-language analytics'],
    featured: true,
  },
  {
    slug: 'mindful-journal',
    name: 'Mindful Journal',
    categories: ['AI', 'Web'],
    tagline:
      'AI-powered emotional wellness journal that turns free-form entries into structured emotion analytics with Claude.',
    problem:
      'Most journaling apps are passive text editors with zero insight into what users write. Built an accessible AI-powered tool that translates everyday journal entries into structured emotional data for personal growth tracking.',
    challenges: [
      'Generating reliable, nuanced emotional intensity scores from free-form text.',
      'Mapping eight core emotions (joy, sadness, anger, fear, surprise, disgust, trust, anticipation) into a comparable scoring model.',
      'Deriving a meaningful composite wellness score from multiple emotional readings.',
      'Visualizing emotional trends in a way that genuinely helps reflection.',
      'Generating contextual writing prompts that lower the barrier to journaling.',
    ],
    solutions: [
      'Anthropic Claude integration scoring per-emotion intensity (1–10) and overall wellness with consistent structured output.',
      'Emotion-aware prompt generator drawing from a mapped library of writing prompts.',
      'Recharts analytics dashboard with emotion trend lines, wellness trajectories, and distribution breakdowns.',
      'User-adjustable intensity sliders so users can override or confirm AI readings.',
      'Date-filtered history with full editing for revisiting and updating entries.',
    ],
    stack: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Express 5.1', 'Anthropic Claude API', 'Recharts'],
    highlights: ['Claude API analysis', 'Eight-emotion model', 'Reflective analytics'],
    featured: true,
  },
  {
    slug: 'pushstarter',
    name: 'Pushstarter',
    categories: ['Mobile', 'AI'],
    tagline:
      'Goal-tracking + milestone management for founders, with AI guidance, push notifications, and dual-platform monetization.',
    problem:
      'Early-stage founders struggle with accountability outside of accelerator programs. Generic to-do apps lack startup-specific structure (milestones, funding, traction) and offer no intelligent guidance when teams stall.',
    challenges: [
      'Modeling goals flexibly across product, revenue, hiring, and fundraising without becoming complex.',
      'Triggering meaningful achievement badges at the right moment.',
      'Generating relevant AI suggestions instead of generic motivational fluff.',
      'Aligning Stripe (web) and RevenueCat (native IAP) on a single entitlement model.',
      'Driving engagement through timely, never-spammy push notifications.',
    ],
    solutions: [
      'Goal → Milestone → Activity log MongoDB model for granular accountability.',
      'Event-driven badge engine listening on activity logs and dispatching push immediately on qualifying events.',
      'OpenAI integration with milestone-seeded prompts producing startup-specific guidance.',
      'RevenueCat + Stripe writing to the same entitlement document, gating premium features consistently.',
      'Behaviorally triggered Expo push pipeline for reminders, badges, and acknowledgements.',
    ],
    stack: [
      'Express',
      'TypeScript',
      'MongoDB',
      'OpenAI',
      'Stripe',
      'RevenueCat',
      'Expo Push',
      'React Native (Expo)',
      'Redux Toolkit',
    ],
    highlights: ['Milestone-first model', 'AI startup coach', 'Native IAP + Stripe'],
    featured: true,
  },
  {
    slug: 'hexa-desk',
    name: 'Hexa Desk',
    categories: ['SaaS', 'Web'],
    tagline:
      'All-in-one construction management SaaS with task workflows, document annotation, and real-time collaboration.',
    problem:
      'Construction teams juggled scheduling, RFIs, document review, and email chains across half a dozen tools. Designed and led an integrated platform reducing operational overhead and giving every stakeholder a single source of truth.',
    challenges: [
      'Multi-role collaboration on the same project artifacts without stepping on each other.',
      'Document annotation that survives versioning and audit needs.',
      'Email integration that didn’t become a second inbox to maintain.',
      'A scheduling and task system flexible enough for hundreds of construction-specific workflows.',
    ],
    solutions: [
      'Task management, scheduling, document annotation, and email all unified into one workspace.',
      'Real-time collaboration with audit trails capturing every state change.',
      'Role-scoped views so field, office, and client roles each see only what they need.',
      'Operational reduction across day-to-day construction workflows.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'WebSockets'],
    highlights: ['Real-time collaboration', 'Document annotation', '2yr 5mo build, shipped to production'],
    featured: true,
  },
  {
    slug: 'cashflow-planner',
    name: 'Cashflow Planner',
    categories: ['SaaS', 'Web'],
    tagline:
      'Financial forecasting tool with dynamic scenario modeling and a real-time "what-if" simulation engine.',
    problem:
      'Finance teams ran scenario planning in fragile spreadsheets that broke as soon as a variable changed. Built an interactive forecasting product that lets teams explore options visually and react fast.',
    challenges: [
      'Real-time recalculation as variables change without UI lag.',
      'Visualizing complex financial relationships in a way clients could grasp without training.',
      'Model integrity across many concurrent "what-if" branches.',
    ],
    solutions: [
      'Built a "what-if" engine for real-time financial simulations across scenario branches.',
      'Interactive visualizations turning model output into client-ready insights.',
      'Multi-scenario modeling with diff views between branches.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'D3'],
    highlights: ['"What-if" engine', 'Multi-scenario modeling', 'Client-ready visuals'],
    featured: true,
  },
  {
    slug: 'mybrella',
    name: 'Mybrella',
    categories: ['SaaS', 'Realtime', 'Mobile'],
    tagline:
      'Multi-branch POS and business management with branch-isolated inventory, trading sessions, and real-time terminal sync.',
    problem:
      'Retail businesses across multiple branches struggle to manage inventory, staff permissions, and sales from one system. Most affordable POS tools lack branch-level segregation, real-time reporting, or programmatic refunds. Built a complete operational toolkit on a single backend.',
    challenges: [
      'Tracking stock independently per branch while exposing consolidated reports for HQ.',
      'Structuring sales around discrete trading sessions for accurate end-of-day reconciliation.',
      'Refunds that preserve an immutable audit trail.',
      'Real-time POS state across devices and staff within a branch.',
      'Fine-grained role permissions for staff and devices.',
    ],
    solutions: [
      'Branch-scoped Mongo schema across inventory, users, sessions, transactions.',
      'Trading session architecture with explicit open/close events as natural reconciliation boundaries.',
      'Immutable refund records linked to original transactions.',
      'Socket.io broadcast of session state, stock updates, and new transactions to all terminals in a branch.',
      'Auto-generated Swagger docs for fast frontend + mobile integration.',
    ],
    stack: ['Express 4', 'TypeScript', 'MongoDB', 'Redis', 'Socket.io', 'Stripe', 'ImageKit', 'React 19', 'Mantine UI', 'React Native (Expo)'],
    highlights: ['Branch-isolated inventory', 'Trading session reconciliation', 'Real-time POS sync'],
    featured: true,
  },
  {
    slug: 'slides-deck',
    name: 'Slides Deck',
    categories: ['Mobile', 'AI'],
    tagline:
      'Cross-platform PPTX generation, conversion, and AI-assisted authoring with a Python microservice for heavy processing.',
    problem:
      'Editing PPTX requires desktop software and collaboration is poor on mobile. Built a mobile-native tool that treats PPTX as structured data — editable on the go and regenerated on demand.',
    challenges: [
      'Round-trippable PPTX → JSON → PPTX conversion preserving layout and styling.',
      'Translating PDF pages into slide-accurate PowerPoint slides without a Node-native option.',
      'Long-running CPU-bound conversions that can’t live in the request cycle.',
      'AI content generation that respects existing slide structure.',
      'Securely delivering generated files to mobile clients.',
    ],
    solutions: [
      'Dedicated Python FastAPI microservice using `python-pptx` + `pdf2image` for the heavy lift.',
      'BullMQ queue dispatching jobs to the Python service with Socket.io progress events back to the app.',
      'Structured PPTX JSON schema supporting `pptx-to-json` and `json-to-pptx` endpoints.',
      'OpenAI integration generating slide text in context with usage tracked per user.',
      'AWS S3 signed URLs for short-lived secure file delivery.',
    ],
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'AWS S3', 'GCP Storage', 'BullMQ', 'Socket.io', 'OpenAI', 'FastAPI', 'python-pptx', 'React Native (Expo)'],
    highlights: ['Polyglot architecture', 'Round-trip PPTX schema', 'AI slide authoring'],
    featured: true,
  },
  {
    slug: 'gng-carwash',
    name: 'GNG Carwash',
    categories: ['Mobile', 'SaaS'],
    tagline:
      'Mobile-first on-demand carwash booking with Stripe, Apple/Google OAuth, and dual push pipelines.',
    problem:
      'Carwash businesses with mobile or scheduled services lacked purpose-built booking software. Built a native app with vehicle and address management plus operator analytics behind it.',
    challenges: [
      'Smooth native booking UX across services, vehicles, addresses, and calendar scheduling.',
      'Stripe payment with reliable webhook-driven booking confirmation.',
      'Apple, Google, and phone-based login on a native app with consistent identity.',
      'Push notifications across iOS + Android via FCM and Expo.',
      'Operator visibility into bookings, revenue, customer behavior, and audit.',
    ],
    solutions: [
      'Expo + NativeWind app with polished UI on iOS and Android from one codebase.',
      'Stripe webhook integration auto-confirming bookings and triggering downstream notifications.',
      'Passport.js multi-strategy OAuth normalizing all logins into a single user document.',
      'FCM + Expo dual notification pipeline with per-user preferences.',
      'Admin analytics service aggregating booking, revenue, and audit data.',
    ],
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'Stripe', 'Socket.io', 'BullMQ', 'Redis', 'React Native (Expo)', 'NativeWind', 'AWS S3', 'Firebase'],
    highlights: ['Stripe webhook bookings', 'Tri-provider auth', 'Cross-platform push'],
    featured: false,
  },
  {
    slug: 'freight-team',
    name: 'Freight Team',
    categories: ['SaaS', 'Realtime'],
    tagline:
      'Logistics + shipment management with realtime tracking, public PRO lookup, and queued document workflows.',
    problem:
      'Freight ops involve high shipment volumes and many stakeholders. Without a centralized platform, tracking happens by phone or spreadsheet and customer visibility suffers. Built a unified platform with realtime updates and reliable document handling.',
    challenges: [
      'Live status updates without page refreshes or polling.',
      'Secure document storage and stakeholder access at the right time.',
      'Quote workflow that doesn’t lose inbound requests.',
      'Reliable email + in-app notification delivery on critical events.',
      'Background jobs that don’t block the API under load.',
    ],
    solutions: [
      'Socket.io realtime broadcast of shipment status changes to connected clients.',
      'Unauthenticated public tracking by PRO number — no account needed.',
      'BullMQ + Redis queues for notification dispatch and document generation with retries.',
      'Google Cloud Storage with signed URLs for time-limited document access.',
      'Auto-generated Swagger docs for fast frontend integration.',
    ],
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'BullMQ', 'Socket.io', 'GCP Storage', 'ImageKit', 'Next.js 16', 'React 19'],
    highlights: ['Public PRO tracking', 'Queued document jobs', 'Realtime shipment updates'],
    featured: false,
  },
  {
    slug: 'danihildy',
    name: 'Danihildy',
    categories: ['SaaS', 'Web'],
    tagline:
      'Healthcare staffing + scheduling with map-based assignment, audit trails, and queued bulk visit imports.',
    problem:
      'Home healthcare orgs juggle distributed field staff, patient visits, geographic coverage, and bulk scheduling. Manual tracking creates scheduling errors, unserved patients, and poor accountability. Built a centralized management system.',
    challenges: [
      'Matching workers to visits by location, qualifications, and slots without double-booking.',
      'Visualizing coverage gaps so no patient lacks a nearby caregiver.',
      'Importing huge visit batches without blocking the API.',
      'Audit trail for every scheduling action.',
      'Patient data privacy.',
    ],
    solutions: [
      'Worker-queue based bulk import with admin-visible status — no API timeouts.',
      'Geocoding cache layer reducing external calls and speeding geographic matching.',
      'Employee-area assignment with Leaflet + Google Maps overlays.',
      'Centralized activity tracker capturing every event with timestamp + user.',
      'Role-based dashboard scoping data to staff vs admin.',
    ],
    stack: ['Express 5', 'TypeScript', 'MongoDB', 'Worker Queues', 'React 19', 'Mantine UI', 'Google Maps', 'Leaflet', 'Recharts'],
    highlights: ['Geo coverage maps', 'Queued bulk imports', 'Compliance-ready audit trail'],
    featured: false,
  },
  {
    slug: 'gang-sheet-designer',
    name: 'Gang Sheet Designer',
    categories: ['SaaS', 'Web', 'AI'],
    tagline:
      'Print-on-demand DTF design platform with async image processing and partner API key issuance.',
    problem:
      'Print-on-demand for direct-to-film printing was fragmented: separate design tools, inconsistent files, manual order tracking. Built an integrated editor + order pipeline + partner API.',
    challenges: [
      'Optimizing layout of multiple designs on one print sheet within bleed and resolution rules.',
      'Auto-processing uploads to print specs (resolution, background removal, format).',
      'Async file processing without blocking the API.',
      'Region-friendly payments.',
      'Programmatic order submission for integration partners.',
    ],
    solutions: [
      'Sharp pipeline for server-side image optimization and format conversion.',
      'BullMQ + Redis queues for sheet assembly and image processing.',
      'Peach Payments integration with webhook-driven order status updates.',
      'API key management service with scoped keys, per-key rate limiting, and Swagger docs.',
      'OpenAI design suggestions for layout and composition feedback.',
    ],
    stack: ['Express', 'Node.js', 'MongoDB', 'Redis', 'BullMQ', 'Sharp', 'OpenAI', 'Peach Payments', 'React', 'Vite'],
    highlights: ['Async print pipeline', 'Partner API keys', 'AI layout suggestions'],
    featured: false,
  },
  {
    slug: 'reword',
    name: 'Reword',
    categories: ['SaaS', 'Web'],
    tagline:
      'Multi-role reputation platform with Google My Business sync, Stripe billing, and i18n affiliate program.',
    problem:
      'Businesses needed a unified tool to monitor reputation, request reviews, and manage their Google My Business listing — alongside an affiliate referral program. Built three role-based portals against one backend.',
    challenges: [
      'GMB sync without manual exports.',
      'Three distinct experiences (admin, business, affiliate) on one backend without permission leakage.',
      'Accurate affiliate attribution and transparent commission display.',
      'Multi-provider OAuth without identity fragmentation.',
      'Multilingual affiliate + business UI from one codebase.',
    ],
    solutions: [
      'GMB API integration syncing data on a schedule and posting review responses from the dashboard.',
      'Role-verified JWT middleware on every route, scoping queries to the user’s role.',
      'Referral tracking module with QR-shareable links and per-period commissions.',
      'Passport.js strategies (Google, Apple, Facebook, Twitter) merged into one user document.',
      '`react-i18next` and `next-intl` powering runtime language switching across surfaces.',
    ],
    stack: ['Express 4', 'TypeScript', 'MongoDB', 'Firebase', 'Stripe', 'Google Maps', 'Passport.js', 'React 18', 'Vite', 'Next.js 15'],
    highlights: ['GMB sync', 'Multi-portal architecture', 'Multi-provider OAuth'],
    featured: false,
  },
  {
    slug: 'bizreview',
    name: 'BizReview',
    categories: ['SaaS', 'Web'],
    tagline:
      'Business review + reputation management with Google My Business integration and an affiliate growth program.',
    problem:
      'Businesses managed online reputation across multiple review channels while running affiliate referral programs and trying to keep admins informed with live analytics. Built a unified platform that fixes the data silos and the inconsistent review pipeline.',
    challenges: [
      'Distinct interfaces for admins, businesses, affiliates with different feature sets.',
      'Realtime GMB sync.',
      'Accurate affiliate attribution + commission payouts.',
      'Multilingual affiliate + business dashboards.',
      'Multi-provider auth without identity fragmentation.',
    ],
    solutions: [
      'Separated React/Vite apps per role sharing one Express backend behind scoped JWT middleware.',
      'GMB + Maps integration syncing listings without manual updates.',
      'Tracked referral system with QR-shareable links and transparent payouts.',
      '`react-i18next` + `next-intl` powering runtime language switching.',
      'Passport.js multi-strategy auth normalizing every social profile.',
    ],
    stack: ['Express', 'TypeScript', 'MongoDB', 'Firebase', 'Stripe', 'Google Maps', 'React 18', 'Vite', 'Mantine UI'],
    highlights: ['Role-based portals', 'GMB integration', 'Affiliate commission engine'],
    featured: false,
  },
  {
    slug: 'abostile',
    name: 'Abostile',
    categories: ['SaaS', 'Realtime', 'Mobile'],
    tagline:
      'Social connectivity platform with Yoti identity verification, real-time chat, and a typed monorepo architecture.',
    problem:
      'A trusted social platform demands more than auth — verified identities, realtime communication, and privacy controls coordinated across web and native. Built it across an admin panel, landing site, and React Native app.',
    challenges: [
      'Verifying identity without onboarding friction.',
      'Real-time messaging at scale across web + mobile with consistent state.',
      'Sharing logic across an admin React app, Next.js landing, and Expo app.',
      'Powerful admin oversight without exposing sensitive ops to lower roles.',
      'Hardening the API while integrating external image + identity providers.',
    ],
    solutions: [
      'Yoti integration for cryptographically verified profiles.',
      'Socket.io persistent WebSocket layer for live chat and connection notifications.',
      'Monorepo-style multi-app architecture sharing a typed contract layer.',
      'TanStack Query + role-scoped admin dashboard.',
      'Helmet + rate limiting + CORS hardening, ImageKit for safe media.',
    ],
    stack: ['Express', 'TypeScript', 'MongoDB', 'Socket.io', 'Firebase', 'ImageKit', 'Yoti', 'React 19', 'Next.js 15', 'React Native (Expo)'],
    highlights: ['Identity-verified social', 'Realtime chat', 'Multi-app monorepo'],
    featured: false,
  },
  {
    slug: 'hayk',
    name: 'Hayk',
    categories: ['SaaS', 'Web'],
    tagline:
      'Vehicle fleet + financial tracking with Zod-driven Swagger docs and role-scoped data visibility.',
    problem:
      'Fleet owners track vehicle expenses in spreadsheets and lose track of profitability per vehicle. Built a unified system with role-based access and live financial dashboards.',
    challenges: [
      'Categorizing expenses across fuel, maintenance, insurance, admin and rolling up to per-vehicle totals.',
      'Preventing malformed financial records.',
      'Role-based data scoping without duplicating logic.',
      'API docs that stay synced as the schema evolves.',
      'Lightweight security hardening on Express.',
    ],
    solutions: [
      'Zod schema validation at every endpoint.',
      'Zod → Swagger pipeline keeping API docs always in sync with validation.',
      'JWT middleware injecting role into request context for service-layer scoping.',
      'Recharts dashboard for expense trends and per-vehicle breakdowns.',
      'Helmet + Morgan + rate limiting on Express.',
    ],
    stack: ['Express 5', 'TypeScript', 'MongoDB', 'Zod', 'React 19', 'Vite', 'Mantine UI', 'Recharts'],
    highlights: ['Zod-driven Swagger', 'Role-scoped queries', 'Financial dashboards'],
    featured: false,
  },
  {
    slug: 'vision-of-marketing',
    name: 'Vision of Marketing',
    categories: ['SaaS', 'Web'],
    tagline:
      'Full-stack Next.js CMS with WYSIWYG editor, per-page SEO, and dynamic CTA + carousel content.',
    problem:
      'Marketing teams outgrow basic CMS tools that lack per-page SEO and multilingual control. Built a CMS where copy, SEO, and creatives can change without a redeploy.',
    challenges: [
      'Rich content editing for non-technical staff including math + media.',
      'Per-page SEO from a central admin.',
      'Multilingual delivery without duplicating page routes.',
      'Dynamic CTA copy and carousel slides without redeploys.',
      'QR-coded marketing assets generated in-platform.',
    ],
    solutions: [
      'TipTap WYSIWYG with image, link, sub/superscript, and KaTeX math.',
      '`/api/page-seo` consumed by Next.js `generateMetadata` for runtime SEO updates.',
      '`next-intl` runtime language switching with translated content stored in MongoDB.',
      '`/api/cta-content` driving every CTA element site-wide.',
      'Embla Carousel autoplay driven by admin-managed content.',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Mantine UI', 'TipTap', 'next-intl', 'MongoDB', 'ImageKit'],
    highlights: ['WYSIWYG with math', 'Runtime SEO', 'Multilingual content'],
    featured: false,
  },
  {
    slug: 'sw-carts',
    name: 'SW Carts',
    categories: ['Web', 'SaaS'],
    tagline:
      'Automated golf-cart rental booking with realtime calendar, fleet management, and dynamic pricing.',
    problem:
      'Golf cart rental ops still ran on phone calls and manual calendars. Built a fully automated reservation flow with self-service booking and operator analytics.',
    challenges: [
      'Live cart-level availability without double bookings.',
      'Per-cart specs, pricing, and schedule management.',
      'Reducing operator touchpoints to zero.',
      'Dynamic pricing without code changes.',
      'Utilization analytics for ops decisions.',
    ],
    solutions: [
      'Mantine availability calendar scoped per cart, marking booked slots unavailable in realtime.',
      'Operator dashboard listing every cart with current bookings + pricing.',
      'No-touch booking flow: reservation → confirmation → availability update with no human in the loop.',
      'Dynamic pricing module with rate-per-tier configuration.',
      'Recharts utilization analytics across the fleet.',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Mantine UI', 'Recharts', 'Embla Carousel'],
    highlights: ['Automated booking', 'Realtime availability', 'Dynamic pricing'],
    featured: false,
  },
  {
    slug: 'study-quest',
    name: 'Study Quest',
    categories: ['Web'],
    tagline:
      'Educational content + study tracking with TipTap + KaTeX math, ImageKit media, and a Next.js full-stack architecture.',
    problem:
      'Educational platforms treat content as an afterthought, with no math notation or structured layouts. Built a self-directed learning tool with a real authoring experience for STEM content.',
    challenges: [
      'Inline + block math rendering without writing raw LaTeX in plain fields.',
      'Image and media management within a fluid editing experience.',
      'Per-user content scoping without complex APIs.',
      'Iterative editing without version conflicts.',
      'Lightweight full-stack architecture.',
    ],
    solutions: [
      'TipTap + KaTeX integration for inline `$...$` and block `$$...$$` math.',
      'ImageKit-powered editor uploads with optimized delivery.',
      'Next.js API routes + Mongoose as a single full-stack deployment unit.',
      'JWT middleware scoping content to the authenticated user.',
      'Structured Mongoose docs for TipTap JSON output with schema validation.',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'TipTap', 'KaTeX', 'MongoDB', 'ImageKit', 'JWT'],
    highlights: ['Math-aware editor', 'Single-deploy full-stack', 'JWT-scoped study tracking'],
    featured: false,
  },
  {
    slug: 'aiden',
    name: 'Aiden',
    categories: ['Bot', 'AI'],
    tagline:
      'Discord bot suite for community automation + crypto market intelligence with scheduled heatmaps and sentiment.',
    problem:
      'Crypto communities use fragmented tools — dashboards, external apps, manual chart checks — to stay informed. Built integrated automation directly inside Discord.',
    challenges: [
      'Sourcing + normalizing crypto data across providers without rate limits.',
      'Scheduled heatmap generation delivered to Discord.',
      'Multiple cron-style services running concurrently in one bot process.',
      'Reliable historical data persistence in MongoDB.',
      'Headless scraping of dynamic pages.',
    ],
    solutions: [
      'Modular service architecture: price updater, heatmap, fear & greed tracker, celestial scheduler, cleanup — each isolated.',
      'Puppeteer headless scraping converting visuals into Discord embed assets.',
      'Discord.js 14 slash command registry with full intelligence access in chat.',
      'MongoDB state management for PIDs, sentiment, and price history across instances.',
      'Firebase + Nodemailer alerts alongside Discord delivery.',
    ],
    stack: ['TypeScript', 'Node.js', 'Express', 'Discord.js 14', 'MongoDB', 'Puppeteer', 'Firebase'],
    highlights: ['Modular cron services', 'Puppeteer scraping', 'Crypto heatmaps in chat'],
    featured: false,
  },
  {
    slug: 'appointment-bot',
    name: 'Appointment Bot',
    categories: ['Bot'],
    tagline:
      'Discord scheduling bot with natural-language date parsing and automatic Google Calendar sync.',
    problem:
      'Communities coordinating through Discord rely on pinned messages or external calendars for scheduling. Built a bot that automates appointment creation, RSVPs, and calendar sync entirely inside Discord.',
    challenges: [
      'Accepting human-readable date inputs ("next Monday at 3pm").',
      'Auto-creating Discord scheduled events from appointment data.',
      'Bi-directional Google Calendar sync.',
      'Validating times for conflicts and duration limits.',
      'Global slash command registration without per-server setup.',
    ],
    solutions: [
      'Chrono-node for natural language date parsing.',
      'Discord scheduled events API for native RSVPable events.',
      '`googleapis` integration for Google Calendar appointments.',
      'MongoDB-backed channel-scoped queries with conflict + duration validation.',
      'Global slash command deployment script via Discord REST API.',
    ],
    stack: ['TypeScript', 'Node.js', 'Discord.js 14', 'MongoDB', 'googleapis', 'chrono-node'],
    highlights: ['NL date parsing', 'Native Discord events', 'Google Calendar sync'],
    featured: false,
  },
];

export const projectCategoryFilters: { label: string; value: ProjectCategory | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'SaaS', value: 'SaaS' },
  { label: 'Web', value: 'Web' },
  { label: 'Mobile', value: 'Mobile' },
  { label: 'AI', value: 'AI' },
  { label: 'Realtime', value: 'Realtime' },
  { label: 'Bot', value: 'Bot' },
];
