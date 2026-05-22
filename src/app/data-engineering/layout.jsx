export const metadata = {
  title: "Data Engineering Services — Pipelines, Warehouses & Analytics",
  description:
    "Real-time data pipelines, cloud data warehouses, ETL/ELT systems, and BI dashboards. Expert data engineers from India serving global teams.",
  keywords: [
    "data engineering services India",
    "data pipeline development",
    "ETL ELT services",
    "cloud data warehouse",
    "Apache Kafka Spark engineers",
    "dbt Snowflake BigQuery",
    "BI dashboard development",
    "offshore data engineers",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Data Engineering Services — Pipelines, Warehouses & Analytics | Infonza",
    description:
      "Real-time data pipelines, cloud data warehouses, ETL/ELT systems, and BI dashboards. Expert data engineers from India serving global teams.",
    url: "https://infonza.com/data-engineering",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Data Engineering Services — Pipelines, Warehouses & Analytics | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/data-engineering",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineering Services — Pipelines, Warehouses & Analytics | Infonza",
    description: "Real-time data pipelines, cloud data warehouses, ETL/ELT systems, and BI dashboards. Expert data engineers from India serving global teams.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function DataEngineeringLayout({ children }) {
  return children;
}
