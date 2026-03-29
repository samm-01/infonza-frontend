export const posts = [
  {
    slug: "how-we-cut-insurance-onboarding-from-3-hours-to-45-minutes",
    title: "How We Cut Insurance Onboarding from 3 Hours to 45 Minutes",
    excerpt:
      "A deep dive into the workflow automation system we built for a US insurance agency — what we built, why we built it that way, and the results.",
    category: "Case Study",
    date: "March 18, 2026",
    readTime: "7 min read",
    featured: true,
    content: [
      {
        type: "p",
        text: "When the Operations Director of a mid-sized US insurance agency first described their onboarding problem, we thought it would be a straightforward automation project. It wasn't. The complexity was hidden in the edge cases — and understanding those edge cases is what made the final system actually work.",
      },
      {
        type: "h2",
        text: "The Problem",
      },
      {
        type: "p",
        text: "New client onboarding took 3+ hours per client, spread across a team of four. Staff were copying data between a legacy CRM, carrier portals, and spreadsheets by hand. Quote generation alone required logging into four separate systems. Policy binding meant downloading PDFs, annotating them, and emailing them back. Every step introduced room for human error.",
      },
      {
        type: "p",
        text: "Worse, the agency had grown. What was manageable at 40 clients per month was breaking down at 120. They were hitting a growth ceiling caused entirely by a process problem.",
      },
      {
        type: "h2",
        text: "What We Built",
      },
      {
        type: "p",
        text: "We built a custom CRM with Hartford and carrier API integrations. The core workflow looks like this: a new client fills in a standardised intake form. The system pulls their risk profile, runs it against carrier APIs to generate real-time quotes, and surfaces the top three options to the agent. The agent selects a quote, the system auto-generates the binding documents, and the client receives a DocuSign link directly.",
      },
      {
        type: "p",
        text: "The stack was React on the frontend, Node.js with PostgreSQL on the backend, deployed on AWS. The Hartford API integration required significant work — their API documentation was incomplete and we had to reverse-engineer several response schemas from test calls.",
      },
      {
        type: "h2",
        text: "The Part Nobody Talks About",
      },
      {
        type: "p",
        text: "The technical build was maybe 60% of the work. The other 40% was process mapping. We spent three weeks doing nothing but sitting with the agency team, mapping every variation of their onboarding process. Commercial vs residential. New client vs renewal. Standard risk vs referred risk.",
      },
      {
        type: "p",
        text: "Every exception had to be handled explicitly. The system needed to know when to proceed automatically and when to route to a human. Getting those decision points wrong would have created a system that saved time in easy cases but caused disasters in hard ones.",
      },
      {
        type: "h2",
        text: "The Results",
      },
      {
        type: "p",
        text: "Onboarding time dropped from 3 hours to under 45 minutes. The agency processed 40% more clients in the first month after launch without adding staff. Error rates on policy documents dropped to near zero. The Operations Director told us the ROI was clear within 60 days.",
      },
      {
        type: "p",
        text: "The bigger win was what it unlocked. With capacity freed up, the agency expanded into a new commercial lines product they'd been planning for two years but couldn't resource.",
      },
      {
        type: "h2",
        text: "What This Tells You About Automation Projects",
      },
      {
        type: "p",
        text: "Don't start with the technology. Start with the process. Map every variation, every exception, every escalation path. Understand the human decisions before you try to automate them. The best automation systems don't replace human judgment — they handle the routine so humans can focus on the cases that actually need them.",
      },
    ],
  },
  {
    slug: "why-most-saas-mvps-fail-and-how-to-avoid-it",
    title: "Why Most SaaS MVPs Fail (And How to Avoid It)",
    excerpt:
      "After building 50+ products, we've seen the same mistakes over and over. Here's what separates MVPs that get traction from ones that get scrapped.",
    category: "Product",
    date: "February 28, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "We've built over 50 products for clients across insurance, construction, e-learning, and logistics. We've seen MVPs ship and grow into real businesses. We've also seen MVPs launch and die quietly six months later. The difference is almost never the technology.",
      },
      {
        type: "h2",
        text: "Mistake 1: Building a Feature, Not a Product",
      },
      {
        type: "p",
        text: "The most common failure mode is scope creep in the wrong direction. Founders add features because they're afraid of shipping something too simple. The result is a product that does eight things mediocrely rather than one thing exceptionally. Early users don't know what they're supposed to do with it.",
      },
      {
        type: "p",
        text: "A working MVP should be embarrassingly focused. It should solve one specific problem for one specific person so clearly that the value proposition is obvious within 30 seconds of using it.",
      },
      {
        type: "h2",
        text: "Mistake 2: Building Before Selling",
      },
      {
        type: "p",
        text: "We push back hard on clients who want to spend their first $50K building before they have paying commitments. The right order is: talk to 20 potential users, identify 3-5 who will pay on day one, build for those 3-5. If you can't find 3 people willing to pay before you build, that's your answer.",
      },
      {
        type: "p",
        text: "This sounds obvious but founders routinely skip it. They're afraid of rejection. The cost of building something nobody wants is dramatically higher than the cost of an awkward sales conversation.",
      },
      {
        type: "h2",
        text: "Mistake 3: Wrong Definition of Done",
      },
      {
        type: "p",
        text: "An MVP is not done when you've built the features on your list. It's done when a real user has completed the core workflow without your help and told you it solved their problem. Everything else is just code.",
      },
      {
        type: "h2",
        text: "What Working MVPs Have in Common",
      },
      {
        type: "p",
        text: "Looking at the MVPs that turned into real businesses, a few patterns stand out. They had a specific, painful problem — not a vague improvement. They had a founder who was close enough to the customer to know when they'd succeeded. And they had a clear path from the MVP to revenue on day one, not \"we'll monetise later.\"",
      },
      {
        type: "p",
        text: "The technology almost doesn't matter at the MVP stage. What matters is whether you're solving a real problem, whether you can demonstrate the solution clearly, and whether the people with the problem will pay to have it solved.",
      },
    ],
  },
  {
    slug: "choosing-the-right-stack-for-your-crm-project",
    title: "Choosing the Right Stack for Your CRM Project",
    excerpt:
      "React + Node vs Laravel vs low-code: a practical framework for picking the right stack based on scale, team, and long-term maintenance cost.",
    category: "Engineering",
    date: "February 10, 2026",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "We get asked about stack choice on almost every new CRM project. Clients come in with strong opinions — often based on what they've read rather than what they've built. Here's our actual framework for making this decision.",
      },
      {
        type: "h2",
        text: "The Question Isn't Which Stack Is Best",
      },
      {
        type: "p",
        text: "React + Node, Laravel, and low-code platforms like Retool or Bubble are all capable of building a working CRM. The question is which one is best for your specific constraints: team size, timeline, expected scale, and long-term maintenance cost.",
      },
      {
        type: "h2",
        text: "When We Choose React + Node",
      },
      {
        type: "p",
        text: "For most of our CRM projects — particularly those with complex workflows, multiple user roles, and external API integrations — we default to React on the frontend and Node.js with PostgreSQL on the backend. The reasons are practical: this stack gives us fine-grained control over the data model, it scales cleanly, and the talent pool for maintenance is deep.",
      },
      {
        type: "p",
        text: "The tradeoff is build time. A React + Node CRM takes longer to scaffold than a Laravel app. For projects with a 6-week MVP deadline, this matters.",
      },
      {
        type: "h2",
        text: "When We Choose Laravel",
      },
      {
        type: "p",
        text: "Laravel is genuinely excellent for CRMs that have standard CRUD requirements and tight timelines. Eloquent ORM, built-in authentication, and Laravel Nova for admin interfaces let us move fast. We use it when the client needs something working in 4-6 weeks and the core workflows are well-understood.",
      },
      {
        type: "p",
        text: "The risk with Laravel is when requirements evolve significantly post-launch. Bolt-on complexity is harder to manage than in a purpose-built Node architecture.",
      },
      {
        type: "h2",
        text: "When We Recommend Low-Code",
      },
      {
        type: "p",
        text: "Almost never for primary CRM builds. Low-code platforms make internal admin tooling extremely fast to build, and we do use Retool for internal dashboards. But for client-facing CRMs that will carry real business operations, the limitations show up quickly — custom workflows, performance at scale, and UI flexibility all hit walls.",
      },
      {
        type: "h2",
        text: "The Real Deciding Factor",
      },
      {
        type: "p",
        text: "Who will maintain this in three years? If your team has Laravel experience, Laravel is probably right. If you're building a technical team that will extend the product significantly, React + Node gives you more room. If you have no internal technical team and this is a stable internal tool, low-code might be fine.",
      },
      {
        type: "p",
        text: "Stack decisions made without considering long-term maintenance create technical debt that costs more than the initial build. Ask the maintenance question first.",
      },
    ],
  },
  {
    slug: "api-integrations-that-actually-hold-up-in-production",
    title: "API Integrations That Actually Hold Up in Production",
    excerpt:
      "Rate limits, retries, webhooks, and error handling — the unglamorous work that separates a demo-ready integration from a production-ready one.",
    category: "Engineering",
    date: "January 22, 2026",
    readTime: "8 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "Every API integration works in the demo. The test data is clean, the endpoints return 200s, and everything looks smooth. Then you go to production and discover that the third-party API times out under load, returns malformed JSON for certain edge cases, and has rate limits that nobody mentioned in the documentation.",
      },
      {
        type: "h2",
        text: "Rate Limits Are Not Suggestions",
      },
      {
        type: "p",
        text: "We've inherited integrations that worked fine until the client ran a batch job that triggered 2,000 API calls in a minute. The third-party API throttled them, the integration had no retry logic, and silent failures corrupted data for hours before anyone noticed.",
      },
      {
        type: "p",
        text: "Every integration we build now has explicit rate limit handling. We track call counts with Redis, implement token bucket algorithms for sustained high-volume calls, and always build retry logic with exponential backoff.",
      },
      {
        type: "h2",
        text: "Design for Failure, Not Success",
      },
      {
        type: "p",
        text: "The happy path is easy to build. What happens when the API returns a 503? What happens when it returns a 200 but the response body is empty? What happens when a required field is null? We've seen all of these from APIs that were supposedly well-documented.",
      },
      {
        type: "p",
        text: "Our standard practice: every API call is wrapped in error handling that distinguishes between retryable and non-retryable failures. Network errors and 5xx responses get retried. 4xx responses get logged with the full request payload and surfaced to the user with a meaningful message.",
      },
      {
        type: "h2",
        text: "Webhooks Are More Reliable Than Polling",
      },
      {
        type: "p",
        text: "If the API supports webhooks, use them. Polling is expensive, laggy, and breaks rate limits faster than anything else. Webhooks are event-driven, immediate, and kind to API quotas.",
      },
      {
        type: "p",
        text: "The catch: webhook endpoints need to be idempotent. Third-party services will deliver the same webhook multiple times — intentionally, for reliability. Your handler needs to detect and ignore duplicates. We use a processed event ID table to handle this.",
      },
      {
        type: "h2",
        text: "Document What the Docs Don't Tell You",
      },
      {
        type: "p",
        text: "Every integration has quirks that aren't in the official documentation. Specific error codes that only appear in edge cases. Undocumented rate limits on specific endpoints. Response fields that are sometimes null and sometimes missing entirely.",
      },
      {
        type: "p",
        text: "We maintain an internal integration notes document for every API we work with — a running log of everything we've discovered that the official docs don't cover. It saves hours on every subsequent project that touches the same API.",
      },
      {
        type: "h2",
        text: "Monitor Everything",
      },
      {
        type: "p",
        text: "Integration health isn't something you check when something breaks. Set up monitoring for API response times, error rates, and rate limit consumption. Alert when error rates spike or when you're approaching 80% of your rate limit. Silent failures are the most expensive kind.",
      },
    ],
  },
  {
    slug: "what-us-startups-get-wrong-about-offshore-development",
    title: "What US Startups Get Wrong About Offshore Development",
    excerpt:
      "Bad offshore experiences usually come down to three things: unclear specs, no accountability structure, and treating developers as order-takers.",
    category: "Business",
    date: "January 8, 2026",
    readTime: "4 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "Most bad offshore development experiences are predictable. They follow the same pattern: a US founder with a tight budget hires a cheap offshore team, sends a vague brief, and expects a working product in 8 weeks. When it doesn't work out, they conclude that offshore development doesn't work.",
      },
      {
        type: "p",
        text: "The problem wasn't offshore development. The problem was the engagement model.",
      },
      {
        type: "h2",
        text: "Mistake 1: Vague Specifications",
      },
      {
        type: "p",
        text: "\"Build me a CRM\" is not a specification. Neither is a 2-page brief with wireframes. A real technical specification covers user roles and permissions, data models, workflow logic, integration requirements, edge cases, and acceptance criteria for every feature.",
      },
      {
        type: "p",
        text: "Offshore teams build what they're told to build. If the spec is vague, they'll make assumptions. Those assumptions will often be wrong, and you'll pay to rebuild what was built wrong.",
      },
      {
        type: "h2",
        text: "Mistake 2: No Accountability Structure",
      },
      {
        type: "p",
        text: "Weekly status updates via email don't create accountability. Real accountability means weekly demos of working software, explicit sign-off before moving to the next sprint, and written change requests for any deviation from the agreed spec.",
      },
      {
        type: "p",
        text: "If you haven't seen working software in two weeks, something is wrong. Time zone gaps make it easy for problems to hide. Structure your engagement so that progress is visible and verified at least weekly.",
      },
      {
        type: "h2",
        text: "Mistake 3: Treating Developers as Order-Takers",
      },
      {
        type: "p",
        text: "The offshore teams that deliver real value are the ones that push back. If you tell a good development team to build something that will cause problems, they should tell you. If they just build what you say without question, you don't have a development partner — you have an expensive keyboard.",
      },
      {
        type: "p",
        text: "Look for teams that ask uncomfortable questions. What's the business reason for this feature? Have you validated this with users? What happens to the data model when you add that later?",
      },
      {
        type: "h2",
        text: "What Good Offshore Engagement Looks Like",
      },
      {
        type: "p",
        text: "Discovery call to understand the business problem. Written technical spec agreed before any code is written. Weekly sprints with Friday demos. Explicit sign-off before the next sprint starts. 60-day post-launch support included.",
      },
      {
        type: "p",
        text: "Done right, offshore development gives you access to senior engineering talent at a fraction of the cost of a US-based team. Done wrong, it costs more than building locally because you pay twice.",
      },
    ],
  },
  {
    slug: "erp-implementation-lessons-from-a-construction-company",
    title: "ERP Implementation Lessons from a Construction Company",
    excerpt:
      "Building Readybuild taught us that ERP projects live or die on change management, not technology. Here's what actually mattered.",
    category: "Case Study",
    date: "December 15, 2025",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "ERP projects have a reputation for going wrong. Billions spent on SAP implementations that never go live. Custom systems that take three years instead of one. Adoption failures where expensive software sits unused because nobody changed how they work.",
      },
      {
        type: "p",
        text: "When we built Readybuild — an ERP for construction companies covering project management, bid tracking, accounting, and resource planning — we learned that the technical build was straightforward. The hard part was everything else.",
      },
      {
        type: "h2",
        text: "The Technical Build",
      },
      {
        type: "p",
        text: "Readybuild is a React + Node.js application with PostgreSQL, deployed on AWS. The core modules are project management with Gantt-style scheduling, bid tracking with version history, accounting with job costing, and a resource planning module that handles both equipment and labour across multiple sites.",
      },
      {
        type: "p",
        text: "The technical challenges were real — particularly the job costing module, which needed to aggregate costs across projects, cost codes, and time periods in real time without killing database performance. We solved that with materialised views and a careful caching strategy.",
      },
      {
        type: "h2",
        text: "What Almost Killed the Project",
      },
      {
        type: "p",
        text: "Six months into the build, the client's site supervisors weren't using the system. They had their own spreadsheets, their own processes, and no incentive to change. The system was technically complete. Nobody was using it.",
      },
      {
        type: "p",
        text: "This is the ERP failure mode that nobody talks about: the system works but the organisation doesn't change. Software adoption requires organisational change management, and that's not something you can build.",
      },
      {
        type: "h2",
        text: "What We Did",
      },
      {
        type: "p",
        text: "We went back to basics. Three weeks of on-site sessions with site supervisors, understanding their existing workflow, identifying where the system created friction instead of removing it. We rebuilt the mobile interface based on what we learned — simplified down to the three actions supervisors needed to do most often.",
      },
      {
        type: "p",
        text: "We also pushed the client to designate \"champions\" on each site — supervisors who were enthusiastic early adopters and could support their colleagues. That human element mattered more than any feature we could add.",
      },
      {
        type: "h2",
        text: "What ERP Projects Actually Need",
      },
      {
        type: "p",
        text: "Executive sponsorship that's visible and real — not just budget approval, but executives who use the system themselves. A clear answer to \"what's in it for me\" for every user group. Enough simplification that the system is easier than the existing process, not just more powerful.",
      },
      {
        type: "p",
        text: "The technology is the easy part. The hard part is understanding how people work today and designing a system that they'll actually want to switch to.",
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
