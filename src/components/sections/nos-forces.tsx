import React from 'react';
import { Rocket, Settings, Handshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NosForcesSection = () => {
  const forces = [
    {
      title: "Une agilité inouïe",
      description: "Nous faisons preuve de flexibilité et de réactivité dans l'accompagnement et la conduite des projets. Nous tissons une relation de proximité personnalisée.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-blue-600 to-cyan-500",
      stats: "Réponse < 2h"
    },
    {
      title: "Une expertise unique",
      description: "Nous nous démarquons par notre savoir-faire technique et offrons un service robuste. Nous nous adaptons proactivement aux innovations du secteur.",
      icon: <Settings className="w-6 h-6" />,
      gradient: "from-indigo-600 to-blue-600",
      stats: "15 ans d'exp"
    },
    {
      title: "Un engagement permanent",
      description: "Nous oeuvrons collectivement à la satisfaction de nos clients. Nous sommes tous impliqués et engagés pour la réussite de l'ensemble de nos projets.",
      icon: <Handshake className="w-6 h-6" />,
      gradient: "from-teal-500 to-emerald-500",
      stats: "98% Satisfaction"
    },
    {
      title: "Une solidité durable",
      description: "Nous bénéficions d'une stabilité financière et structurelle qui nous permet d'établir des partenariats solides et durables fondés sur la confiance.",
      icon: <ShieldCheck className="w-6 h-6" />,
      gradient: "from-blue-700 to-indigo-700",
      stats: "Stabilité AAA"
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-extrabold text-white mb-6 tracking-tight leading-tight">
              Pourquoi choisir <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                T-Link Network ?
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              Plus qu'un simple opérateur, nous sommes le partenaire stratégique de votre performance numérique.
            </p>
          </div>
          <div className="hidden lg:block">
            <Link 
              to="/solutions"
              className="group flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-full transition-all duration-300 font-semibold border border-white/20 hover:border-white"
            >
              Découvrir nos solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {forces.map((force, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${force.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${force.gradient} flex items-center justify-center text-white mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                {force.icon}
              </div>
              
              <div className="flex-grow">
                <div className="text-xs font-bold text-accent-cyan uppercase tracking-widest mb-3 opacity-80">
                  {force.stats}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display leading-tight">
                  {force.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-sans text-base">
                  {force.description}
                </p>
              </div>

              {/* Hover highlight border */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${force.gradient} group-hover:w-full transition-all duration-700`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosForcesSection;