import React from 'react';

const EngagementsHero = () => {
  const backgroundImage = "/engagements/hero.jpg";

  return (
    <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 overflow-hidden bg-deep-navy -mt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
            <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
            <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">Notre Philosophie</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
            Engagements & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
              Valeurs Fortes
            </span>
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-sans">
            Une entreprise engagée pour défendre ses valeurs au quotidien, 
            plaçant l'humain et l'innovation au cœur de chaque connexion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngagementsHero;