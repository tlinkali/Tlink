import React from 'react';
import { Network, ShieldCheck, Zap, Globe, Cpu, BarChart3, Lock } from 'lucide-react';

const AgregateurReseaux = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-xs font-bold uppercase tracking-widest mb-6">
              <Cpu className="w-3 h-3" />
              Infrastructures Haute Performance
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-deep-navy mb-8 leading-[1.1]">
              Agrégateur de réseaux : <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-cyan">
                L'intelligence au service <br /> de vos sites
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Interconnecté à l’ensemble des réseaux d’infrastructure du territoire (opérateurs historiques, alternatifs, RIP, DSP), nous identifions pour vous l’infrastructure réseau la plus adaptée sur chacun de vos sites.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: BarChart3, text: "Analyse en temps réel des infrastructures disponibles" },
                { icon: Lock, text: "Sécurisation native des flux inter-sites" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-deep-navy font-semibold">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center border border-slate-100">
                    <item.icon className="w-5 h-5 text-primary-blue" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-blue/20 to-accent-cyan/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
              
              <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3]">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-8-10.jpg"
                    alt="Agrégateur de réseaux"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                      <p className="text-white font-bold text-sm uppercase tracking-wider mb-1">Status Réseau</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></div>
                        <span className="text-white/80 text-xs">Optimisé & Sécurisé</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Network className="w-6 h-6 text-primary-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: "Sécurité Maximale", 
              desc: "Niveaux de protection élevés et isolation complète pour vos données critiques.",
              color: "bg-blue-50 text-blue-600"
            },
            { 
              icon: Zap, 
              title: "Performance Optimisée", 
              desc: "Identification intelligente du meilleur chemin réseau pour une latence minimale.",
              color: "bg-cyan-50 text-cyan-600"
            },
            { 
              icon: Globe, 
              title: "Disponibilité Totale", 
              desc: "Architecture multi-opérateurs garantissant une résilience sans compromis.",
              color: "bg-indigo-50 text-indigo-600"
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              <div className="mt-6 w-full h-1 bg-slate-50 rounded-full overflow-hidden">
                <div className={`h-full ${item.color.replace('bg-', 'bg-').split(' ')[0]} w-0 group-hover:w-full transition-all duration-700 ease-out`} style={{ backgroundColor: 'currentColor' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgregateurReseaux;