import React from 'react';
import { Heart, Unlock, Minimize, Eye, Quote } from 'lucide-react';

const valeurs = [
  {
    title: "LA CONSIDÉRATION",
    subtitle: "Pilier Relationnel",
    description: "C’est un pilier fondateur de notre approche relationnelle, tant commerciale que technique. Nous pensons que chaque collaborateur a la possibilité d’être acteur de progrès et de changement.",
    icon: <Heart className="h-8 w-8" />,
  },
  {
    title: "L’OUVERTURE",
    subtitle: "Créativité & Talents",
    description: "Nous sommes ouverts à la créativité, à l’initiative et aux jeunes talents. Nous acceptons la diversité des parcours pour favoriser l'innovation et l'adaptabilité.",
    icon: <Unlock className="h-8 w-8" />,
  },
  {
    title: "LA SIMPLICITÉ",
    description: "Une organisation accessible et moins complexe, au bénéfice de la fluidité et de la transparence des échanges au quotidien.",
    subtitle: "Échanges Fluides",
    icon: <Minimize className="h-8 w-8" />,
  },
  {
    title: "LA TRANSPARENCE",
    subtitle: "Relation de Confiance",
    description: "La sincérité et la lisibilité sont des prérequis. Nous sommes transparents dans la conduite et le suivi de nos actions auprès de nos clients et collaborateurs.",
    icon: <Eye className="h-8 w-8" />,
  }
];

const ValeursList = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-valeurs" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-valeurs)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">
            NOS VALEURS
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#2DD4BF] mx-auto rounded-full mb-8" />
          <p className="text-slate-600 text-lg leading-relaxed">
            Nos valeurs ne sont pas de simples mots, elles constituent l'ADN de T-Link 
            et guident chacune de nos décisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {valeurs.map((valeur) => (
            <div 
              key={valeur.title}
              className="group bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center border border-teal-100 text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-white transition-all duration-500 mb-8">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {valeur.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 uppercase tracking-tight">
                  {valeur.title}
                </h3>
                <p className="text-[#2DD4BF] font-bold text-xs tracking-[0.2em] uppercase mb-6">
                  {valeur.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {valeur.description}
                </p>
                
                <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#2DD4BF] group-hover:to-[#2563EB] transition-all duration-700 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Kenneth Blanchard Quote */}
        <div className="mt-32">
          <div className="bg-[#0F172A] rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl text-center">
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2DD4BF]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <Quote className="h-12 w-12 text-[#2DD4BF] mx-auto mb-8 opacity-50" />
              <p className="text-2xl md:text-3xl font-medium italic text-white leading-relaxed mb-8">
                &quot; Aucun d’entre nous n’est aussi intelligent que l’ensemble d’entre nous. &quot;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-[#2DD4BF]/30" />
                <span className="text-[#2DD4BF] font-bold tracking-widest uppercase text-sm">
                  Kenneth Blanchard
                </span>
                <div className="h-px w-8 bg-[#2DD4BF]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValeursList;