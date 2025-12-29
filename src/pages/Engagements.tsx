import React from 'react';
import { Layout } from '@/components/layout/Layout';
import EngagementsHero from '@/components/sections/engagements-hero';
import EngagementsList from '@/components/sections/engagements-list';
import ValeursList from '@/components/sections/valeurs-list';

const Engagements = () => {
  return (
    <Layout>
      <EngagementsHero />
      <EngagementsList />
      <ValeursList />
    </Layout>
  );
};

export default Engagements;
