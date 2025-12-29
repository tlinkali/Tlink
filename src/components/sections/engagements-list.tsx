import React from 'react';
import { Users, Lightbulb, MapPin, Target, CheckCircle2 } from 'lucide-react';

const engagementsData = [
  {
    title: "SENS DU CLIENT",
    subtitle: "Notre Priorité Absolue",
    description: "Mettre le service au client au cœur de l’entreprise, c’est avoir le souci de le servir et d’être à l’écoute de ses besoins. La satisfaction du client est l’objectif premier, chaque client doit être unique.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "INNOVATIONS",
    subtitle: "Défis Technologiques",
    description: "Nous associons étroitement nos fournisseurs et nos prestataires aux défis technologiques de l’avenir dans une optique de compétitivité et d’évolution. Etre précurseur ne peut être qu’un atout.",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    title: "PROXIMITÉ",
    subtitle: "Opérateur Made In Lyon",
    description: "Un opérateur lyonnais avec une influence locale et un réseau national qui centralise le service pour être toujours plus proche de vous.",
    icon: <MapPin className="h-8 w-8" />,
  },
  {
    title: "ENGAGEMENT",
    subtitle: "Performance & Excellence",
    description: "Viser l’excellence et la performance, s'engager à déployer un esprit collectif de conquête, à permettre à chacun de développer son potentiel dans l’entreprise.",
    icon: <Target className="h-8 w-8" />,
  }
];

const EngagementsList = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -mr-20 -mt-20 z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-50/50 rounded-full blur-3xl -ml-20 -mb-20 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">
            NOS ENGAGEMENTS
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#2DD4BF] to-[#2563EB] mx-auto rounded-full mb-8" />
          <p className="text-slate-600 text-lg leading-relaxed">
            Chez T-Link, nous transformons nos promesses en actions concrètes pour garantir 
            le succès de votre transformation numérique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {engagementsData.map((item) => (
            <div 
              key={item.title} 
              className="group bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center shadow-inner border border-blue-100 mb-8 group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white transition-all duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                <p className="text-[#2DD4BF] font-bold text-xs tracking-[0.2em] uppercase mb-6">{item.subtitle}</p>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[#2563EB] font-bold text-xs tracking-widest uppercase">
                  <CheckCircle2 className="h-5 w-5 text-[#2DD4BF]" />
                  Engagement Garanti
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proverb Quote */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="relative p-12 rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden text-center">
            <div className="absolute top-0 left-0 p-8 opacity-10">
              <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 45V19.2857C0 13.0714 1.28571 8.35714 3.85714 5.14286C6.42857 1.71429 10.7143 0 16.7143 0V9C13.5 9 11.5714 9.85714 10.9286 11.5714C10.2857 13.0714 9.96429 15.6429 9.96429 19.2857H19.2857V45H0ZM33.4286 45V19.2857C33.4286 13.0714 34.7143 8.35714 37.2857 5.14286C39.8571 1.71429 44.1429 0 50.1429 0V9C46.9286 9 45 9.85714 44.3571 11.5714C43.7143 13.0714 43.3929 15.6429 43.3929 19.2857H52.7143V45H33.4286Z" fill="#2563EB"/>
              </svg>
            </div>
            
            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl font-medium italic text-slate-800 leading-relaxed mb-6">
                &quot; Quand souffle le vent du changement, certains construisent des murs, d’autres des moulins &quot;
              </p>
              <footer className="text-[#2DD4BF] font-bold tracking-widest uppercase text-sm">
                Proverbe chinois
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementsList;