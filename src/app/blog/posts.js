export const posts = [
  {
    slug: "lessons-from-building-white-label-elearning-saas",
    title: "What We Learned Building a White-Label E-Learning SaaS",
    excerpt:
      "We built a white-label e-learning platform in six weeks — video hosting, quiz engine, progress tracking, and certificates across multiple tenants. Here's what the architecture required and what the timeline forced us to prioritise.",
    category: "Case Study",
    date: "May 1, 2026",
    readTime: "7 min read",
    featured: true,
    content: [
      {
        type: "p",
        text: "When a US training company asked us to build a white-label e-learning SaaS with video hosting, a quiz engine, learner progress tracking, and certificate generation — all serving multiple corporate clients under their own branding — we had six weeks to get it to an MVP they could demo to paying clients. We'd built e-learning modules inside larger platforms before, but this was the first time we were building the platform itself. Here's what actually mattered in the architecture and what the timeline forced us to get right.",
      },
      {
        type: "h2",
        text: "White-Label Requires Multi-Tenancy from Day One",
      },
      {
        type: "p",
        text: "White-labeling sounds like a design problem — swap logos, change colors. It isn't. The moment you have multiple tenants sharing infrastructure, every table in your database needs a tenant identifier, every query needs to be scoped correctly, and every access control layer needs to enforce that boundary without exception. We evaluated two approaches for this SaaS development project: schema-per-tenant (each customer gets their own PostgreSQL schema) and row-level tenancy (a single schema with tenant_id on every table). We went with row-level tenancy. The operational overhead of managing dozens of schemas — migrations, maintenance, monitoring — wasn't worth it at MVP scale. The trade-off is that a badly written query can expose cross-tenant data. We mitigated this with mandatory tenancy middleware and database-level row security policies as a safety net. Retrofitting multi-tenancy costs roughly three times as much as building it correctly from the start — this is one decision you cannot defer.",
      },
      {
        type: "h2",
        text: "Video Hosting Is Infrastructure, Not a Feature",
      },
      {
        type: "p",
        text: "We've inherited e-learning builds where video hosting was treated as an afterthought — MP4s stored on S3, served via direct URL, done. This works until a client streams a 2GB training video over a corporate network with rate limiting. Our architecture: S3 for storage, CloudFront for distribution, and an FFmpeg-based transcoding pipeline that generates adaptive bitrate HLS streams at three quality levels. A Lambda function triggers transcoding when a new video lands in the upload bucket. Videos aren't published until transcoding completes and passes validation. These are cloud services decisions that touch every learner's experience on every device — getting them wrong means buffering failures at exactly the moment you're trying to demonstrate the platform to a paying client.",
      },
      {
        type: "h2",
        text: "Building a Quiz Engine That's Actually Useful",
      },
      {
        type: "p",
        text: "Quiz engines look simple until you build one with real requirements: multiple question types (MCQ, true/false, multi-select, fill-in-the-blank), configurable passing scores, attempt limits, and time limits. We used a flexible question schema where each question type carries a typed payload. Scoring is handled entirely server-side — client-side scoring is trivially gameable and we've seen it exploited. Attempt history is stored in full, not just the final score, because instructors need visibility into where learners are struggling, not just whether they passed. We added branching logic in week five: if a learner fails a quiz, the system routes them to a remediation module before they can advance. That feature took less than a week and made the platform significantly more defensible against competitors.",
      },
      {
        type: "h2",
        text: "Progress Tracking That Reflects Reality",
      },
      {
        type: "p",
        text: "Most e-learning platforms track completion at the module level: did the learner reach the end of this video? We modeled progress as events — video_played, video_paused, video_completed, quiz_attempted, quiz_passed — stored in append-only event tables. Completion percentage is derived from events, not stored as a mutable field. This is slower to aggregate but gives accurate data. It also enables resume-from-position: when a learner returns after three days, the video starts where they stopped, not at zero. That sounds minor. In practice, it determines whether a learner re-engages or abandons a course. Scalable architecture here means designing for the read patterns that matter — per-learner progress queries are fast; aggregate reporting across a full cohort uses a materialized view refreshed on a schedule.",
      },
      {
        type: "h2",
        text: "Certificate Generation Under Concurrent Load",
      },
      {
        type: "p",
        text: "Certificates are a compliance requirement for most corporate training programs. Learners need a PDF immediately; HR needs a verification link that works six months later. We render certificates with Puppeteer from HTML templates — this gives full design flexibility without a separate PDF library. The problem is concurrency: a large cohort completing the same course simultaneously creates a CPU spike. Certificate generation runs in a background queue with a dedicated worker pool. Learners get an in-app notification and email when their certificate is ready, typically within 30–60 seconds. Verification links are permanent and return structured metadata without exposing the PDF directly, which matters for companies that need auditable compliance records.",
      },
      {
        type: "h2",
        text: "What the Six-Week Timeline Actually Forced",
      },
      {
        type: "p",
        text: "Tight timelines are useful if you treat them as a scoping tool, not just a deadline. The six-week constraint forced explicit trade-offs that made the MVP development better. We skipped SCORM import — would have taken ten days — and built a native content authoring interface instead. We punted live session integration to phase two. We built one payment integration, not three. Every deferral was a discovery: these features weren't what the platform needed to demonstrate value on day one. Our CI/CD pipeline — GitHub Actions deploying to a staging environment with automated smoke tests before production promotion — meant we were shipping daily without manual QA bottlenecks. The client had paying enterprise clients within 30 days. Deferred features were added in sequence, prioritised by real user feedback rather than our initial assumptions.",
      },
      {
        type: "h2",
        text: "The Practical Takeaway",
      },
      {
        type: "p",
        text: "If you are planning an e-learning SaaS as part of a digital transformation initiative or as a standalone product, three decisions matter most. First, design your tenancy model before you write your first table — the cost of retrofitting it is enormous. Second, treat video infrastructure as a first-class architectural concern, not an upload widget. Third, store full learner attempt data as events, not summary scores — the analytics you can build from that data are what enterprise clients will actually pay for. The platform is not the video player and the quiz form. The platform is the data that tells a business whether their training is working.",
      },
    ],
  },
  {
    slug: "the-true-cost-of-tool-sprawl",
    title: "The True Cost of Tool Sprawl (And Why Custom Software Is Often Cheaper)",
    excerpt:
      "We built an operations platform that replaced five disconnected tools for a US service company. Here's what tool sprawl actually costs — and when consolidating into custom software makes business sense.",
    category: "Business",
    date: "April 20, 2026",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "When a US-based service company came to us, they were running their business across five separate platforms: one for client management, one for task tracking, one for time logging, one for internal messaging, and one for billing. Each tool was fine on its own. Together, they were quietly destroying their operations team.",
      },
      {
        type: "h2",
        text: "What Tool Sprawl Actually Looks Like",
      },
      {
        type: "p",
        text: "The symptoms are easy to recognise. An account manager finishes a client call, opens three tabs to log the time, create a follow-up task, and send an internal message. A billing run requires pulling data from the time tracker into a spreadsheet, cross-referencing it with the project tool, then manually entering totals into the billing platform. A new hire needs accounts on five systems before they can do their first task.",
      },
      {
        type: "p",
        text: "None of these steps are hard. But they add up. Every context switch costs time. Every manual data transfer introduces error. Every separate login is a potential failure point. What looked like five affordable SaaS subscriptions turned out to be a hidden tax on every hour worked.",
      },
      {
        type: "h2",
        text: "The Costs Nobody Puts in a Spreadsheet",
      },
      {
        type: "p",
        text: "The subscription costs for five mid-tier SaaS tools might run $400–$800 per month for a 10-person team. That number is visible. What isn't visible: the 45 minutes per day each team member spends switching between tools, duplicating data entry, or looking for information that exists in a different system. For a 10-person team, that's roughly 75 hours a week — nearly two full-time employees — spent on the friction between tools rather than on the actual work.",
      },
      {
        type: "p",
        text: "There's also the error cost. When data lives in five places, it drifts out of sync. The time tracker says 12 hours on a project; the billing platform says 10. The task tool shows a milestone completed; the client portal still shows it pending. Reconciling these discrepancies is a management problem that consumes senior time disproportionate to its importance.",
      },
      {
        type: "h2",
        text: "Why Off-the-Shelf Consolidation Tools Don't Solve It",
      },
      {
        type: "p",
        text: "The obvious answer is a platform that does everything — something like Monday, ClickUp, or HubSpot. We asked why they hadn't gone that route. The answer was consistent: the all-in-one tools were either too generic (they'd looked at Monday), required significant configuration work that their team lacked the capacity to do, or had billing and client management modules that didn't fit their specific workflow.",
      },
      {
        type: "p",
        text: "This is more common than it sounds. Off-the-shelf consolidation tools are built for the median use case. If your workflow differs from the median in even two or three significant ways, you end up doing the same kind of manual workarounds that created the sprawl problem in the first place — just within a single (more expensive) tool.",
      },
      {
        type: "h2",
        text: "What We Built: The Load Off",
      },
      {
        type: "p",
        text: "We built a single operations platform — The Load Off — that combined client management, task tracking, time logging, team messaging, and billing into one unified system with a shared data model. A project manager can log time against a task, which automatically flows into the billing run. A client record is the anchor for every task, message thread, and invoice. No data entry duplication. No context switching for routine operations.",
      },
      {
        type: "p",
        text: "The key design decision was building around their actual workflow rather than forcing them to adapt to an existing tool's model. Their billing logic — milestone-based for some clients, hourly for others, retainer for others — was unusual enough that no off-the-shelf tool handled it cleanly. That was the wedge that made custom software justified.",
      },
      {
        type: "h2",
        text: "When Custom Software Makes Business Sense",
      },
      {
        type: "p",
        text: "Custom software is not always the answer. But there are three conditions under which it usually beats SaaS tools: when the coordination cost between tools has grown large enough to quantify (not just feel), when the workflow is differentiated enough that off-the-shelf tools require significant workarounds, and when the team is large enough that a per-user SaaS subscription starts to rival a one-time build cost.",
      },
      {
        type: "p",
        text: "The break-even math for The Load Off was straightforward. The five existing subscriptions plus a realistic estimate of the coordination tax cost more annually than the build cost amortised over three years. The business case wasn't about technology — it was about eliminating a recurring operational cost that had no natural ceiling.",
      },
      {
        type: "h2",
        text: "The Practical Takeaway",
      },
      {
        type: "p",
        text: "If you're running your operations across more than three tools and your team is spending meaningful time on data reconciliation, it's worth doing the math. Add up subscription costs, estimate the hours your team spends on tool-switching and manual data transfer, and put a dollar figure on it. If that number surprises you — and it usually does — you're not looking at a technology problem. You're looking at a business problem with a technology solution.",
      },
    ],
  },
  {
    slug: "designing-multi-role-platforms-lessons-from-darren",
    title: "Designing Multi-Role Platforms: Lessons from Building Darren",
    excerpt:
      "When every user type has different goals and different mental models, product design gets hard fast. Here's how we approached it building a logistics coordination platform with three distinct roles.",
    category: "Product",
    date: "April 15, 2026",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "When we started building Darren, a logistics coordination platform for a US client, the brief looked straightforward: cargo owners post jobs, fleet owners bid on them, drivers execute deliveries. Three roles, one platform. Simple enough on a whiteboard.",
      },
      {
        type: "p",
        text: "Six months into the project, we'd rebuilt the bidding interface twice and the driver app once. Not because we made technical mistakes — because we kept discovering that our assumptions about how each role thought about the same data were wrong. Multi-role platforms have a failure mode that single-role products don't: you can solve the UX for one role while actively breaking it for another.",
      },
      {
        type: "h2",
        text: "Start with the Core Transaction, Not the Roles",
      },
      {
        type: "p",
        text: "The mistake we almost made: designing three separate apps that happened to share a backend. The right framing turned out to be: design the core transaction first (a job moving from posted to delivered), then ask what each role needs to do and see at each stage of that transaction. This reframing kept the three interfaces coherent because they were all built around the same workflow spine.",
      },
      {
        type: "p",
        text: "Every feature decision became easier when we asked: which stage of the job lifecycle does this touch, and which roles are active at that stage? Features that looked complex in isolation became obvious once we mapped them to the transaction flow.",
      },
      {
        type: "h2",
        text: "Same Data, Different Information Architectures",
      },
      {
        type: "p",
        text: "Cargo owners think about shipments — weight, dimensions, pickup location, delivery deadline, price. Fleet owners think about jobs — distance, truck availability, margin. Drivers think about stops — address, time window, proof of delivery. These are three different mental models applied to the same underlying data.",
      },
      {
        type: "p",
        text: "We built three genuinely separate information architectures on top of a shared data model. The cargo owner sees a shipment dashboard. The fleet owner sees a job board with bidding tools. The driver sees a route with milestone checkpoints. None of these are simplifications of each other — they're different views designed for different cognitive modes. Trying to unify them into a single \"universal\" view would have served nobody.",
      },
      {
        type: "h2",
        text: "The Bidding UI: Information Asymmetry Is the Product",
      },
      {
        type: "p",
        text: "The bidding interface was the most technically interesting design problem. Fleet owners need enough information to bid accurately without exposing cargo owners to unsolicited contact or revealing their logistics details beyond what's necessary. We had to design a structured information disclosure model: what a fleet owner sees before bidding, what they see after their bid is accepted, and what they never see.",
      },
      {
        type: "p",
        text: "We also discovered that fleet owners were making bad bids because the job posting didn't surface the information they actually needed — specifically, whether the pickup and delivery points were easy to access with a full-sized truck. We added a structured location notes field that cargo owners could fill out. This small addition reduced bid revisions by a significant margin and improved cargo owner ratings of fleet owner reliability.",
      },
      {
        type: "h2",
        text: "Driver Experience: Constraints Are Features",
      },
      {
        type: "p",
        text: "The driver-facing app had to work under conditions the other two interfaces didn't: mobile only, often running on mid-range Android devices, sometimes in areas with intermittent cellular coverage. These weren't obstacles to work around — they were design constraints that forced good decisions.",
      },
      {
        type: "p",
        text: "Offline-first architecture for the driver app meant that milestone updates and POD uploads queue locally and sync when connectivity returns. This forced us to think carefully about what data the driver actually needed in advance of each delivery versus what could be fetched on demand. The result was a leaner, faster app than we would have built otherwise. The constraint of designing for low connectivity eliminated a lot of features that looked useful on a whiteboard but weren't worth the connection dependency.",
      },
      {
        type: "h2",
        text: "Conflicting Incentives Are a Product Problem, Not a Policy Problem",
      },
      {
        type: "p",
        text: "Cargo owners want the lowest price. Fleet owners want the highest margin. Drivers want efficient routes with minimal waiting at pickup points. These incentives conflict. Our instinct early on was to treat this as something the business rules would sort out. It isn't — it's a product design problem.",
      },
      {
        type: "p",
        text: "The rating system became our primary mechanism for aligning incentives. Cargo owners rate fleet owners on reliability and driver professionalism. Fleet owners rate cargo owners on accuracy of job descriptions and pickup readiness. Drivers rate stops on wait time and access. When everyone is rated by the people they affect, the incentive to game any one metric is reduced. We designed the rating prompts to surface specific behaviors rather than ask for a general score — this made ratings more actionable and less susceptible to emotional variance.",
      },
      {
        type: "h2",
        text: "When to Build One App vs Three",
      },
      {
        type: "p",
        text: "Darren ended up as three separate frontend applications sharing an API. This was the right call for a platform with genuinely distinct role experiences, but it's not always the right call. We've built platforms where the roles are similar enough that a single app with role-based view switching is sufficient. The decision point: if the core workflows for two roles share less than 50% of their UI surfaces, build separate apps. If they share more than 50%, shared app with role switching. Separate apps have a real maintenance cost — three codebases, three deployment pipelines, three sets of user feedback to process.",
      },
      {
        type: "h2",
        text: "The Practical Takeaway",
      },
      {
        type: "p",
        text: "If you're building a multi-role platform, resist the temptation to start with role-specific design. Start by mapping the core transaction from end to end. Identify every stage, every decision point, every state change. Then ask: who is active at this stage, what do they need to know, and what do they need to do? That transaction map becomes your design spec. Every feature you add will be grounded in the workflow, and every role's interface will be coherent because it's built on the same foundation.",
      },
    ],
  },
  {
    slug: "building-ai-voice-ordering-with-twilio-and-deepgram",
    title: "Building AI Voice Ordering with Twilio and DeepGram",
    excerpt:
      "We've integrated AI voice ordering into two restaurant platforms. Here's what the architecture looks like, where it breaks, and what actually works in production.",
    category: "Engineering",
    date: "April 1, 2026",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: "p",
        text: "When a restaurant client asked us to add phone ordering to their multi-restaurant platform, our first instinct was to build a simple IVR menu. Press 1 for pizza, press 2 for pasta. That conversation lasted about ten minutes before we all agreed it was a terrible experience and started looking at AI voice ordering properly.",
      },
      {
        type: "h2",
        text: "The Architecture at a Glance",
      },
      {
        type: "p",
        text: "The core pipeline is: Twilio handles the inbound call and streams audio in real time via its Media Streams API. DeepGram receives the audio stream and returns a transcript with word-level confidence scores. Our NLP layer — spaCy in one project, a fine-tuned intent classifier in the other — extracts the order intent, items, quantities, and modifiers. A state machine manages the conversation, confirms the order, and pushes it into the order management system.",
      },
      {
        type: "p",
        text: "On paper, this is clean. In practice, there are at least a dozen places this pipeline can go wrong, and most of them only show up under real-world conditions.",
      },
      {
        type: "h2",
        text: "Where DeepGram Surprised Us",
      },
      {
        type: "p",
        text: "DeepGram's transcription accuracy is genuinely impressive for clean audio. The problem is restaurant phone calls are not clean audio. Kitchen noise in the background, callers on speakerphone while driving, accented English from non-native speakers. We saw accuracy drop from ~95% in test conditions to the low 80s on real calls in noisy environments.",
      },
      {
        type: "p",
        text: "Two things helped significantly: switching to DeepGram's Nova-2 model and enabling the punctuation and smart formatting options. More importantly, we added a confidence threshold — if DeepGram returned a word confidence below 0.7, we treated that segment as unclear and had the system ask for a repeat rather than guessing. It slows down the conversation slightly but eliminates the failure mode where the system confidently processes a wrong order.",
      },
      {
        type: "h2",
        text: "Intent Extraction: spaCy vs a Classifier",
      },
      {
        type: "p",
        text: "On ConnectWithChain, we used spaCy with custom entity patterns to extract menu items, quantities, and modifiers. This works well when the menu vocabulary is constrained and consistent. Training custom NER models for each restaurant's menu is tedious but the inference is fast and predictable. The system doesn't hallucinate items that aren't on the menu.",
      },
      {
        type: "p",
        text: "On Meals on Wheels 4U, the menu variability was higher and we moved to a small fine-tuned intent classifier. The trade-off is worth understanding: classifier-based approaches handle natural language variation better but they're harder to debug when they fail, and they fail in less predictable ways. For any production voice ordering system, you need a logging layer that captures every transcript and its parsed output so you can audit failures and retrain.",
      },
      {
        type: "h2",
        text: "The Hardest Part: Conversational State",
      },
      {
        type: "p",
        text: "Transcription and intent extraction are solved problems. Managing the state of a multi-turn conversation is where the real complexity lives. A caller might say \"actually, make that two burgers\" after already confirming one. They might ask about allergens mid-order. They might go quiet for thirty seconds because someone walked in.",
      },
      {
        type: "p",
        text: "We model conversation state as an explicit state machine: idle, collecting order, confirming, payment, done. Every user utterance is processed relative to the current state. The machine handles interruptions, corrections, and the common case where the caller says something entirely off-script. Timeouts are handled gracefully — if there's no audio for 8 seconds, the system prompts rather than hanging. If the call drops, the partial order is preserved so staff can follow up.",
      },
      {
        type: "h2",
        text: "What We'd Do Differently",
      },
      {
        type: "p",
        text: "Build the human handoff before you build the AI. Every voice ordering system needs a smooth path to a human agent. Don't treat it as an edge case — callers will use it. We initially built handoff as an afterthought and had to retrofit it. Now we design it first.",
      },
      {
        type: "p",
        text: "Also: don't try to handle payments over voice unless you have strong compliance requirements to do so. Asking callers to read a card number is slow, error-prone, and feels like 2005. Both our implementations route to an SMS payment link instead. Conversion is better and the implementation is simpler.",
      },
      {
        type: "h2",
        text: "When This Architecture Makes Sense",
      },
      {
        type: "p",
        text: "AI voice ordering is not right for every restaurant. It makes sense when call volume is high enough to justify the build cost, when the menu is structured enough for intent extraction to be reliable, and when the operator has the bandwidth to monitor and improve the system over time. It doesn't replace human staff — it handles the routine repeat orders so staff can focus on the calls that actually need attention.",
      },
    ],
  },
  {
    slug: "how-we-cut-insurance-onboarding-from-3-hours-to-45-minutes",
    title: "How We Cut Insurance Onboarding from 3 Hours to 45 Minutes",
    excerpt:
      "A deep dive into the workflow automation system we built for a US insurance agency — what we built, why we built it that way, and the results.",
    category: "Case Study",
    date: "March 18, 2026",
    readTime: "7 min read",
    featured: false,
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
