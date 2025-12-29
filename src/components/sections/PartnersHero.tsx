import React from 'react';
import { ShieldCheck, Zap, Users } from 'lucide-react';

const PartnersHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 lg:py-32 -mt-20">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#2563eb]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-[#2dd4bf]/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 lg:pt-40 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#2dd4bf] text-xs font-bold uppercase tracking-wider mb-8">
            <Users className="w-3 h-3" />
            Écosystème de confiance
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Un Partenariat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#2dd4bf]">Fort & Solide</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light">
            La qualité et l'innovation au cœur de nos collaborations. Nous nous entourons des meilleurs acteurs spécialisés du marché pour vous offrir une excellence de service inégalée.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { 
                icon: <ShieldCheck className="w-5 h-5 text-[#2563eb]" />, 
                title: "Exigence", 
                desc: "Une sélection rigoureuse basée sur la fiabilité." 
              },
              { 
                icon: <Zap className="w-5 h-5 text-[#2dd4bf]" />, 
                title: "Innovation", 
                desc: "Des solutions à la pointe de la technologie." 
              },
              { 
                icon: <Users className="w-5 h-5 text-white" />, 
                title: "Support", 
                desc: "Un accompagnement expert et continu." 
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-[#2dd4bf] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;