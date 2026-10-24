import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./portfolio.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnachittella.dev"),
  alternates: { canonical: "/" },
  title: "Lakshmi Varaha Krishna Chittella | Data Engineer",
  description:
    "Lakshmi Varaha Krishna Chittella is a data engineer with an M.S. in Computer Science. Python and SQL pipelines, Snowflake, Spark, dbt and BigQuery. Builder of the live Cover Next data product.",
  authors: [{ name: "Lakshmi Varaha Krishna Chittella" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Lakshmi Varaha Krishna Chittella | Data Engineer",
    description: "Python and SQL data pipelines, Snowflake and Spark. Builder of Cover Next. M.S. in Computer Science, University of South Dakota.",
    type: "website",
    url: "/",
    siteName: "Lakshmi Varaha Krishna Chittella",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
