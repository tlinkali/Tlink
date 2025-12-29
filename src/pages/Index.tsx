import React, { Suspense, lazy } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import Hero from "@/components/sections/hero";
import AboutDedicated from "@/components/sections/about-dedicated";
import SolutionsOverview from "@/components/sections/solutions-overview";

// Lazy load sections further down the fold
const TechnicalExpertise = lazy(() => import("@/components/sections/technical-expertise"));
const CustomizableOffers = lazy(() => import("@/components/sections/customizable-offers"));
const ServicesCarousel = lazy(() => import("@/components/sections/services-carousel"));
const ManagementIdentity = lazy(() => import("@/components/sections/management-identity"));
const InternetEvolution = lazy(() => import("@/components/sections/internet-evolution"));
const TrustLogos = lazy(() => import("@/components/sections/trust-logos"));
const BlueCtaInfrastructure = lazy(() => import("@/components/sections/blue-cta-infrastructure"));

const SectionFallback = () => <div className="min-h-[200px] bg-[#0f172a]/5 animate-pulse" />;

const Index = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "T-Link Network Operateur",
    "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/logo-tlink-D5qTB_pD-1.png",
    "@id": "https://t-link.fr",
    "url": "https://t-link.fr",
    "telephone": "04 26 78 75 35",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6 Bd des Monts d'Or",
      "addressLocality": "Sathonay-Camp",
      "postalCode": "69580",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.8167,
      "longitude": 4.8667
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:30"
    }
  };

  return (
    <Layout>
      <SEO 
        title="Opérateur Télécom B2B | Solutions Fibre, VoIP & Réseaux" 
        description="T-Link est votre opérateur télécom spécialisé en solutions de téléphonie sur IP, accès internet Fibre et xDSL, et infrastructures réseaux pour entreprises."
        structuredData={localBusinessData}
      />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <AboutDedicated />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SolutionsOverview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TechnicalExpertise />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CustomizableOffers />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesCarousel />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ManagementIdentity />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <InternetEvolution />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TrustLogos />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BlueCtaInfrastructure />
      </Suspense>
    </Layout>
  );
};

export default Index;
