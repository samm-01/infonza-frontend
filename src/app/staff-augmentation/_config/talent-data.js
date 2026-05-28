/**
 * talent-data.js — Centralised config for all Staff Augmentation hire pages.
 *
 * ARCHITECTURE
 * ─────────────
 * Each technology gets one config object (PYTHON_CONFIG, VUEJS_CONFIG, …).
 * Shared / formula-driven sections (WHY_INFONZA, engagement models, process)
 * live as generators so individual configs stay lean.
 *
 * HOW TO ADD A NEW TECHNOLOGY
 * ────────────────────────────
 * 1. Create a new config object below following the existing pattern.
 * 2. Add it to the TALENT_CONFIGS map at the bottom.
 * 3. Create  src/app/staff-augmentation/hire-[tech]/page.jsx   (3 lines)
 *            src/app/staff-augmentation/hire-[tech]/layout.jsx  (6 lines)
 * 4. Update the TECH_GROUPS href in navbar.jsx.
 */

import {
  HiClock,
  HiStar,
  HiUsers,
  HiRocketLaunch,
  HiServer,
  HiShieldCheck,
  HiGlobeAlt,
  HiBolt,
  HiCommandLine,
  HiCloud,
  HiCpuChip,
  HiCodeBracket,
  HiCircleStack,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

const BASE_URL = "https://infonza.com";

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED GENERATORS
   — sections whose copy is the same across all technologies
═══════════════════════════════════════════════════════════════════════════ */

export const WHY_INFONZA = [
  {
    icon: HiShieldCheck,
    title: "5-Stage Technical Assessment",
    desc: "Every developer passes our coding challenge, architecture review, live debugging session, system design interview, and communication evaluation before reaching you.",
  },
  {
    icon: HiGlobeAlt,
    title: "US Timezone Overlap",
    desc: "IST overlaps with US Eastern mornings (5:30–9:30 PM IST = 8–12 AM EST). Real collaboration, not just async pull requests.",
  },
  {
    icon: HiShieldCheck,
    title: "NDA & IP Protection",
    desc: "Mutual NDA signed before any code discussion. All IP belongs to you. We use assignment-of-inventions agreements on every engagement.",
  },
  {
    icon: HiBolt,
    title: "2-Week Replacement Guarantee",
    desc: "If the developer isn't the right fit within the first two weeks, we replace them at no extra cost and no delay to your project.",
  },
  {
    icon: HiStar,
    title: "Senior-Only Profiles",
    desc: "We don't staff juniors. Every candidate has 4+ years of professional experience with shipped production applications.",
  },
];

/** Engagement models — full/part-time/project descriptions interpolate the tech name */
export function getEngagementModels(tech) {
  return [
    {
      title: "Full-Time",
      hours: "40 hrs/week",
      desc: `A dedicated senior ${tech} engineer working exclusively on your product — attending standups, using your tools, aligned to your sprint cycles.`,
      features: ["Dedicated to your team only", "Daily standups", "Sprint planning & reviews", "US/EU timezone overlap"],
      badge: "Most Popular",
      highlight: true,
    },
    {
      title: "Part-Time",
      hours: "20 hrs/week",
      desc: `Ideal for focused ${tech} work alongside your existing team — feature builds, bug fixes, or code reviews on a flexible schedule.`,
      features: ["Flexible scheduling", "Async-friendly", "Weekly check-ins", "On-demand scaling to full-time"],
      badge: null,
      highlight: false,
    },
    {
      title: "Project-Based",
      hours: "Scoped deliverables",
      desc: `Fixed-scope ${tech} engagement with clear milestones — perfect for a greenfield build, migration, or performance overhaul.`,
      features: ["Fixed deliverables", "Milestone-based billing", "Defined acceptance criteria", "Post-delivery support"],
      badge: null,
      highlight: false,
    },
  ];
}

/** Hiring process — step 2 mentions the tech name for personalisation */
export function getProcess(tech) {
  return [
    {
      step: "01",
      title: "Share Requirements",
      desc: `Fill our 5-minute brief: ${tech} stack details, seniority level, timezone preference, and project context. No lengthy RFP needed.`,
    },
    {
      step: "02",
      title: "Resume Review (24h)",
      desc: `We shortlist 2–3 pre-vetted ${tech} developer profiles matched to your stack within 24 business hours.`,
    },
    {
      step: "03",
      title: "Technical Interview",
      desc: "You conduct your own technical interview. Our candidates pass a 5-stage internal assessment first — so you're only meeting qualified engineers.",
    },
    {
      step: "04",
      title: "Paid Trial Week",
      desc: "Start with a low-risk trial week. See how the developer works within your codebase before committing to a longer engagement.",
    },
    {
      step: "05",
      title: "Onboard & Ship",
      desc: "Developer joins your Slack, GitHub, and Jira. Active sprint contribution from day one. Placement complete within 72 hours of brief submission.",
    },
  ];
}

/* ═══════════════════════════════════════════════════════════════════════════
   TECHNOLOGY CONFIGS
═══════════════════════════════════════════════════════════════════════════ */

/* ── Python ──────────────────────────────────────────────────────────────── */
export const PYTHON_CONFIG = {
  slug: "hire-python-developers",
  tech: "Python",
  techDisplay: "Python Developers",
  techShort: "Python",
  placementTime: "72h",
  startingRate: "$35",
  priceNumeric: "35",

  heroSubtitle:
    "Senior Python engineers — 4+ years with Django, FastAPI, and data-intensive systems — available to join your team within 72 hours. Vetted, NDA-protected, and replaceable if not the right fit.",

  devProfiles: [
    { name: "Senior Django Developer",    exp: "6 yrs", skills: ["Django",   "PostgreSQL", "Celery"],    status: "Available in 24h" },
    { name: "Python / FastAPI Engineer",  exp: "5 yrs", skills: ["FastAPI",  "Redis",      "Docker"],    status: "Available in 48h" },
    { name: "Python Backend Lead",        exp: "8 yrs", skills: ["Microservices", "AWS Lambda", "SQLAlchemy"], status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",           icon: HiClock },
    { value: "5+",   label: "Avg. Years Experience",   icon: HiStar },
    { value: "150+", label: "Python APIs Delivered",   icon: HiServer },
    { value: "98%",  label: "On-time Delivery",        icon: HiRocketLaunch },
  ],

  skills: [
    "Python 3.12", "Django 5", "FastAPI", "Flask",
    "Celery", "SQLAlchemy / Alembic", "PostgreSQL", "Redis",
    "Docker", "AWS Lambda", "Pytest", "REST APIs",
    "GraphQL", "NumPy / Pandas", "Microservices", "Elasticsearch",
  ],

  canBuildItems: [
    { title: "REST & GraphQL APIs",         desc: "High-performance Django or FastAPI backends with auth, rate limiting, caching, and comprehensive test coverage." },
    { title: "Data Pipelines & ETL",        desc: "Scheduled Celery tasks, real-time data processing, and ingestion pipelines for analytics and reporting workloads." },
    { title: "Microservices Architecture",  desc: "Containerised Python services with Docker, event-driven messaging, and Kubernetes-ready deployment configs." },
  ],

  faqs: [
    {
      q: "How quickly can I hire a Python developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours of sending their brief. Our bench of pre-vetted Python engineers means we're not recruiting from scratch for every request.",
    },
    {
      q: "What Python frameworks do your developers specialise in?",
      a: "Our Python developers cover the full ecosystem: Django (SaaS apps, admin portals, REST APIs), FastAPI (high-performance async APIs, ML model serving), Flask (lightweight microservices), and Celery (task queues, background jobs). We match the developer whose framework depth aligns with your project.",
    },
    {
      q: "Can your Python developers work on data engineering or ML projects?",
      a: "Yes. We have developers proficient in NumPy, Pandas, SQLAlchemy, and data pipeline tooling. For pure ML model training, our dedicated AI engineers are a better fit. For data engineering — ETL, pipelines, processing — senior Python developers excel.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet your expectations in the first two weeks, notify your account manager and we'll begin the replacement process immediately — no fee, no friction.",
    },
    {
      q: "Who owns the code and IP built by the developer?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause that transfers all IP to your company from day one. We retain no license or claim to any code, design, or system built during the engagement.",
    },
  ],

  related: [
    { title: "Hire Node.js Developers",  desc: "Backend engineers specialising in Express, NestJS, and REST/GraphQL APIs.",       href: "/staff-augmentation/hire-nodejs-developers",   icon: HiCommandLine },
    { title: "Hire DevOps Engineers",    desc: "Infrastructure, CI/CD, Kubernetes, and cloud deployment specialists.",             href: "/staff-augmentation/hire-devops-engineers",    icon: HiCloud },
    { title: "Hire AI Engineers",        desc: "LLM, machine learning, and generative AI development specialists.",                href: "/staff-augmentation/hire-ai-engineers",        icon: HiCpuChip },
  ],

  metadata: {
    title: "Hire Dedicated Python Developers — Django, FastAPI & Backend Engineers | Infonza",
    description: "Hire pre-vetted senior Python developers from India. Django, FastAPI, Flask, Celery, PostgreSQL. Available in 72 hours. NDA protected, replacement guarantee, US timezone overlap.",
    keywords: ["hire Python developers", "hire Django developers", "hire FastAPI developers", "senior Python developers India", "Python developer outsourcing", "remote Python engineers", "offshore Python developers"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated Python Developers — 72-Hour Placement | Infonza", description: "Senior Python developers (Django, FastAPI, Flask) available in 72 hours. Starting from $35/hr. NDA protected.", url: `${BASE_URL}/staff-augmentation/hire-python-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated Python Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-python-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated Python Developers — 72-Hour Placement | Infonza", description: "Senior Python developers (Django, FastAPI, Flask) available in 72 hours. Starting from $35/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── Vue.js ──────────────────────────────────────────────────────────────── */
export const VUEJS_CONFIG = {
  slug: "hire-vuejs-developers",
  tech: "Vue.js",
  techDisplay: "Vue.js Developers",
  techShort: "Vue.js",
  placementTime: "72h",
  startingRate: "$35",
  priceNumeric: "35",

  heroSubtitle:
    "Senior Vue.js engineers — 4+ years with Vue 3, Nuxt.js, and Pinia — available to join your team within 72 hours. Pre-vetted, NDA-protected, and backed by a 2-week replacement guarantee.",

  devProfiles: [
    { name: "Senior Vue 3 Developer",     exp: "5 yrs", skills: ["Vue 3",     "Pinia",       "TypeScript"], status: "Available in 24h" },
    { name: "Nuxt.js Full-Stack Engineer", exp: "6 yrs", skills: ["Nuxt.js",  "Composition API", "Tailwind"], status: "Available in 48h" },
    { name: "Vue / Node.js Lead",          exp: "7 yrs", skills: ["Vue Router", "Vuex",      "GraphQL"],   status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",           icon: HiClock },
    { value: "4.8/5", label: "Client Satisfaction",   icon: HiStar },
    { value: "90+",  label: "Vue Projects Delivered",  icon: HiRocketLaunch },
    { value: "91%",  label: "Long-term Retention",     icon: HiUsers },
  ],

  skills: [
    "Vue 3", "Nuxt.js 3", "TypeScript", "Composition API",
    "Pinia", "Vue Router", "Vite", "Vitest",
    "Tailwind CSS", "Cypress", "GraphQL", "REST APIs",
    "Storybook", "Vuex", "SSR / SSG", "PWA",
  ],

  canBuildItems: [
    { title: "Single-Page Applications",  desc: "Complex, reactive SPAs with real-time updates, role-based access, and performant state management via Pinia." },
    { title: "Nuxt.js Full-Stack Apps",   desc: "SEO-optimised web apps with server-side rendering, file-based routing, and API routes in a unified Nuxt.js codebase." },
    { title: "Admin Dashboards & Portals", desc: "Vue 3 component libraries with Storybook documentation, accessibility compliance, and cross-team design consistency." },
  ],

  faqs: [
    {
      q: "How quickly can I hire a Vue.js developer from Infonza?",
      a: "Most clients receive shortlisted Vue.js developer profiles within 24 hours and complete onboarding within 72 hours of their brief. Our pre-vetted bench means zero sourcing delay.",
    },
    {
      q: "Do your developers work with Vue 2 or Vue 3?",
      a: "Primarily Vue 3 with the Composition API. We also have developers experienced in Vue 2 for maintenance or migration projects. If you're planning a Vue 2 → Vue 3 migration, we can scope and staff that engagement end-to-end.",
    },
    {
      q: "Can your Vue.js developers build full-stack apps with Nuxt.js?",
      a: "Yes. Several developers on our Vue bench specialise in Nuxt.js 3 — covering SSR, SSG, file-based routing, and server-side API routes. Nuxt is our recommended choice when SEO and first-load performance are critical.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet your expectations within the first two weeks, we begin the replacement process immediately at no additional cost.",
    },
    {
      q: "Who owns the code and IP built by the developer?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. We retain no rights to any code or system built during the engagement.",
    },
  ],

  related: [
    { title: "Hire React Developers",    desc: "Senior React 18 and Next.js engineers for component-driven frontends.",                href: "/staff-augmentation/hire-react-developers",    icon: HiCodeBracket },
    { title: "Hire Angular Developers",  desc: "Enterprise-grade Angular specialists for large-scale SPAs and dashboards.",            href: "/staff-augmentation/hire-angular-developers",  icon: HiCircleStack },
    { title: "Hire Node.js Developers",  desc: "Backend engineers specialising in Express, NestJS, and REST/GraphQL APIs.",            href: "/staff-augmentation/hire-nodejs-developers",   icon: HiCommandLine },
  ],

  metadata: {
    title: "Hire Dedicated Vue.js Developers — Vue 3, Nuxt.js & Frontend Engineers | Infonza",
    description: "Hire pre-vetted senior Vue.js developers from India. Vue 3, Nuxt.js, Pinia, TypeScript. Available in 72 hours. NDA protected, replacement guarantee, US timezone overlap.",
    keywords: ["hire Vue.js developers", "hire Vue 3 developers", "hire Nuxt.js developers", "senior Vue.js developers India", "Vue.js developer outsourcing", "remote Vue developers", "offshore Vue.js engineers"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated Vue.js Developers — 72-Hour Placement | Infonza", description: "Senior Vue.js developers (Vue 3, Nuxt.js, Pinia) available in 72 hours. Starting from $35/hr.", url: `${BASE_URL}/staff-augmentation/hire-vuejs-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated Vue.js Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-vuejs-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated Vue.js Developers — 72-Hour Placement | Infonza", description: "Senior Vue.js developers (Vue 3, Nuxt.js, Pinia) available in 72 hours. Starting from $35/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── React Native ────────────────────────────────────────────────────────── */
export const REACT_NATIVE_CONFIG = {
  slug: "hire-react-native-developers",
  tech: "React Native",
  techDisplay: "React Native Developers",
  techShort: "React Native",
  placementTime: "72h",
  startingRate: "$38",
  priceNumeric: "38",

  heroSubtitle:
    "Senior React Native engineers — 4+ years building iOS and Android apps with Expo, TypeScript, and native modules — available within 72 hours. Vetted, NDA-protected, and backed by a 2-week replacement guarantee.",

  devProfiles: [
    { name: "Senior React Native Developer",  exp: "5 yrs", skills: ["React Native",  "Expo",       "TypeScript"],   status: "Available in 24h" },
    { name: "RN / iOS Native Engineer",       exp: "6 yrs", skills: ["Native Modules","Reanimated",  "Redux"],        status: "Available in 48h" },
    { name: "Cross-Platform Mobile Lead",     exp: "7 yrs", skills: ["NativeWind",    "React Query", "Firebase"],     status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",             icon: HiClock },
    { value: "5+",   label: "Avg. Years Experience",     icon: HiStar },
    { value: "80+",  label: "Mobile Apps Shipped",       icon: HiDevicePhoneMobile },
    { value: "4.7★", label: "Avg. App Store Rating",     icon: HiRocketLaunch },
  ],

  skills: [
    "React Native 0.74", "Expo SDK 51", "TypeScript", "Redux Toolkit",
    "React Navigation", "Reanimated 3", "NativeWind", "Firebase",
    "Push Notifications", "Native Modules (iOS/Android)", "Jest / Detox",
    "App Store & Play Store deployment", "Fastlane", "Deep Linking",
  ],

  canBuildItems: [
    { title: "Consumer Mobile Apps",      desc: "Full-featured iOS & Android apps with animations, offline support, push notifications, and App Store / Play Store deployment." },
    { title: "Fintech & Marketplace Apps", desc: "Secure payment integrations, biometric auth, real-time data feeds, and complex multi-screen navigations." },
    { title: "Enterprise Mobile Tools",   desc: "Internal B2B apps with SSO, MDM support, offline-first sync, and custom native modules for device hardware." },
  ],

  faqs: [
    {
      q: "How quickly can I hire a React Native developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours. Our pre-vetted mobile developers are ready to start immediately.",
    },
    {
      q: "Do your developers use Expo or the bare React Native workflow?",
      a: "Both. We match you to the developer whose workflow fits your project. Expo Managed is ideal for faster iteration and simpler deployment. Bare workflow is recommended when you need custom native modules, direct access to iOS/Android APIs, or specific third-party SDK integrations.",
    },
    {
      q: "Can your developers ship to both the App Store and Google Play?",
      a: "Yes. Our React Native developers have hands-on experience with app signing, provisioning profiles, App Store Connect, and Google Play Console. We can automate your CI/CD pipeline with Fastlane and EAS Build for consistent releases.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet expectations within the first two weeks, we replace them at no extra cost and with no delay to your project.",
    },
    {
      q: "Who owns the mobile app code and IP?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. This covers all app code, assets, and configurations built during the engagement.",
    },
  ],

  related: [
    { title: "Hire React Developers",     desc: "Senior React 18 and Next.js engineers for web frontends that share logic with your mobile app.",  href: "/staff-augmentation/hire-react-developers",         icon: HiCodeBracket },
    { title: "Hire Flutter Developers",   desc: "Cross-platform mobile engineers specialising in Dart, BLoC, and Riverpod state management.",      href: "/staff-augmentation/hire-flutter-developers",       icon: HiDevicePhoneMobile },
    { title: "Hire iOS Developers",       desc: "Native Swift engineers for App Store–grade iOS applications.",                                    href: "/staff-augmentation/hire-ios-developers",           icon: HiDevicePhoneMobile },
  ],

  metadata: {
    title: "Hire Dedicated React Native Developers — iOS & Android Engineers | Infonza",
    description: "Hire pre-vetted senior React Native developers from India. Expo, TypeScript, Redux, Reanimated. iOS & Android. Available in 72 hours. NDA protected, replacement guarantee.",
    keywords: ["hire React Native developers", "hire mobile app developers", "React Native engineer India", "Expo developer for hire", "cross-platform mobile developers", "remote React Native team", "offshore mobile engineers"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated React Native Developers — 72-Hour Placement | Infonza", description: "Senior React Native developers (Expo, TypeScript, Redux) available in 72 hours. Starting from $38/hr.", url: `${BASE_URL}/staff-augmentation/hire-react-native-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated React Native Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-react-native-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated React Native Developers — 72-Hour Placement | Infonza", description: "Senior React Native developers (Expo, TypeScript, Redux) available in 72 hours. Starting from $38/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── Next.js ─────────────────────────────────────────────────────────────── */
export const NEXTJS_CONFIG = {
  slug: "hire-nextjs-developers",
  tech: "Next.js",
  techDisplay: "Next.js Developers",
  techShort: "Next.js",
  placementTime: "72h",
  startingRate: "$35",
  priceNumeric: "35",

  heroSubtitle:
    "Senior Next.js engineers — 4+ years with App Router, Server Components, and full-stack deployment on Vercel and AWS — available within 72 hours. Pre-vetted, NDA-protected, and replaceable if not the right fit.",

  devProfiles: [
    { name: "Senior Next.js Developer",   exp: "5 yrs", skills: ["Next.js 14",    "App Router", "TypeScript"],   status: "Available in 24h" },
    { name: "Next.js Full-Stack Engineer", exp: "6 yrs", skills: ["Server Actions", "Prisma",    "Tailwind CSS"], status: "Available in 48h" },
    { name: "Next.js / React Lead",        exp: "7 yrs", skills: ["Edge Functions", "ISR / SSG", "Vercel"],       status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",           icon: HiClock },
    { value: "4.9/5", label: "Client Satisfaction",   icon: HiStar },
    { value: "120+", label: "Next.js Apps Delivered",  icon: HiRocketLaunch },
    { value: "93%",  label: "Long-term Retention",     icon: HiUsers },
  ],

  skills: [
    "Next.js 14", "App Router", "TypeScript", "React 18",
    "Server Components", "Server Actions", "Streaming SSR", "ISR / SSG",
    "Tailwind CSS", "Prisma", "Vercel", "Edge Functions",
    "NextAuth.js", "tRPC", "Headless CMS", "Playwright",
  ],

  canBuildItems: [
    { title: "Full-Stack SaaS Applications",  desc: "End-to-end Next.js apps with Server Actions, database access via Prisma, auth with NextAuth, and Stripe billing — all in one repo." },
    { title: "SEO-Optimised Marketing Sites", desc: "ISR and SSG pages with Core Web Vitals scores above 90, structured data, and CMS-driven content via Contentful or Sanity." },
    { title: "E-Commerce Storefronts",        desc: "High-converting Next.js storefronts with product pages, cart logic, Stripe Checkout, and headless Shopify or custom backends." },
  ],

  faqs: [
    {
      q: "How quickly can I hire a Next.js developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours. Our bench of pre-vetted Next.js engineers means zero sourcing delay.",
    },
    {
      q: "Do your developers use the Pages Router or App Router?",
      a: "Both. New projects default to App Router (Next.js 13+) with Server Components and Server Actions. For existing Pages Router codebases, we match developers experienced with incremental App Router migration so you can modernise without a full rewrite.",
    },
    {
      q: "Can your Next.js developers handle the backend as well?",
      a: "Yes. Our Next.js specialists are full-stack comfortable — they use Server Actions, API routes, and tRPC for backend logic, Prisma or Drizzle for database access, and NextAuth for authentication. You get a single developer who can own the entire stack.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet your expectations in the first two weeks, we replace them immediately at no extra cost.",
    },
    {
      q: "Who owns the code and IP?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. We retain no rights to any code, design, or system built during the engagement.",
    },
  ],

  related: [
    { title: "Hire React Developers",    desc: "Senior React 18 engineers for pure frontend or component library work.",               href: "/staff-augmentation/hire-react-developers",    icon: HiCodeBracket },
    { title: "Hire Node.js Developers",  desc: "Dedicated Node.js backend engineers when you need a separate API layer.",              href: "/staff-augmentation/hire-nodejs-developers",   icon: HiCommandLine },
    { title: "SaaS Development",         desc: "End-to-end SaaS product engineering — architecture, development, and launch.",        href: "/saas-development",                            icon: HiCloud },
  ],

  metadata: {
    title: "Hire Dedicated Next.js Developers — App Router, SSR & Full-Stack Engineers | Infonza",
    description: "Hire pre-vetted senior Next.js developers from India. App Router, Server Components, TypeScript, Vercel. Available in 72 hours. NDA protected, replacement guarantee.",
    keywords: ["hire Next.js developers", "Next.js engineer for hire", "hire App Router developers", "senior Next.js developers India", "Next.js full-stack developer", "remote Next.js engineers", "offshore Next.js team"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated Next.js Developers — 72-Hour Placement | Infonza", description: "Senior Next.js developers (App Router, TypeScript, Vercel) available in 72 hours. Starting from $35/hr.", url: `${BASE_URL}/staff-augmentation/hire-nextjs-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated Next.js Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-nextjs-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated Next.js Developers — 72-Hour Placement | Infonza", description: "Senior Next.js developers (App Router, TypeScript, Vercel) available in 72 hours. Starting from $35/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── Flutter ─────────────────────────────────────────────────────────────── */
export const FLUTTER_CONFIG = {
  slug: "hire-flutter-developers",
  tech: "Flutter",
  techDisplay: "Flutter Developers",
  techShort: "Flutter",
  placementTime: "72h",
  startingRate: "$38",
  priceNumeric: "38",

  heroSubtitle:
    "Senior Flutter engineers — 4+ years building pixel-perfect cross-platform apps in Dart with BLoC, Riverpod, and Firebase — available within 72 hours. Pre-vetted, NDA-protected, and backed by a 2-week guarantee.",

  devProfiles: [
    { name: "Senior Flutter Developer",     exp: "5 yrs", skills: ["Flutter",    "Dart",      "BLoC"],       status: "Available in 24h" },
    { name: "Flutter / Firebase Engineer",  exp: "6 yrs", skills: ["Riverpod",   "Firebase",  "REST APIs"],  status: "Available in 48h" },
    { name: "Cross-Platform Mobile Lead",   exp: "7 yrs", skills: ["GetX",       "SQLite",    "CI/CD"],      status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",             icon: HiClock },
    { value: "5+",   label: "Avg. Years Experience",     icon: HiStar },
    { value: "60+",  label: "Flutter Apps Shipped",      icon: HiDevicePhoneMobile },
    { value: "4.6★", label: "Avg. App Store Rating",     icon: HiRocketLaunch },
  ],

  skills: [
    "Flutter 3.x", "Dart 3", "BLoC / Cubit", "Riverpod",
    "GetX", "Provider", "Firebase", "REST APIs",
    "SQLite / Hive", "Push Notifications", "Animations / Custom Painter",
    "App Store & Play Store deployment", "Fastlane / Codemagic", "Platform Channels",
  ],

  canBuildItems: [
    { title: "Consumer Mobile Apps",     desc: "Pixel-perfect iOS & Android apps from a single Dart codebase — with custom animations, offline support, and store deployment." },
    { title: "Fintech & Healthcare Apps", desc: "Secure, compliant mobile apps with biometric auth, encrypted local storage, real-time data, and API integrations." },
    { title: "Flutter Web & Desktop",    desc: "Progressive Web Apps and desktop clients sharing the same Flutter codebase as your mobile app — full multi-platform coverage." },
  ],

  faqs: [
    {
      q: "How quickly can I hire a Flutter developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours. Our pre-vetted Flutter engineers are ready to start immediately.",
    },
    {
      q: "What state management approaches do your Flutter developers use?",
      a: "Our developers are proficient in BLoC/Cubit (ideal for large, complex apps), Riverpod (flexible and testable), and GetX (for simpler apps requiring a lighter footprint). We recommend BLoC for enterprise projects for its strict separation of concerns and testability.",
    },
    {
      q: "Can your Flutter developers build for iOS, Android, and web simultaneously?",
      a: "Yes. Flutter's 'write once, run anywhere' model works well when the platforms share similar UX flows. Our developers set up responsive layouts, platform-specific adaptations, and CI/CD pipelines that build and deploy to App Store, Play Store, and web in a single workflow.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet expectations in the first two weeks, we replace them at no extra cost and with zero delay.",
    },
    {
      q: "Who owns the mobile app code and IP?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. All Dart code, assets, and build configurations belong to you.",
    },
  ],

  related: [
    { title: "Hire React Native Developers", desc: "Cross-platform engineers building iOS/Android apps with React Native and Expo.",            href: "/staff-augmentation/hire-react-native-developers", icon: HiDevicePhoneMobile },
    { title: "Hire iOS Developers",          desc: "Native Swift engineers for App Store–grade iOS applications.",                             href: "/staff-augmentation/hire-ios-developers",          icon: HiDevicePhoneMobile },
    { title: "Hire Android Developers",      desc: "Native Kotlin engineers for Google Play–grade Android applications.",                     href: "/staff-augmentation/hire-android-developers",      icon: HiDevicePhoneMobile },
  ],

  metadata: {
    title: "Hire Dedicated Flutter Developers — Dart, BLoC & Cross-Platform Engineers | Infonza",
    description: "Hire pre-vetted senior Flutter developers from India. Dart, BLoC, Riverpod, Firebase, iOS & Android. Available in 72 hours. NDA protected, replacement guarantee.",
    keywords: ["hire Flutter developers", "hire Dart developers", "Flutter engineer India", "Flutter mobile developer for hire", "cross-platform app developer", "remote Flutter engineers", "offshore Flutter team"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated Flutter Developers — 72-Hour Placement | Infonza", description: "Senior Flutter developers (Dart, BLoC, Firebase) available in 72 hours. Starting from $38/hr.", url: `${BASE_URL}/staff-augmentation/hire-flutter-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated Flutter Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-flutter-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated Flutter Developers — 72-Hour Placement | Infonza", description: "Senior Flutter developers (Dart, BLoC, Firebase) available in 72 hours. Starting from $38/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── Angular ─────────────────────────────────────────────────────────────── */
export const ANGULAR_CONFIG = {
  slug: "hire-angular-developers",
  tech: "Angular",
  techDisplay: "Angular Developers",
  techShort: "Angular",
  placementTime: "72h",
  startingRate: "$35",
  priceNumeric: "35",

  heroSubtitle:
    "Senior Angular engineers — 4+ years with Angular 17, RxJS, and NgRx for enterprise-grade SPAs — available within 72 hours. Pre-vetted, NDA-protected, and backed by a 2-week replacement guarantee.",

  devProfiles: [
    { name: "Senior Angular Developer",   exp: "6 yrs", skills: ["Angular 17", "RxJS",      "NgRx"],      status: "Available in 24h" },
    { name: "Angular / NestJS Engineer",  exp: "7 yrs", skills: ["TypeScript", "NgRx",      "REST APIs"], status: "Available in 48h" },
    { name: "Enterprise Angular Lead",    exp: "8 yrs", skills: ["Nx Monorepo", "Angular Universal", "Cypress"], status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",          icon: HiClock },
    { value: "6+",   label: "Avg. Years Experience",  icon: HiStar },
    { value: "100+", label: "Enterprise SPAs Built",  icon: HiRocketLaunch },
    { value: "94%",  label: "Long-term Retention",    icon: HiUsers },
  ],

  skills: [
    "Angular 17", "TypeScript", "RxJS", "NgRx / Signals",
    "Angular Material", "Nx Monorepo", "Angular Universal (SSR)", "Standalone Components",
    "Jasmine / Karma", "Cypress", "REST APIs", "GraphQL",
    "Docker", "CI/CD", "Storybook", "Micro-frontend Architecture",
  ],

  canBuildItems: [
    { title: "Enterprise Dashboards",     desc: "Feature-rich Angular SPAs with NgRx state management, role-based access, and complex data grids handling millions of rows." },
    { title: "Large-Scale Monorepos",     desc: "Nx-structured Angular monorepos with shared component libraries, code generation, and optimised CI build pipelines." },
    { title: "SSR & SEO-Optimised Apps",  desc: "Angular Universal applications with server-side rendering, Meta management, and Core Web Vitals optimisation for marketing pages." },
  ],

  faqs: [
    {
      q: "How quickly can I hire an Angular developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours. Our bench of pre-vetted Angular engineers means we're not recruiting from scratch.",
    },
    {
      q: "Do your developers use standalone components or NgModules?",
      a: "Both. New Angular 17+ projects use standalone components and the new control flow syntax by default. For existing NgModule-based codebases, we match developers with hands-on migration experience so you can modernise incrementally without a big-bang rewrite.",
    },
    {
      q: "Can your developers build with Angular Signals and the new reactive primitives?",
      a: "Yes. Our senior Angular developers are early adopters of Signals (Angular 17+) and the new event-driven reactive model. For projects targeting Angular 18+, Signals offer a cleaner alternative to RxJS for local state — our developers will recommend the right approach for your use case.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet expectations within the first two weeks, we begin the replacement process immediately at no additional cost.",
    },
    {
      q: "Who owns the code and IP built by the developer?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. We retain no rights to any code or system built during the engagement.",
    },
  ],

  related: [
    { title: "Hire React Developers",   desc: "Senior React 18 engineers for component-driven frontends and Next.js full-stack apps.",  href: "/staff-augmentation/hire-react-developers",   icon: HiCodeBracket },
    { title: "Hire Vue.js Developers",  desc: "Vue 3 and Nuxt.js engineers for lightweight, reactive SPAs.",                            href: "/staff-augmentation/hire-vuejs-developers",   icon: HiCircleStack },
    { title: "Hire Node.js Developers", desc: "Backend engineers to pair with your Angular frontend.",                                  href: "/staff-augmentation/hire-nodejs-developers",  icon: HiCommandLine },
  ],

  metadata: {
    title: "Hire Dedicated Angular Developers — RxJS, NgRx & Enterprise Engineers | Infonza",
    description: "Hire pre-vetted senior Angular developers from India. Angular 17, RxJS, NgRx, TypeScript. Available in 72 hours. NDA protected, replacement guarantee, US timezone overlap.",
    keywords: ["hire Angular developers", "Angular engineer India", "hire RxJS developers", "Angular 17 developer for hire", "senior Angular developers", "remote Angular engineers", "offshore Angular team"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated Angular Developers — 72-Hour Placement | Infonza", description: "Senior Angular developers (RxJS, NgRx, TypeScript) available in 72 hours. Starting from $35/hr.", url: `${BASE_URL}/staff-augmentation/hire-angular-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated Angular Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-angular-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated Angular Developers — 72-Hour Placement | Infonza", description: "Senior Angular developers (RxJS, NgRx, TypeScript) available in 72 hours. Starting from $35/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── PHP / Laravel ───────────────────────────────────────────────────────── */
export const PHP_CONFIG = {
  slug: "hire-php-developers",
  tech: "PHP / Laravel",
  techDisplay: "PHP / Laravel Developers",
  techShort: "PHP",
  placementTime: "72h",
  startingRate: "$30",
  priceNumeric: "30",

  heroSubtitle:
    "Senior PHP and Laravel engineers — 4+ years building SaaS platforms, e-commerce backends, and RESTful APIs — available within 72 hours. Pre-vetted, NDA-protected, and backed by a 2-week replacement guarantee.",

  devProfiles: [
    { name: "Senior Laravel Developer",   exp: "6 yrs", skills: ["Laravel 11",   "MySQL",        "REST APIs"],   status: "Available in 24h" },
    { name: "PHP / Vue.js Full-Stack",    exp: "5 yrs", skills: ["Livewire",     "Inertia.js",   "Tailwind CSS"], status: "Available in 48h" },
    { name: "PHP Backend Lead",           exp: "8 yrs", skills: ["Queues / Jobs", "Redis",       "Docker"],      status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",          icon: HiClock },
    { value: "5+",   label: "Avg. Years Experience",  icon: HiStar },
    { value: "200+", label: "Laravel Apps Delivered", icon: HiServer },
    { value: "97%",  label: "On-time Delivery",       icon: HiRocketLaunch },
  ],

  skills: [
    "PHP 8.3", "Laravel 11", "Eloquent ORM", "MySQL / MariaDB",
    "Redis", "Queues & Jobs", "Laravel Livewire", "Inertia.js",
    "Pest / PHPUnit", "REST APIs", "Vue.js Integration", "Docker",
    "AWS / DigitalOcean", "Cashier / Stripe", "Sanctum / Passport", "Horizon",
  ],

  canBuildItems: [
    { title: "SaaS Platforms",           desc: "Multi-tenant Laravel SaaS with subscription billing via Cashier, team management, and role-based access control." },
    { title: "E-Commerce Backends",      desc: "Custom e-commerce systems or headless backends for Shopify/WooCommerce replacements — order management, inventory, payments." },
    { title: "REST APIs & Integrations", desc: "Eloquent-powered REST APIs with Sanctum auth, comprehensive test coverage in Pest, and third-party webhook integrations." },
  ],

  faqs: [
    {
      q: "How quickly can I hire a PHP/Laravel developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours. Our bench of pre-vetted PHP engineers means zero sourcing delay.",
    },
    {
      q: "Do your developers work with modern PHP (8.x) and current Laravel versions?",
      a: "Yes. All our PHP developers work with PHP 8.2/8.3 features (enums, fibers, intersection types) and Laravel 10/11 idioms — including the new Folio/Volt stack for Livewire projects and the slim application skeleton.",
    },
    {
      q: "Can your Laravel developers handle frontend work as well?",
      a: "Yes. Many of our PHP developers are comfortable with Livewire and Inertia.js for reactive UIs without a separate SPA build, as well as integrating Vue.js or React as a frontend layer. We'll match you to the developer whose frontend depth fits your stack.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet expectations within the first two weeks, we begin the replacement process immediately at no additional cost.",
    },
    {
      q: "Who owns the code and IP?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. We retain no rights to any code or system built during the engagement.",
    },
  ],

  related: [
    { title: "Hire Python Developers",       desc: "Python / Django backend engineers for API-heavy or data-intensive projects.",               href: "/staff-augmentation/hire-python-developers",   icon: HiCodeBracket },
    { title: "Hire Node.js Developers",      desc: "Node.js backend engineers for real-time, event-driven architectures.",                     href: "/staff-augmentation/hire-nodejs-developers",   icon: HiCommandLine },
    { title: "Hire MERN Stack Developers",   desc: "Full-stack engineers who own the entire product from MongoDB to React UI.",                 href: "/staff-augmentation/hire-mern-stack-developers", icon: HiCircleStack },
  ],

  metadata: {
    title: "Hire Dedicated PHP / Laravel Developers — Senior Backend Engineers | Infonza",
    description: "Hire pre-vetted senior PHP and Laravel developers from India. Laravel 11, PHP 8, MySQL, Redis. Available in 72 hours. NDA protected, replacement guarantee, US timezone overlap.",
    keywords: ["hire PHP developers", "hire Laravel developers", "PHP developer India", "Laravel engineer for hire", "senior PHP developers", "remote Laravel engineers", "offshore PHP team"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated PHP / Laravel Developers — 72-Hour Placement | Infonza", description: "Senior PHP/Laravel developers available in 72 hours. Starting from $30/hr. NDA protected.", url: `${BASE_URL}/staff-augmentation/hire-php-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated PHP / Laravel Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-php-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated PHP / Laravel Developers — 72-Hour Placement | Infonza", description: "Senior PHP/Laravel developers available in 72 hours. Starting from $30/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── iOS ─────────────────────────────────────────────────────────────────── */
export const IOS_CONFIG = {
  slug: "hire-ios-developers",
  tech: "iOS",
  techDisplay: "iOS Developers",
  techShort: "iOS",
  placementTime: "72h",
  startingRate: "$40",
  priceNumeric: "40",

  heroSubtitle:
    "Senior Swift engineers — 4+ years building native iOS apps with SwiftUI, Combine, and the full Apple SDK — available within 72 hours. Pre-vetted, NDA-protected, and backed by a 2-week replacement guarantee.",

  devProfiles: [
    { name: "Senior iOS Developer",     exp: "5 yrs", skills: ["Swift 5.9",   "SwiftUI",    "Core Data"],  status: "Available in 24h" },
    { name: "iOS / SwiftUI Engineer",   exp: "6 yrs", skills: ["Combine",     "MVVM",       "Xcode Cloud"], status: "Available in 48h" },
    { name: "iOS Platform Lead",        exp: "8 yrs", skills: ["ARKit",       "CoreML",     "App Store Connect"], status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",          icon: HiClock },
    { value: "5+",   label: "Avg. Years Experience",  icon: HiStar },
    { value: "50+",  label: "iOS Apps Shipped",       icon: HiDevicePhoneMobile },
    { value: "4.8★", label: "Avg. App Store Rating",  icon: HiRocketLaunch },
  ],

  skills: [
    "Swift 5.9", "SwiftUI", "UIKit", "Combine",
    "Core Data", "Core Location", "ARKit", "CoreML",
    "Xcode", "TestFlight", "App Store Connect", "Push Notifications",
    "In-App Purchases", "WidgetKit", "CloudKit", "Fastlane",
  ],

  canBuildItems: [
    { title: "Consumer iOS Apps",        desc: "Full-featured App Store–ready apps with SwiftUI animations, offline sync, push notifications, and smooth App Store submission." },
    { title: "Fintech & Healthcare Apps", desc: "Secure iOS apps with biometric auth (Face ID / Touch ID), HealthKit integration, encrypted storage, and HIPAA-aligned architecture." },
    { title: "AR & ML-Powered Apps",     desc: "Apps leveraging ARKit for augmented reality experiences and CoreML for on-device inference — without cloud round-trips." },
  ],

  faqs: [
    {
      q: "How quickly can I hire an iOS developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours. Our pre-vetted bench of Swift engineers means zero sourcing delay.",
    },
    {
      q: "Do your iOS developers use SwiftUI or UIKit?",
      a: "Both. New apps default to SwiftUI for its declarative syntax and better long-term alignment with Apple's platform direction. For existing UIKit codebases, we match developers experienced in incremental SwiftUI adoption so you can modernise screen-by-screen without a full rewrite.",
    },
    {
      q: "Can your iOS developers handle App Store submission and review?",
      a: "Yes. Our developers are experienced with TestFlight beta distribution, App Store Connect configuration, screenshot production, metadata optimisation, and navigating Apple review guidelines. We automate the release pipeline with Fastlane and Xcode Cloud for consistent, error-free submissions.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet expectations within the first two weeks, we replace them immediately at no additional cost.",
    },
    {
      q: "Who owns the iOS app code and IP?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. All Swift code, Xcode projects, and certificates belong to you.",
    },
  ],

  related: [
    { title: "Hire Android Developers",      desc: "Native Kotlin engineers for Play Store–grade Android applications.",                      href: "/staff-augmentation/hire-android-developers",      icon: HiDevicePhoneMobile },
    { title: "Hire React Native Developers", desc: "Cross-platform engineers sharing a single codebase across iOS and Android.",              href: "/staff-augmentation/hire-react-native-developers", icon: HiDevicePhoneMobile },
    { title: "Hire Flutter Developers",      desc: "Dart engineers building cross-platform apps with pixel-perfect Flutter UIs.",             href: "/staff-augmentation/hire-flutter-developers",      icon: HiDevicePhoneMobile },
  ],

  metadata: {
    title: "Hire Dedicated iOS Developers — Swift, SwiftUI & Native Apple Engineers | Infonza",
    description: "Hire pre-vetted senior iOS developers from India. Swift, SwiftUI, UIKit, CoreML, ARKit. Available in 72 hours. NDA protected, replacement guarantee, US timezone overlap.",
    keywords: ["hire iOS developers", "hire Swift developers", "iOS engineer India", "SwiftUI developer for hire", "senior iOS developers", "remote Swift engineers", "offshore iOS team"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated iOS Developers — 72-Hour Placement | Infonza", description: "Senior iOS developers (Swift, SwiftUI, UIKit) available in 72 hours. Starting from $40/hr.", url: `${BASE_URL}/staff-augmentation/hire-ios-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated iOS Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-ios-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated iOS Developers — 72-Hour Placement | Infonza", description: "Senior iOS developers (Swift, SwiftUI, UIKit) available in 72 hours. Starting from $40/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ── Android ─────────────────────────────────────────────────────────────── */
export const ANDROID_CONFIG = {
  slug: "hire-android-developers",
  tech: "Android",
  techDisplay: "Android Developers",
  techShort: "Android",
  placementTime: "72h",
  startingRate: "$40",
  priceNumeric: "40",

  heroSubtitle:
    "Senior Kotlin engineers — 4+ years building native Android apps with Jetpack Compose, Coroutines, and the full Android SDK — available within 72 hours. Pre-vetted, NDA-protected, and backed by a 2-week replacement guarantee.",

  devProfiles: [
    { name: "Senior Android Developer",   exp: "5 yrs", skills: ["Kotlin",       "Jetpack Compose", "Room"],       status: "Available in 24h" },
    { name: "Android / Kotlin Engineer",  exp: "6 yrs", skills: ["Coroutines",   "Retrofit",        "Hilt"],       status: "Available in 48h" },
    { name: "Android Platform Lead",      exp: "8 yrs", skills: ["WorkManager",  "CameraX",         "Play Console"], status: "Available in 72h" },
  ],

  results: [
    { value: "72h",  label: "Dev Placement",            icon: HiClock },
    { value: "5+",   label: "Avg. Years Experience",    icon: HiStar },
    { value: "55+",  label: "Android Apps Shipped",     icon: HiDevicePhoneMobile },
    { value: "4.7★", label: "Avg. Play Store Rating",   icon: HiRocketLaunch },
  ],

  skills: [
    "Kotlin", "Jetpack Compose", "Coroutines / Flow", "Room Database",
    "Retrofit", "Hilt / Dagger 2", "ViewModel / LiveData", "WorkManager",
    "Firebase", "CameraX", "Google Pay", "Play Billing",
    "Material Design 3", "Google Play Console", "Fastlane", "CI/CD",
  ],

  canBuildItems: [
    { title: "Consumer Android Apps",    desc: "Full-featured Play Store–ready apps with Jetpack Compose UI, offline-first architecture, background sync, and push notifications." },
    { title: "Fintech & Commerce Apps",  desc: "Secure Android apps with biometric auth, Google Pay integration, encrypted local storage, and real-time payment flows." },
    { title: "Enterprise Mobile Tools",  desc: "Internal B2B Android apps with MDM integration, role-based access, offline data sync, and barcode/QR scanning via CameraX." },
  ],

  faqs: [
    {
      q: "How quickly can I hire an Android developer from Infonza?",
      a: "Most clients receive shortlisted profiles within 24 hours and complete onboarding within 72 hours. Our pre-vetted bench of Kotlin engineers means zero sourcing delay.",
    },
    {
      q: "Do your Android developers use Jetpack Compose or XML layouts?",
      a: "New projects default to Jetpack Compose — Google's modern, declarative UI toolkit that significantly reduces boilerplate and simplifies animation. For existing XML-based codebases, we match developers experienced in incremental Compose adoption so you can migrate screen-by-screen.",
    },
    {
      q: "Can your Android developers handle Play Store submission?",
      a: "Yes. Our developers are experienced with Play Console configuration, staged rollouts, APK / AAB signing, ProGuard/R8 optimisation, and navigating Play policy reviews. We automate release pipelines with Fastlane and GitHub Actions for consistent deployments.",
    },
    {
      q: "What happens if the developer isn't a good fit?",
      a: "We offer a 2-week replacement guarantee. If the developer doesn't meet expectations within the first two weeks, we replace them immediately at no additional cost.",
    },
    {
      q: "Who owns the Android app code and IP?",
      a: "You do, entirely. Every engagement includes an assignment-of-inventions clause transferring all IP to your company from day one. All Kotlin code, Gradle configs, and signing keys belong to you.",
    },
  ],

  related: [
    { title: "Hire iOS Developers",           desc: "Native Swift engineers for App Store–grade iOS applications.",                           href: "/staff-augmentation/hire-ios-developers",          icon: HiDevicePhoneMobile },
    { title: "Hire React Native Developers",  desc: "Cross-platform engineers sharing a single JS codebase across iOS and Android.",          href: "/staff-augmentation/hire-react-native-developers", icon: HiDevicePhoneMobile },
    { title: "Hire Flutter Developers",       desc: "Dart engineers building cross-platform apps with pixel-perfect Flutter UIs.",            href: "/staff-augmentation/hire-flutter-developers",      icon: HiDevicePhoneMobile },
  ],

  metadata: {
    title: "Hire Dedicated Android Developers — Kotlin, Jetpack Compose & Native Engineers | Infonza",
    description: "Hire pre-vetted senior Android developers from India. Kotlin, Jetpack Compose, Coroutines, Room, Firebase. Available in 72 hours. NDA protected, replacement guarantee.",
    keywords: ["hire Android developers", "hire Kotlin developers", "Android engineer India", "Jetpack Compose developer for hire", "senior Android developers", "remote Kotlin engineers", "offshore Android team"],
    openGraph: { type: "website", siteName: "Infonza Innovations", locale: "en_US", title: "Hire Dedicated Android Developers — 72-Hour Placement | Infonza", description: "Senior Android developers (Kotlin, Jetpack Compose, Firebase) available in 72 hours. Starting from $40/hr.", url: `${BASE_URL}/staff-augmentation/hire-android-developers`, images: [{ url: `${BASE_URL}/infonza-logo.jpg`, width: 1200, height: 630, alt: "Hire Dedicated Android Developers | Infonza" }] },
    alternates: { canonical: `${BASE_URL}/staff-augmentation/hire-android-developers` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    twitter: { card: "summary_large_image", title: "Hire Dedicated Android Developers — 72-Hour Placement | Infonza", description: "Senior Android developers (Kotlin, Jetpack Compose, Firebase) available in 72 hours. Starting from $40/hr.", images: [`${BASE_URL}/infonza-logo.jpg`] },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL HIRE LINKS — used for "Also Hiring For" internal link blocks
   Covers all 15 staff augmentation pages (9 template + 6 bespoke)
═══════════════════════════════════════════════════════════════════════════ */
export const ALL_HIRE_LINKS = [
  { href: "/staff-augmentation/hire-react-developers",        label: "React.js" },
  { href: "/staff-augmentation/hire-nextjs-developers",       label: "Next.js" },
  { href: "/staff-augmentation/hire-vuejs-developers",        label: "Vue.js" },
  { href: "/staff-augmentation/hire-angular-developers",      label: "Angular" },
  { href: "/staff-augmentation/hire-react-native-developers", label: "React Native" },
  { href: "/staff-augmentation/hire-flutter-developers",      label: "Flutter" },
  { href: "/staff-augmentation/hire-ios-developers",          label: "iOS (Swift)" },
  { href: "/staff-augmentation/hire-android-developers",      label: "Android (Kotlin)" },
  { href: "/staff-augmentation/hire-nodejs-developers",       label: "Node.js" },
  { href: "/staff-augmentation/hire-python-developers",       label: "Python" },
  { href: "/staff-augmentation/hire-php-developers",          label: "PHP / Laravel" },
  { href: "/staff-augmentation/hire-ai-engineers",            label: "AI / ML" },
  { href: "/staff-augmentation/hire-devops-engineers",        label: "DevOps" },
  { href: "/staff-augmentation/hire-mern-stack-developers",   label: "MERN Stack" },
  { href: "/staff-augmentation/dedicated-development-team",   label: "Full-Stack Teams" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   CONFIG MAP — used in any place that needs to look up a config by slug
═══════════════════════════════════════════════════════════════════════════ */
export const TALENT_CONFIGS = {
  "hire-python-developers":       PYTHON_CONFIG,
  "hire-vuejs-developers":        VUEJS_CONFIG,
  "hire-react-native-developers": REACT_NATIVE_CONFIG,
  "hire-nextjs-developers":       NEXTJS_CONFIG,
  "hire-flutter-developers":      FLUTTER_CONFIG,
  "hire-angular-developers":      ANGULAR_CONFIG,
  "hire-php-developers":          PHP_CONFIG,
  "hire-ios-developers":          IOS_CONFIG,
  "hire-android-developers":      ANDROID_CONFIG,
};
