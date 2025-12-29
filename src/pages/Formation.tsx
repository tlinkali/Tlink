import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import HeroSlider from '@/components/sections/hero-slider';
import StatisticsCounter from '@/components/sections/statistics-counter';
import TechnicianCourseDetails from '@/components/sections/technician-course-details';
import FormationTLinkInfo from '@/components/sections/formation-tlink-info';
import WhyChooseUs from '@/components/sections/why-choose-us';
import QualiopiSection from '@/components/sections/qualiopi-section';

export const Formation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="min-h-screen bg-white">
        <Header />
          <main>
            <HeroSlider />
            <TechnicianCourseDetails />
            <FormationTLinkInfo />
            <WhyChooseUs />
            <QualiopiSection />
          </main>
        <Footer />
      </div>
    );
};

export default Formation;
