export const caseStudies = [
  {
    id: "glovebox",
    tag: "Insurance · CRM · API Integration",
    client: "US Insurance Agency Platform",
    title: "Quote-to-bind in 45 minutes instead of 3 hours",
    summary:
      "An independent insurance agency was managing their entire book of business across spreadsheets, email, and three disconnected tools. Quoting required manually logging into carrier portals, copying data, and emailing PDFs. Client onboarding took days.",
    overview:
      "The agency had grown from 3 agents to 14 over four years, but their tooling hadn't evolved. Every quote involved logging into four carrier portals separately, copying client data by hand, formatting PDFs in Word, and emailing them out. Policy renewals were tracked in a shared spreadsheet. Follow-ups relied entirely on individual agents' memory. When agents left, their pipeline knowledge walked out with them. The owner had tried two off-the-shelf CRMs but neither understood the insurance workflow — neither could pull carrier rates or understand the difference between a BOR letter and a certificate of insurance.",
    challenge:
      "The agency needed a unified platform where agents could pull client data, generate quotes from multiple carriers via API, track policy status, and onboard clients — all in one place without switching tabs.",
    challengePoints: [
      "Carrier APIs (Hartford, Travelers, Nationwide) each had different auth mechanisms, rate structures, and response schemas",
      "Agents needed to compare quotes side-by-side across carriers before presenting to the client",
      "Policy documents, signed apps, and endorsements needed to be attached to specific policies, not floating in email",
      "Renewal pipeline had to surface upcoming renewals 60–90 days out automatically",
      "Compliance required a full audit trail of who quoted what and when",
    ],
    solution:
      "We built a custom insurance CRM with Hartford and other carrier API integrations. The platform automates quote generation, tracks pipeline stages, manages documents, and sends automated follow-ups to clients.",
    approachSteps: [
      {
        phase: "Phase 1 — Discovery & API Mapping (Weeks 1–2)",
        description:
          "We audited every carrier portal the team used, mapped their API endpoints and authentication flows, and designed a unified quote request schema that could fan out to multiple carriers simultaneously. We also interviewed 4 agents to map every workflow step they did manually.",
      },
      {
        phase: "Phase 2 — CRM Core (Weeks 3–6)",
        description:
          "Built the client profile system — accounts, contacts, exposure data, and policy history. Implemented the pipeline board with drag-and-drop stages (Prospect → Quoted → Presented → Bound → Renewed). Set up role-based access so agency principals could see all pipelines while agents only saw their own.",
      },
      {
        phase: "Phase 3 — Quote Engine (Weeks 7–9)",
        description:
          "Integrated Hartford's commercial lines API for BOP, GL, and workers' comp. Built the quote comparison view — agents fill in client data once, select carriers, and get back structured quotes within 60 seconds. Quote PDFs are auto-generated and stored against the client record.",
      },
      {
        phase: "Phase 4 — Document Vault & Automation (Weeks 10–12)",
        description:
          "Built the document management layer: drag-and-drop upload, versioning, and attachment to specific policies. Implemented automated renewal reminders (90/60/30 day email sequences) and follow-up nudges for open quotes older than 5 days.",
      },
    ],
    features: [
      "Multi-carrier quote generation from a single form",
      "Side-by-side carrier quote comparison view",
      "Automated renewal pipeline with 90/60/30-day reminders",
      "Document vault with policy-level attachment",
      "Client self-service portal for certificate requests",
      "Full audit trail with timestamped agent actions",
      "Role-based access (principal, agent, CSR)",
    ],
    architecture:
      "React frontend with a Node.js/Express API layer. PostgreSQL for all relational data (clients, policies, quotes). A dedicated carrier integration service handles API fanout with per-carrier retry logic and response normalisation. Documents stored in AWS S3 with signed URL delivery. Email automation via Resend. Deployed on AWS with a separate staging environment.",
    results: [
      { metric: "60%", label: "Reduction in quote processing time" },
      { metric: "3 hrs → 45 min", label: "Client onboarding time" },
      { metric: "100%", label: "Elimination of manual data entry" },
      { metric: "4 tools", label: "Replaced with one platform" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Hartford API", "AWS", "Stripe"],
    image: "/images/portfolio-glovebox.png",
    duration: "12 weeks",
    teamSize: "3 engineers",
  },
  {
    id: "readybuild",
    tag: "Construction · ERP · Project Management",
    client: "Mid-size Construction Company",
    title: "From bid to invoice — all in one system",
    summary:
      "A growing construction firm was managing 15+ simultaneous projects using a combination of Excel, WhatsApp groups, and QuickBooks. Project managers had no visibility into overall budget status. Invoicing was delayed by weeks.",
    overview:
      "The company had expanded from residential remodels to commercial fit-outs, and with that growth came complexity they weren't equipped to handle. Fifteen active projects meant fifteen Excel files, each owned by a different PM, each formatted differently. Budget overruns were discovered after the fact. Subcontractor invoices arrived by WhatsApp photo. The finance team spent the first two weeks of every month reconstructing what had actually been spent before they could issue client invoices — by which point cash flow was strained. The owner had looked at Procore and Buildertrend but found them too bloated and too expensive for their team size.",
    challenge:
      "They needed a system where project managers could track bids, assign tasks, monitor material costs, log daily progress, and trigger invoicing — without a separate tool for each function.",
    challengePoints: [
      "Bid data from estimating had to flow into project budgets without re-entry",
      "Field workers needed a simple mobile view to log daily progress and material use — they weren't technical",
      "Subcontractor costs arrived as photos of handwritten invoices — needed a structured way to capture and approve these",
      "Project budget vs. actual had to be visible in real time, not at month-end",
      "Client invoices needed to be generated from actual logged costs and sent with one click",
    ],
    solution:
      "We built a full construction ERP with modules for bid management, project tracking, task assignment, budget monitoring, supplier management, and invoice generation with PDF output. The system included a field worker mobile view.",
    approachSteps: [
      {
        phase: "Phase 1 — Module Design & Data Model (Weeks 1–2)",
        description:
          "Ran workshops with the owner, two PMs, and the finance lead to map every workflow from bid to invoice. Designed a data model that linked bids → projects → tasks → costs → invoices without requiring data re-entry at each stage.",
      },
      {
        phase: "Phase 2 — Bid & Project Core (Weeks 3–7)",
        description:
          "Built the bid module (line items, material costs, labour estimates, margin), and the project management module (phases, tasks, assignments, status tracking). Implemented budget vs. actual tracking that updated in real time as costs were logged.",
      },
      {
        phase: "Phase 3 — Field Worker Mobile View (Weeks 8–10)",
        description:
          "Built a simplified responsive view for field workers: they see their assigned tasks for the day, can log hours worked, record materials used, and upload site photos. Designed to work on slow mobile connections with local-first caching.",
      },
      {
        phase: "Phase 4 — Invoicing & Reporting (Weeks 11–14)",
        description:
          "Built the invoicing engine: invoice generated from logged costs, formatted as a branded PDF, sent directly to the client from the platform. Added project-level P&L reports and a cross-project dashboard for the owner.",
      },
    ],
    features: [
      "Bid management with line-item material and labour costing",
      "Project phases, tasks, and team assignment",
      "Real-time budget vs. actual tracking per project",
      "Field worker mobile view with time and material logging",
      "Subcontractor invoice capture and approval workflow",
      "One-click branded invoice generation and delivery",
      "Cross-project P&L dashboard for the owner",
      "Photo documentation per task/phase",
    ],
    architecture:
      "Next.js frontend with server-side rendering for the reporting dashboard. Node.js API layer with PostgreSQL. PDF generation using a headless PDF renderer with branded templates. Responsive mobile UI for field workers using progressive web app patterns with service worker caching for low-connectivity scenarios. Hosted on AWS with S3 for document and photo storage.",
    results: [
      { metric: "40 hrs", label: "Saved per week across team" },
      { metric: "28 days → 4 days", label: "Invoice generation cycle" },
      { metric: "100%", label: "Budget visibility across projects" },
      { metric: "0", label: "Missed billing cycles post-launch" },
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "PDF generation"],
    image: "/images/portfolio-readybuild.png",
    duration: "14 weeks",
    teamSize: "4 engineers",
  },
  {
    id: "dnh",
    tag: "E-Learning · SaaS · White-label",
    client: "Corporate Training Provider",
    title: "White-label training platform launched in 6 weeks",
    summary:
      "A corporate training company was delivering courses through a mix of Zoom sessions, emailed PDFs, and a third-party LMS they'd outgrown. They wanted their own branded platform with video hosting, progress tracking, and certificates.",
    overview:
      "The training company served 18 enterprise clients, running compliance training programmes across healthcare, finance, and logistics. They'd been using a third-party LMS that couldn't be white-labeled, had a clunky course authoring experience, and charged per-learner fees that were eating into their margins. A major enterprise client — a 2,000-person logistics firm — had agreed to onboard if the company could deliver a properly branded experience within 6 weeks. That conversation forced the decision to build their own platform.",
    challenge:
      "Build a clean, fast e-learning platform with course management, video streaming, quiz engine, progress tracking, and branded certificates — on a tight timeline before a major client onboarding event.",
    challengePoints: [
      "Video hosting had to be cost-efficient at scale — per-play charges from third-party video platforms would erode margins",
      "The quiz engine needed to support multiple question types and enforce pass marks before advancing",
      "Each enterprise client needed their own branded subdomain with custom logo and colours",
      "Certificates had to be uniquely identifiable and verifiable — learners were using them for compliance audits",
      "The 6-week deadline was fixed — the client's HR cycle started on a specific date",
    ],
    solution:
      "We shipped an MVP in 6 weeks covering course authoring, video hosting via cloud CDN, quiz engine, learner progress dashboards, certificate generation, and an admin panel to manage organizations and users.",
    approachSteps: [
      {
        phase: "Phase 1 — Architecture & Video Strategy (Week 1)",
        description:
          "Chose AWS S3 + CloudFront for video delivery over third-party embeds — better cost control and no branding leakage. Defined the multi-tenant data model upfront: one database with organisation scoping on all queries, with per-org custom branding configuration stored as a settings object.",
      },
      {
        phase: "Phase 2 — Course Authoring & Video (Weeks 2–3)",
        description:
          "Built the course builder: sections, lessons, video upload with async transcoding, supporting file attachments, and rich text for lesson bodies. Implemented video player with resume-position tracking so learners pick up where they left off.",
      },
      {
        phase: "Phase 3 — Quiz Engine & Progress (Week 4)",
        description:
          "Built the quiz engine supporting MCQ, true/false, and short-answer question types. Enforced configurable pass marks. Progress tracking calculated at lesson, section, and course level — a learner can't skip ahead past locked content.",
      },
      {
        phase: "Phase 4 — Certificates, Admin & Launch (Weeks 5–6)",
        description:
          "Certificate generation with unique verification codes, branded with client logo. Admin panel for creating organisations, managing users, assigning courses, and viewing completion reports. Deployed with SSL on custom subdomains. Onboarded the logistics client with 500 learners during the final week.",
      },
    ],
    features: [
      "Multi-tenant white-label with per-client branding",
      "Course authoring with video, text, and attachments",
      "Video streaming via CloudFront with adaptive playback",
      "Resume position tracking across sessions",
      "Quiz engine with configurable pass marks and content gating",
      "Learner progress dashboards",
      "Unique verifiable completion certificates",
      "Organisation admin panel with bulk user management",
      "Completion reporting for compliance export",
    ],
    architecture:
      "Next.js frontend with ISR for course content pages. Node.js API with PostgreSQL and a Redis session layer. Video uploaded to S3, transcoded via AWS Elastic Transcoder, served through CloudFront. Certificate generation uses a Canvas-based renderer outputting PDFs with unique UUID-stamped verification codes. Stripe for subscription billing per organisation seat count. Multi-tenant isolation enforced at the query layer with row-level organisation scoping.",
    results: [
      { metric: "6 weeks", label: "MVP to production launch" },
      { metric: "500+", label: "Learners onboarded in month 1" },
      { metric: "40%", label: "Reduction in trainer admin time" },
      { metric: "NPS 72", label: "Learner satisfaction score" },
    ],
    stack: ["Next.js", "Node.js", "AWS S3", "CloudFront", "PostgreSQL", "Stripe"],
    image: "/images/portfolio-dnh.png",
    duration: "6 weeks (MVP)",
    teamSize: "3 engineers",
  },
  {
    id: "builderwing",
    tag: "Marketplace · Real Estate · React",
    client: "Home Improvement Marketplace",
    title: "A two-sided marketplace connecting homeowners and contractors",
    summary:
      "A startup building a home improvement marketplace needed a platform where homeowners could post jobs, contractors could bid, and both parties could communicate, schedule, and transact — all in one place.",
    overview:
      "The founder had spent 12 years in residential contracting and had seen both sides of the problem: homeowners getting fleeced by cowboy contractors, and skilled tradespeople struggling to find steady work because they had no marketing budget. The idea was a vetted marketplace — contractors go through a verification process (licence check, insurance confirmation, reviews from past clients) before they can bid. Homeowners post jobs with a budget range and photos, and only vetted contractors in the right service area can respond. The platform takes a commission on completed jobs.",
    challenge:
      "Build the full marketplace infrastructure: contractor profiles, job posting, bid management, in-app messaging, scheduling, payment escrow, review system, and an admin panel to manage disputes and payouts.",
    challengePoints: [
      "Two separate user types (homeowners and contractors) with fundamentally different interfaces and permissions",
      "Real-time messaging had to feel instant — polling was not acceptable on the contractor side where response speed is a competitive differentiator",
      "Payment escrow: homeowner pays at job acceptance, contractor paid at completion — required careful Stripe Connect integration with dispute handling",
      "Contractor verification was a manual step — the admin needed tooling to review licence docs and mark contractors as verified",
      "The review system had to be tamper-resistant — no editing reviews after 24 hours, no deleting by contractors",
    ],
    solution:
      "We architected and built the full platform with separate homeowner and contractor interfaces, a real-time messaging system, Stripe Connect for split payments, and a moderation dashboard for the operations team.",
    approachSteps: [
      {
        phase: "Phase 1 — Architecture & Dual Interface Design (Weeks 1–3)",
        description:
          "Designed the full data model for the marketplace: users, profiles, jobs, bids, messages, payments, reviews. Decided on a single Next.js app with route-based role switching rather than two separate apps — shared component library, role-aware layouts. Planned the Stripe Connect flow upfront given its complexity.",
      },
      {
        phase: "Phase 2 — Contractor Profiles & Job Posting (Weeks 4–7)",
        description:
          "Built contractor onboarding: profile creation, service categories, service area (zip code radius), portfolio photos, licence and insurance document upload. Built homeowner job posting: job description, photos, budget range, job category, location. Implemented matching logic to surface relevant jobs to contractors in their service area.",
      },
      {
        phase: "Phase 3 — Bid Management & Messaging (Weeks 8–11)",
        description:
          "Bid system: contractors submit a bid with price, timeline, and a message. Homeowners see bids ranked by rating and price. Built real-time messaging using Socket.io with persistent message history in PostgreSQL. Implemented read receipts and typing indicators. Added the scheduling flow: homeowner proposes a time, contractor confirms.",
      },
      {
        phase: "Phase 4 — Payments, Reviews & Launch (Weeks 12–16)",
        description:
          "Integrated Stripe Connect: homeowner pays into escrow at bid acceptance, funds released to contractor upon job completion confirmation from homeowner. Built the review system with tamper-resistant controls. Built the admin moderation dashboard for disputes, contractor verification, and payout management. Soft-launched with 120 verified contractors.",
      },
    ],
    features: [
      "Dual-interface app (homeowner and contractor views)",
      "Contractor verification workflow with document review",
      "Job posting with photos, budget range, and service area matching",
      "Bid submission and comparison for homeowners",
      "Real-time in-app messaging with read receipts",
      "Scheduling and appointment confirmation",
      "Stripe Connect escrow payment with dispute handling",
      "Tamper-resistant review and rating system",
      "Admin moderation dashboard with payout management",
    ],
    architecture:
      "React/Next.js frontend with separate layout contexts for homeowner and contractor roles. Node.js API with PostgreSQL. Real-time messaging via Socket.io with a dedicated WebSocket server on AWS EC2. Stripe Connect with custom account creation, payment intents, and payout scheduling. Images uploaded to S3. The admin dashboard is a separate Next.js route with its own middleware-enforced auth. Deployed on AWS with an Application Load Balancer routing between the API and WebSocket servers.",
    results: [
      { metric: "120+", label: "Contractors onboarded at launch" },
      { metric: "$180K", label: "Transaction volume in month 2" },
      { metric: "4.8/5", label: "Average contractor rating" },
      { metric: "16 wks", label: "Concept to launch" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Stripe Connect", "Socket.io", "AWS"],
    image: "/images/portfolio-builderwing.png",
    duration: "16 weeks",
    teamSize: "4 engineers",
  },
];
