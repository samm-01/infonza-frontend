# Staff Augmentation — Route Mapping & Page Audit

> Generated: 2026-05-27  
> Scope: All `/staff-augmentation/*` routes referenced in the mega menu + related GEO pages.

---

## 1. Route Naming Convention

All hire pages follow this canonical pattern:

```
/staff-augmentation/hire-[technology]-developers
/staff-augmentation/hire-[technology]-engineers   (for non-dev roles)
/staff-augmentation/[service-type]                (for team/engagement pages)
```

**Examples already in production:**

| Slug | Pattern |
|---|---|
| `hire-react-developers` | `hire-[tech]-developers` |
| `hire-nodejs-developers` | `hire-[tech]-developers` |
| `hire-ai-engineers` | `hire-[role]-engineers` |
| `hire-devops-engineers` | `hire-[role]-engineers` |
| `hire-mern-stack-developers` | `hire-[stack]-developers` |
| `dedicated-development-team` | `[service-type]` (no hire prefix — correct) |

**GEO variant pattern** (root level, not under `/staff-augmentation/`):

```
/hire-[technology]-developers-[country/city]
```

Example: `/hire-react-developers-india` — this is a **separate GEO SEO page**, NOT a duplicate of `/staff-augmentation/hire-react-developers`.

---

## 2. Full Page Inventory — Staff Augmentation Cluster

### 2a. Existing pages ✅

| Route | File | Status | Page Function | Lines |
|---|---|---|---|---|
| `/staff-augmentation` | `staff-augmentation/page.jsx` | ✅ Live | Hub / index page | 1389 |
| `/staff-augmentation/hire-react-developers` | `…/hire-react-developers/page.jsx` | ✅ Live | Hire page | 550 |
| `/staff-augmentation/hire-nodejs-developers` | `…/hire-nodejs-developers/page.jsx` | ✅ Live | Hire page | 571 |
| `/staff-augmentation/hire-ai-engineers` | `…/hire-ai-engineers/page.jsx` | ✅ Live | Hire page | 579 |
| `/staff-augmentation/hire-devops-engineers` | `…/hire-devops-engineers/page.jsx` | ✅ Live | Hire page | 547 |
| `/staff-augmentation/hire-mern-stack-developers` | `…/hire-mern-stack-developers/page.jsx` | ✅ Live | Hire page | 577 |
| `/staff-augmentation/dedicated-development-team` | `…/dedicated-development-team/page.jsx` | ✅ Live | Service page | 591 |

**Related pages at root level (GEO variants):**

| Route | File | Status | Notes |
|---|---|---|---|
| `/hire-react-developers-india` | `hire-react-developers-india/page.jsx` | ✅ Live | India-targeted GEO page, distinct from canonical hire page |
| `/staff-augmentation-company-india` | `staff-augmentation-company-india/page.jsx` | ✅ Live | India-targeted hub GEO page |

---

## 3. Mega Menu → Route Cross-Reference

### 3a. Left panel — "Hire Talent For" (all 6 linked correctly)

| Mega Menu Item | Target Route | Page Exists? | Action |
|---|---|---|---|
| Hire React Developers | `/staff-augmentation/hire-react-developers` | ✅ | Reuse |
| Hire Node.js Developers | `/staff-augmentation/hire-nodejs-developers` | ✅ | Reuse |
| Hire AI Engineers | `/staff-augmentation/hire-ai-engineers` | ✅ | Reuse |
| Hire DevOps Engineers | `/staff-augmentation/hire-devops-engineers` | ✅ | Reuse |
| Hire MERN Stack Developers | `/staff-augmentation/hire-mern-stack-developers` | ✅ | Reuse |
| Dedicated Dev Team | `/staff-augmentation/dedicated-development-team` | ✅ | Reuse |

**Left panel is 100% served by existing pages. No new pages required.**

---

### 3b. Right panel — "Technologies" (grouped)

#### Frontend

| Tech Item | Ideal Route | Page Exists? | Current Fallback | Action Required |
|---|---|---|---|---|
| React.js | `/staff-augmentation/hire-react-developers` | ✅ | — | Reuse ✅ |
| Next.js | `/staff-augmentation/hire-nextjs-developers` | ❌ | `/staff-augmentation/hire-react-developers` | **Create** |
| Vue.js | `/staff-augmentation/hire-vuejs-developers` | ❌ | `/staff-augmentation` | **Create** |
| Angular | `/staff-augmentation/hire-angular-developers` | ❌ | `/staff-augmentation` | **Create** |

#### Mobile

| Tech Item | Ideal Route | Page Exists? | Current Fallback | Action Required |
|---|---|---|---|---|
| React Native | `/staff-augmentation/hire-react-native-developers` | ❌ | `/staff-augmentation/hire-mern-stack-developers` | **Create** |
| Flutter | `/staff-augmentation/hire-flutter-developers` | ❌ | `/staff-augmentation` | **Create** |
| iOS (Swift) | `/staff-augmentation/hire-ios-developers` | ❌ | `/staff-augmentation` | **Create** |
| Android (Kotlin) | `/staff-augmentation/hire-android-developers` | ❌ | `/staff-augmentation` | **Create** |

#### Backend

| Tech Item | Ideal Route | Page Exists? | Current Fallback | Action Required |
|---|---|---|---|---|
| Node.js | `/staff-augmentation/hire-nodejs-developers` | ✅ | — | Reuse ✅ |
| Python / Django | `/staff-augmentation/hire-python-developers` | ❌ | `/staff-augmentation` | **Create** |
| PHP / Laravel | `/staff-augmentation/hire-php-developers` | ❌ | `/staff-augmentation` | **Create** |
| Express.js | `/staff-augmentation/hire-nodejs-developers` | ✅ | — | Reuse ✅ (Express is a Node.js framework) |

#### Others

| Tech Item | Ideal Route | Page Exists? | Current Fallback | Action Required |
|---|---|---|---|---|
| AI / ML Engineers | `/staff-augmentation/hire-ai-engineers` | ✅ | — | Reuse ✅ |
| DevOps Engineers | `/staff-augmentation/hire-devops-engineers` | ✅ | — | Reuse ✅ |
| MERN Stack Devs | `/staff-augmentation/hire-mern-stack-developers` | ✅ | — | Reuse ✅ |
| Full Stack Teams | `/staff-augmentation/dedicated-development-team` | ✅ | — | Reuse ✅ |

---

## 4. Summary

### Pages reused (no new work needed) — 14 of 22 menu items

| Route | Serves |
|---|---|
| `/staff-augmentation/hire-react-developers` | React.js + (interim) Next.js |
| `/staff-augmentation/hire-nodejs-developers` | Node.js + Express.js |
| `/staff-augmentation/hire-ai-engineers` | AI / ML Engineers |
| `/staff-augmentation/hire-devops-engineers` | DevOps Engineers |
| `/staff-augmentation/hire-mern-stack-developers` | MERN Stack Devs + (interim) React Native |
| `/staff-augmentation/dedicated-development-team` | Full Stack Teams |

### Pages missing (must be created) — 9 routes

| Priority | Route | Category | Notes |
|---|---|---|---|
| 🔴 High | `/staff-augmentation/hire-python-developers` | Backend | Very high search demand; Python/Django is top-3 backend choice |
| 🔴 High | `/staff-augmentation/hire-vuejs-developers` | Frontend | Vue.js widely used; distinct audience from React |
| 🔴 High | `/staff-augmentation/hire-react-native-developers` | Mobile | Top cross-platform mobile framework |
| 🟡 Medium | `/staff-augmentation/hire-nextjs-developers` | Frontend | Next.js distinct from React for SEO (full-stack / SSR angle) |
| 🟡 Medium | `/staff-augmentation/hire-flutter-developers` | Mobile | Growing fast; Google-backed, strong demand |
| 🟡 Medium | `/staff-augmentation/hire-angular-developers` | Frontend | Enterprise-heavy; complements React/Vue offering |
| 🟡 Medium | `/staff-augmentation/hire-php-developers` | Backend | Large existing PHP/Laravel market |
| 🟢 Lower | `/staff-augmentation/hire-ios-developers` | Mobile | More niche; could launch after core mobile pages |
| 🟢 Lower | `/staff-augmentation/hire-android-developers` | Mobile | More niche; could launch after core mobile pages |

---

## 5. Recommended Build Order

Build in priority order so the mega menu gets real links as fast as possible.

```
Phase 1 — High priority (3 pages)
  hire-python-developers        ← biggest SEO gap right now
  hire-vuejs-developers         ← Frontend group has 3 fallbacks, fix one
  hire-react-native-developers  ← Mobile group fully unserved

Phase 2 — Medium priority (4 pages)
  hire-nextjs-developers
  hire-flutter-developers
  hire-angular-developers
  hire-php-developers

Phase 3 — Lower priority (2 pages)
  hire-ios-developers
  hire-android-developers
```

---

## 6. Navbar Fallback Links — What to Update After Each Page is Created

When a new page is created, update `TECH_GROUPS` in `src/app/components/navbar.jsx` to point directly to the new route instead of the fallback.

| New Page Created | Change in `TECH_GROUPS` |
|---|---|
| `hire-nextjs-developers` | Next.js item: `/staff-augmentation/hire-react-developers` → `/staff-augmentation/hire-nextjs-developers` |
| `hire-vuejs-developers` | Vue.js item: `/staff-augmentation` → `/staff-augmentation/hire-vuejs-developers` |
| `hire-angular-developers` | Angular item: `/staff-augmentation` → `/staff-augmentation/hire-angular-developers` |
| `hire-react-native-developers` | React Native item: `/staff-augmentation/hire-mern-stack-developers` → `/staff-augmentation/hire-react-native-developers` |
| `hire-flutter-developers` | Flutter item: `/staff-augmentation` → `/staff-augmentation/hire-flutter-developers` |
| `hire-ios-developers` | iOS item: `/staff-augmentation` → `/staff-augmentation/hire-ios-developers` |
| `hire-android-developers` | Android item: `/staff-augmentation` → `/staff-augmentation/hire-android-developers` |
| `hire-python-developers` | Python/Django item: `/staff-augmentation` → `/staff-augmentation/hire-python-developers` |
| `hire-php-developers` | PHP/Laravel item: `/staff-augmentation` → `/staff-augmentation/hire-php-developers` |

---

## 7. Page Template Reference

Every existing hire page follows this structure (use as template for new pages):

```
src/app/staff-augmentation/hire-[tech]-developers/
├── layout.jsx     ← SEO metadata (title, description, keywords, OG, canonical)
└── page.jsx       ← "use client" page with:
                       ├── SKILLS[]          — tech-specific skill tags
                       ├── RESULTS[]         — 4 trust metrics
                       ├── ENGAGEMENT_MODELS — Full-time / Part-time / Contract
                       ├── FAQ[]             — 5–6 FAQ items
                       ├── Hero section      — dark bg-slate-900, breadcrumb, h1, CTA
                       ├── Results bar       — 4-col trust metrics
                       ├── Skills grid
                       ├── Engagement models
                       ├── Process section
                       ├── FAQ accordion
                       └── BookingSection / BookingBanner CTAs
```

**Imports to copy from existing hire pages:**
- `framer-motion` for animations
- `react-icons/hi2` for icons
- `../../components/navbar`, `../../components/footer`
- `../../components/booking-cta` — `BookingSection`, `BookingBanner`, `FloatingBookingButton`, `BOOKING_URL`

---

## 8. Complete Site Route Inventory (All Pages)

<details>
<summary>Click to expand full route list</summary>

### Core pages
| Route | File |
|---|---|
| `/` | `app/page.jsx` (via `pages/homepage.jsx`) |
| `/about` | `about/page.jsx` |
| `/contact` | `contact/page.jsx` |
| `/services` | `services/page.jsx` |
| `/blog` | `blog/page.jsx` |
| `/blog/[slug]` | `blog/[slug]/page.jsx` |
| `/case-studies` | `case-studies/page.jsx` |
| `/case-studies/[slug]` | `case-studies/[slug]/page.jsx` |
| `/portfolio` | `portfolio/page.jsx` |
| `/careers` | `careers/page.jsx` |
| `/privacy-policy` | `privacy-policy/page.jsx` |
| `/terms-of-service` | `terms-of-service/page.jsx` |
| `/sitemap-page` | `sitemap-page/page.jsx` |

### AI Development cluster
| Route | File |
|---|---|
| `/ai-development` | `ai-development/page.jsx` |
| `/ai-development/ai-chatbot-development` | `…/ai-chatbot-development/page.jsx` |
| `/ai-development/generative-ai-development` | `…/generative-ai-development/page.jsx` |
| `/ai-development/rag-development-services` | `…/rag-development-services/page.jsx` |
| `/ai-development/llm-development-company` | `…/llm-development-company/page.jsx` |
| `/ai-development/ai-workflow-automation` | `…/ai-workflow-automation/page.jsx` |
| `/ai-development/openai-integration-services` | `…/openai-integration-services/page.jsx` |

### Insurance Software cluster
| Route | File |
|---|---|
| `/insurance-software-development` | `insurance-software-development/page.jsx` |
| `/insurance-software-development/insurance-crm-development` | `…/insurance-crm-development/page.jsx` |
| `/insurance-software-development/policy-management-software` | `…/policy-management-software/page.jsx` |
| `/insurance-software-development/insurance-agent-portal` | `…/insurance-agent-portal/page.jsx` |
| `/insurance-software-development/insurance-automation-solutions` | `…/insurance-automation-solutions/page.jsx` |
| `/insurance-software-development/insurance-mobile-app-development` | `…/insurance-mobile-app-development/page.jsx` |
| `/insurance-software-development/quote-comparison-platform` | `…/quote-comparison-platform/page.jsx` |

### ERP Development cluster
| Route | File |
|---|---|
| `/erp-development` | `erp-development/page.jsx` |
| `/erp-development/manufacturing-erp-development` | `…/manufacturing-erp-development/page.jsx` |
| `/erp-development/logistics-erp-software` | `…/logistics-erp-software/page.jsx` |
| `/erp-development/inventory-management-system` | `…/inventory-management-system/page.jsx` |
| `/erp-development/custom-erp-solutions` | `…/custom-erp-solutions/page.jsx` |
| `/erp-development/warehouse-management-system` | `…/warehouse-management-system/page.jsx` |
| `/erp-development/cosmetic-industry-erp` | `…/cosmetic-industry-erp/page.jsx` |

### SaaS Development cluster
| Route | File |
|---|---|
| `/saas-development` | `saas-development/page.jsx` |
| `/saas-development/multi-tenant-saas-development` | `…/multi-tenant-saas-development/page.jsx` |
| `/saas-development/b2b-saas-development` | `…/b2b-saas-development/page.jsx` |
| `/saas-development/crm-saas-development` | `…/crm-saas-development/page.jsx` |
| `/saas-development/cloud-saas-solutions` | `…/cloud-saas-solutions/page.jsx` |
| `/saas-development/subscription-platform-development` | `…/subscription-platform-development/page.jsx` |

