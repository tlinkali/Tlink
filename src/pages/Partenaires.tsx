import React from 'react';
import { Layout } from "@/components/layout/Layout";
import PartnersHero from "@/components/sections/PartnersHero";
import PartnersGrid from "@/components/sections/PartnersGrid";

const Partenaires = () => {
  return (
    <Layout>
      <PartnersHero />
      <PartnersGrid />
    </Layout>
  );
};

export default Partenaires;