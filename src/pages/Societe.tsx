import React from 'react';
import { Layout } from "@/components/layout/Layout";
import HeroSociete from "@/components/sections/hero-societe";
import SavoirFaire from "@/components/sections/savoir-faire";
import OperateurLyon from "@/components/sections/operateur-lyon";
import NosForcesSection from "@/components/sections/nos-forces";
import KeyMetrics from "@/components/sections/key-metrics";

const Societe = () => {
  return (
    <Layout>
      <HeroSociete />
      <KeyMetrics />
      <SavoirFaire />
      <div className="bg-slate-50 h-px w-full" />
      <OperateurLyon />
      <NosForcesSection />
    </Layout>
  );
};

export default Societe;