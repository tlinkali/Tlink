import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/home/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden -mt-20">
      {/* LCP Optimization: Use img tag with priority instead of background-image */}
      <img 
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
        aria-hidden="true"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/85 to-[#2563EB]/40" />
      
      <div className="container mx-auto px-4 relative z-10 pt-32 lg:pt-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
            <span className="text-white/90 text-[14px] font-semibold tracking-wide">Opérateur Télécom B2B</span>
          </div>

          <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-display font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
            VoIP, Fibre, Cloud &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
              Communication Unifiée
            </span>
          </h1>

          <p className="text-[1.125rem] lg:text-[1.25rem] text-white/70 mb-10 max-w-2xl leading-relaxed font-sans">
            Accompagnez votre entreprise dans sa transition digitale avec un partenaire télécom expert et dédié aux professionnels.
          </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link 
                to="/offres" 
                className="group inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2563EB]/90 transition-all shadow-[0_20px_25px_-5px_rgba(37,99,235,0.3)] hover:-translate-y-1"
              >
                  Nos Offres
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact?subject=Demande%20de%20devis" 
                className="inline-flex items-center px-8 py-4 rounded-xl font-semibold border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                Demander un devis
              </Link>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pt-10 border-t border-white/10">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-[44px] font-display font-bold text-white mb-1">15+</div>
              <div className="text-white/70 text-[14px] font-medium uppercase tracking-wider">Années d'expertise</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-[44px] font-display font-bold text-white mb-1">500+</div>
              <div className="text-white/70 text-[14px] font-medium uppercase tracking-wider">Entreprises connectées</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-[44px] font-display font-bold text-white mb-1">99.9%</div>
              <div className="text-white/70 text-[14px] font-medium uppercase tracking-wider">Disponibilité réseau</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
};

export default Hero;
