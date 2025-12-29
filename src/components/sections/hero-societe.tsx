import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSociete = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-deep-navy -mt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent-cyan" />
            <span className="text-white/90 text-[14px] font-semibold tracking-wider uppercase">La Société T-Link</span>
          </div>

          <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-display font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
            Une Autre Idée du
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-blue">
              Télécom de Proximité
            </span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-[1.125rem] lg:text-[1.25rem] text-white/80 leading-relaxed font-sans">
              T-LINK met un point d'honneur à conserver son identité d'opérateur télécom de proximité dédié au monde professionnel, plaçant le client au cœur de chaque relation.
            </p>
            <p className="text-[1.125rem] lg:text-[1.25rem] text-white/70 leading-relaxed font-sans">
              Flexible, novatrice et à l'écoute, nous accompagnons les entreprises dans la transformation digitale de leur téléphonie avec de nouveaux concepts et services premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSociete;