import React from 'react';
import { Smartphone, Wifi, Globe, Users, ArrowDownUp, ShieldHalf, CheckCircle2 } from 'lucide-react';

const SavoirFaire = () => {
  const expertise = [
    {
      icon: <Smartphone size={24} />,
      label: "Mobile",
      description: "Solutions de mobilité performantes et flexibles."
    },
    {
      icon: <Wifi size={24} />,
      label: "WiFi",
      description: "Infrastructures WiFi professionnelles sécurisées."
    },
    {
      icon: <Globe size={24} />,
      label: "VPN",
      description: "Interconnexion sécurisée de vos sites."
    },
    {
      icon: <Users size={24} />,
      label: "Communication unifiée",
      description: "Convergence de vos outils de communication."
    },
    {
      icon: <ArrowDownUp size={24} />,
      label: "Fibre",
      description: "Très Haut Débit dédié sans compromis."
    },
    {
      icon: <ShieldHalf size={24} />,
      label: "Sécurité",
      description: "Protection avancée de vos données."
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              Expertise 360°
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Un Savoir-Faire <br />
              <span className="text-[#2563EB]">Unique & Maîtrisé</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-sans mb-8">
              Avec l'évolution des usages et l'arrivée du tout IP, le lien internet et les connexions occupent une place centrale. Nous vous accompagnons avec une expertise technique pointue.
            </p>
            <div className="space-y-4">
              {["Accompagnement personnalisé", "Solutions sur-mesure", "Support technique local"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2563EB] mb-6 shadow-sm group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                  {item.label}
                </h3>
                <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
                  {item.description}
                </p>
                <div className="absolute top-8 right-8 text-slate-200 group-hover:text-blue-100 transition-colors">
                  <span className="text-4xl font-display font-bold">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavoirFaire;