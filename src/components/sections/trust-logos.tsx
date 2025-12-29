import React from 'react';
import notairesLogo from '@/assets/partners/notaires.png';
import avocatsLogo from '@/assets/partners/avocats.png';
import fleursLogo from '@/assets/partners/fleurs.png';
import mfrLogo from '@/assets/partners/mfr.png';
import evidenceLogo from '@/assets/partners/evidence.png';
import renaultLogo from '@/assets/partners/renault.png';
import ramsayLogo from '@/assets/partners/ramsay.png';

const partners = [
  {
    name: 'Notaires de France',
    logo: notairesLogo,
  },
  {
    name: 'Ordre des Avocats',
    logo: avocatsLogo,
  },
  {
    name: "L'Isle aux Fleurs",
    logo: fleursLogo,
  },
  {
    name: 'MFR',
    logo: mfrLogo,
  },
  {
    name: 'Groupe Evidence',
    logo: evidenceLogo,
  },
  {
    name: 'Renault',
    logo: renaultLogo,
  },
  {
    name: 'Ramsay Santé',
    logo: ramsayLogo,
  },
];

const TrustLogos = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-[2.5rem] font-bold font-heading leading-tight text-[#0F172A] mb-4">
            Ils Nous Font <span className="text-[#2563EB]">Confiance</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto font-sans">
            Des entreprises de toutes tailles nous font confiance pour leurs télécommunications
          </p>
        </div>

        <div className="relative mt-8">
          <div className="flex animate-scroll whitespace-nowrap gap-12 w-max">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={partner.name + index}
                className="inline-flex items-center justify-center bg-white border border-[#E2E8F0] rounded-xl px-10 py-6 h-28 w-52 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 shrink-0"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      width={200}
                      height={100}
                      className="transition-all duration-500 object-contain w-full h-full"
                    />
                </div>
              </div>
            ))}
          </div>

          {/* Masking gradients for smooth entry/exit */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
    </section>
  );
};

export default TrustLogos;