### Document Management cluster
| Route | File |
|---|---|
| `/document-management-system` | `document-management-system/page.jsx` |
| `/document-management-system/enterprise-document-management` | `…/enterprise-document-management/page.jsx` |
| `/document-management-system/document-workflow-automation` | `…/document-workflow-automation/page.jsx` |
| `/document-management-system/legal-document-management` | `…/legal-document-management/page.jsx` |
| `/document-management-system/cloud-document-storage` | `…/cloud-document-storage/page.jsx` |
| `/document-management-system/document-approval-system` | `…/document-approval-system/page.jsx` |

### Staff Augmentation cluster
| Route | File | Status |
|---|---|---|
| `/staff-augmentation` | `staff-augmentation/page.jsx` | ✅ Live |
| `/staff-augmentation/hire-react-developers` | `…/hire-react-developers/page.jsx` | ✅ Live |
| `/staff-augmentation/hire-nodejs-developers` | `…/hire-nodejs-developers/page.jsx` | ✅ Live |
| `/staff-augmentation/hire-ai-engineers` | `…/hire-ai-engineers/page.jsx` | ✅ Live |
| `/staff-augmentation/hire-devops-engineers` | `…/hire-devops-engineers/page.jsx` | ✅ Live |
| `/staff-augmentation/hire-mern-stack-developers` | `…/hire-mern-stack-developers/page.jsx` | ✅ Live |
| `/staff-augmentation/dedicated-development-team` | `…/dedicated-development-team/page.jsx` | ✅ Live |
| `/staff-augmentation/hire-nextjs-developers` | ❌ Not created | 🟡 Phase 2 |
| `/staff-augmentation/hire-vuejs-developers` | ❌ Not created | 🔴 Phase 1 |
| `/staff-augmentation/hire-angular-developers` | ❌ Not created | 🟡 Phase 2 |
| `/staff-augmentation/hire-react-native-developers` | ❌ Not created | 🔴 Phase 1 |
| `/staff-augmentation/hire-flutter-developers` | ❌ Not created | 🟡 Phase 2 |
| `/staff-augmentation/hire-ios-developers` | ❌ Not created | 🟢 Phase 3 |
| `/staff-augmentation/hire-android-developers` | ❌ Not created | 🟢 Phase 3 |
| `/staff-augmentation/hire-python-developers` | ❌ Not created | 🔴 Phase 1 |
| `/staff-augmentation/hire-php-developers` | ❌ Not created | 🟡 Phase 2 |

### GEO / Landing pages
| Route | File | Notes |
|---|---|---|
| `/software-development-company-india` | `software-development-company-india/page.jsx` | GEO |
| `/software-development-company-usa` | `software-development-company-usa/page.jsx` | GEO |
| `/software-development-company-california` | `…/page.jsx` | GEO |
| `/software-development-company-new-york` | `…/page.jsx` | GEO |
| `/software-development-company-texas` | `…/page.jsx` | GEO |
| `/software-development-company-chandigarh` | `…/page.jsx` | GEO |
| `/software-development-company-punjab` | `…/page.jsx` | GEO |
| `/ai-development-company-india` | `…/page.jsx` | GEO |
| `/ai-development-company-usa` | `…/page.jsx` | GEO |
| `/erp-development-company-india` | `…/page.jsx` | GEO |
| `/saas-development-company-india` | `…/page.jsx` | GEO |
| `/staff-augmentation-company-india` | `…/page.jsx` | GEO |
| `/offshore-development-company-india` | `…/page.jsx` | GEO |
| `/hire-react-developers-india` | `…/page.jsx` | GEO hire page |
| `/it-company-bangalore` | `…/page.jsx` | GEO |
| `/it-company-chennai` | `…/page.jsx` | GEO |
| `/it-company-mohali` | `…/page.jsx` | GEO |

### Other service pages
| Route | File |
|---|---|
| `/software-development` | `software-development/page.jsx` |
| `/cloud-solutions` | `cloud-solutions/page.jsx` |
| `/data-engineering` | `data-engineering/page.jsx` |
| `/designing` | `designing/page.jsx` |

</details>

---

*Total existing pages: 68 | Missing staff-aug pages: 9 | Total after Phase 3: 77*
