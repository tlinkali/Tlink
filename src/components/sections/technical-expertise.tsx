import React from 'react';
import { Shield, Zap, Network, Globe, Cpu, Headphones } from 'lucide-react';

const TechnicalExpertise = () => {
  const bentoItems = [
    {
      title: "ADN Technique",
      description: "Depuis notre création, la qualité de l'expérience de connexion est au cœur de notre développement. Nos équipes innovent sans cesse pour anticiper vos besoins.",
      icon: <Cpu className="h-6 w-6 text-[#2dd4bf]" />,
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-white/10 shadow-2xl",
    },
    {
      title: "Performance Réseau",
      description: "Une infrastructure robuste et redondante assurant une disponibilité de 99.9%.",
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      className: "md:col-span-1 md:row-span-1 bg-white/[0.03] backdrop-blur-md border-white/10"
    },
    {
      title: "Sécurité Maximale",
      description: "Protection avancée de vos données et flux de communication.",
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      className: "md:col-span-1 md:row-span-1 bg-white/[0.03] backdrop-blur-md border-white/10"
    },
    {
      title: "Support Dédié",
      description: "Des experts basés en France disponibles pour vous accompagner 24/7.",
      icon: <Headphones className="h-6 w-6 text-purple-400" />,
      className: "md:col-span-1 md:row-span-1 bg-white/[0.03] backdrop-blur-md border-white/10"
    },
    {
      title: "Couverture Nationale",
      description: "Déploiement fibre et 4G/5G sur l'ensemble du territoire français.",
      icon: <Globe className="h-6 w-6 text-sky-400" />,
      className: "md:col-span-1 md:row-span-1 bg-white/[0.03] backdrop-blur-md border-white/10"
    }
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Une Expertise Technique <span className="text-[#2dd4bf]">Inégalée</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {bentoItems.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden p-8 rounded-[2rem] border transition-all duration-300 group ${item.className}`}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit border border-white/10 group-hover:border-[#2dd4bf]/50 group-hover:bg-[#2dd4bf]/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-[#2dd4bf] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mt-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
