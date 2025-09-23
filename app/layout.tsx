import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import PerformanceOptimizations from "@/components/PerformanceOptimizations";
import config from "@/config";
import "./globals.css";

const font = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Enhanced SEO metadata for B2C SaaS landing page
export const metadata = {
  ...getSEOTags(),
  title: 'FeNAgO - Build Your Dream SaaS in Days, Not Months | AI-Powered Platform',
  description: 'Transform your brilliant SaaS idea into reality with FeNAgO. Complete platform for building agentic AI-powered products. Join 2,000+ successful creators. Start free today!',
  keywords: 'SaaS builder, AI platform, no-code SaaS, startup tools, SaaS template, entrepreneur platform, rapid development, B2C SaaS, FeNAgO',
  authors: [{ name: 'FeNAgO Team' }],
  creator: 'FeNAgO',
  publisher: 'FeNAgO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fenago.com',
    siteName: 'FeNAgO',
    title: 'FeNAgO - Build Your Dream SaaS in Days, Not Months',
    description: 'Transform your brilliant SaaS idea into reality with FeNAgO. Complete platform for building agentic AI-powered products. Join 2,000+ successful creators.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FeNAgO - Build Your Dream SaaS Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FeNAgO - Build Your Dream SaaS in Days, Not Months',
    description: 'Transform your brilliant SaaS idea into reality with FeNAgO. Join 2,000+ successful creators building their dreams.',
    images: ['/twitter-image.png'],
    creator: '@fenago',
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'FeNAgO',
    'application-name': 'FeNAgO',
    'msapplication-TileColor': '#f97316',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <body>
        {/* Performance optimizations */}
        <PerformanceOptimizations />
        
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
