import React from 'react';
import { Layout } from "@/components/layout/Layout";
import HeroSociete from "@/components/sections/hero-societe";
import SavoirFaire from "@/components/sections/savoir-faire";
import OperateurLyon from "@/components/sections/operateur-lyon";
import NosForcesSection from "@/components/sections/nos-forces";
import KeyMetrics from "@/components/sections/key-metrics";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>À Propos | T-Link Opérateur</title>
        <meta name="description" content="Découvrez T-Link Opérateur, votre partenaire de confiance pour vos solutions de télécommunications et réseaux." />
      </Helmet>
      <HeroSociete />
      <KeyMetrics />
      <SavoirFaire />
      <div className="bg-slate-50 h-px w-full" />
      <OperateurLyon />
      <NosForcesSection />
    </Layout>
  );
};

export default About;
