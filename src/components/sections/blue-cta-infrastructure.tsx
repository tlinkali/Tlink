import React from 'react';
import { Link } from 'react-router-dom';

const BlueCTAInfrastructure = () => {
  return (
    <section className="bg-[#2563eb] py-24 relative overflow-hidden">
      {/* Subtle background patterns if any - based on screenshot it looks like a solid blue with perhaps some very faint texture or just clean solid color */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Une infrastructure télécom de pointe
          </h2>
          
          <p className="font-sans text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            T-Link optimise vos communications avec des solutions sur mesure et un accompagnement dédié.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Phone Number Button */}
            <a 
              href="tel:0426787535" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563eb] font-bold rounded-[12px] transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 shadow-lg"
            >
              04 26 78 75 35
            </a>

            {/* Discover Solutions Button */}
            <Link 
              to="/contact?subject=Infrastructure%20Télécom" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#2dd4bf] text-[#0f172a] font-bold rounded-[12px] transition-all duration-300 hover:bg-[#2dd4bf]/90 hover:-translate-y-0.5 shadow-lg"
            >
              Découvrir nos solutions
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements to match the visual depth of the site if needed */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default BlueCTAInfrastructure;