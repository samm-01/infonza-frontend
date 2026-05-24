import { posts } from "./blog/posts";

const baseUrl = "https://infonza.com";

export default function sitemap() {
  const now = new Date();

  // ─── Core / brand pages ─────────────────────────────────────────────────
  const coreRoutes = [
    { url: baseUrl,                  changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/about`,       changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`,     changeFrequency: "yearly",  priority: 0.8 },
    { url: `${baseUrl}/portfolio`,   changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/careers`,     changeFrequency: "monthly", priority: 0.6 },
  ];

  // ─── Services overview ───────────────────────────────────────────────────
  const servicesOverview = [
    { url: `${baseUrl}/services`,             changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/data-engineering`,     changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/cloud-solutions`,      changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/software-development`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/designing`,            changeFrequency: "monthly", priority: 0.75 },
  ];

  // ─── NEW: AI Development cluster ────────────────────────────────────────
  const aiDevelopment = [
    { url: `${baseUrl}/ai-development`,                                         changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/ai-development/ai-chatbot-development`,                  changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/ai-development/ai-workflow-automation`,                  changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/ai-development/generative-ai-development`,               changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/ai-development/openai-integration-services`,             changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/ai-development/rag-development-services`,                changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/ai-development/llm-development-company`,                 changeFrequency: "monthly", priority: 0.85 },
  ];

  // ─── NEW: Insurance Software cluster ────────────────────────────────────
  const insuranceSoftware = [
    { url: `${baseUrl}/insurance-software-development`,                                              changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/insurance-software-development/insurance-crm-development`,                   changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/insurance-software-development/policy-management-software`,                  changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/insurance-software-development/quote-comparison-platform`,                   changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/insurance-software-development/insurance-agent-portal`,                      changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/insurance-software-development/insurance-mobile-app-development`,            changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/insurance-software-development/insurance-automation-solutions`,              changeFrequency: "monthly", priority: 0.85 },
  ];

  // ─── NEW: ERP Development cluster ───────────────────────────────────────
  const erpDevelopment = [
    { url: `${baseUrl}/erp-development`,                                        changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/erp-development/manufacturing-erp-development`,          changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/erp-development/logistics-erp-software`,                 changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/erp-development/cosmetic-industry-erp`,                  changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/erp-development/inventory-management-system`,            changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/erp-development/warehouse-management-system`,            changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/erp-development/custom-erp-solutions`,                   changeFrequency: "monthly", priority: 0.85 },
  ];

  // ─── NEW: Staff Augmentation cluster ────────────────────────────────────
  const staffAugmentation = [
    { url: `${baseUrl}/staff-augmentation`,                                     changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/staff-augmentation/hire-react-developers`,               changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/staff-augmentation/hire-nodejs-developers`,              changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/staff-augmentation/hire-mern-stack-developers`,          changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/staff-augmentation/hire-ai-engineers`,                   changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/staff-augmentation/hire-devops-engineers`,               changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/staff-augmentation/dedicated-development-team`,          changeFrequency: "monthly", priority: 0.85 },
  ];

  // ─── NEW: SaaS Development cluster ──────────────────────────────────────
  const saasDevelopment = [
    { url: `${baseUrl}/saas-development`,                                        changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/saas-development/multi-tenant-saas-development`,          changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/saas-development/crm-saas-development`,                   changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/saas-development/b2b-saas-development`,                   changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/saas-development/subscription-platform-development`,      changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/saas-development/cloud-saas-solutions`,                   changeFrequency: "monthly", priority: 0.85 },
  ];

  // ─── NEW: Document Management cluster ───────────────────────────────────
  const documentManagement = [
    { url: `${baseUrl}/document-management-system`,                                          changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/document-management-system/enterprise-document-management`,          changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/document-management-system/document-workflow-automation`,            changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/document-management-system/legal-document-management`,               changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/document-management-system/cloud-document-storage`,                  changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/document-management-system/document-approval-system`,                changeFrequency: "monthly", priority: 0.85 },
  ];

  // ─── Case Studies ────────────────────────────────────────────────────────
  const caseStudies = [
    { url: `${baseUrl}/case-studies`,              changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/case-studies/glovebox`,     changeFrequency: "yearly",  priority: 0.8 },
    { url: `${baseUrl}/case-studies/readybuild`,   changeFrequency: "yearly",  priority: 0.8 },
    { url: `${baseUrl}/case-studies/dnh`,          changeFrequency: "yearly",  priority: 0.8 },
    { url: `${baseUrl}/case-studies/builderwing`,  changeFrequency: "yearly",  priority: 0.8 },
  ];

  // ─── Programmatic SEO — Location + Intent Pages ─────────────────────────
  const programmaticPages = [
    { url: `${baseUrl}/ai-development-company-usa`,              changeFrequency: "monthly", priority: 0.92 },
    { url: `${baseUrl}/staff-augmentation-company-india`,        changeFrequency: "monthly", priority: 0.92 },
    { url: `${baseUrl}/hire-react-developers-india`,             changeFrequency: "monthly", priority: 0.90 },
  ];

  // ─── GEO SEO — US region pages ──────────────────────────────────────────
  const geoUSPages = [
    { url: `${baseUrl}/software-development-company-usa`,          changeFrequency: "monthly", priority: 0.93 },
    { url: `${baseUrl}/software-development-company-new-york`,     changeFrequency: "monthly", priority: 0.91 },
    { url: `${baseUrl}/software-development-company-california`,   changeFrequency: "monthly", priority: 0.91 },
    { url: `${baseUrl}/software-development-company-texas`,        changeFrequency: "monthly", priority: 0.91 },
  ];

  // ─── GEO SEO — India city + service pages ───────────────────────────────
  const geoPages = [
    { url: `${baseUrl}/software-development-company-chandigarh`, changeFrequency: "monthly", priority: 0.91 },
    { url: `${baseUrl}/it-company-mohali`,                        changeFrequency: "monthly", priority: 0.91 },
    { url: `${baseUrl}/ai-development-company-india`,             changeFrequency: "monthly", priority: 0.93 },
    { url: `${baseUrl}/offshore-development-company-india`,       changeFrequency: "monthly", priority: 0.92 },
    { url: `${baseUrl}/erp-development-company-india`,            changeFrequency: "monthly", priority: 0.91 },
    { url: `${baseUrl}/saas-development-company-india`,           changeFrequency: "monthly", priority: 0.91 },
    { url: `${baseUrl}/software-development-company-india`,       changeFrequency: "monthly", priority: 0.93 },
    { url: `${baseUrl}/it-company-bangalore`,                     changeFrequency: "monthly", priority: 0.90 },
    { url: `${baseUrl}/it-company-chennai`,                       changeFrequency: "monthly", priority: 0.90 },
    { url: `${baseUrl}/software-development-company-punjab`,      changeFrequency: "monthly", priority: 0.90 },
  ];

  // ─── Blog ────────────────────────────────────────────────────────────────
  const blogIndex = [
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  // ─── Legal ───────────────────────────────────────────────────────────────
  const legalRoutes = [
    { url: `${baseUrl}/privacy-policy`,   changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ─── Merge all ───────────────────────────────────────────────────────────
  const allStaticRoutes = [
    ...coreRoutes,
    ...servicesOverview,
    ...aiDevelopment,
    ...insuranceSoftware,
    ...erpDevelopment,
    ...staffAugmentation,
    ...saasDevelopment,
    ...documentManagement,
    ...programmaticPages,
    ...geoUSPages,
    ...geoPages,
    ...caseStudies,
    ...blogIndex,
    ...legalRoutes,
  ];

  return [
    ...allStaticRoutes.map((route) => ({ ...route, lastModified: now })),
    ...blogRoutes,
  ];
}
