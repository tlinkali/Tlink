import React from 'react';
import { Layout } from '@/components/layout/Layout';
import EquipementsHero from '@/components/sections/equipements-hero';
import EquipementsGrid from '@/components/sections/equipements-grid';

const Equipements = () => {
  return (
    <Layout>
      <EquipementsHero />
      <EquipementsGrid />
    </Layout>
  );
};

export default Equipements;
