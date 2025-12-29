import React from 'react';
import { Target, Users, Award, LineChart, Zap, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      id: 1,
      title: "ACCUEIL",
      content: "Six places disponibles par session chaque semaine. L'assurance d'un cursus intensif en moins de cinq jours avec ajustement sur mesure.",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: "ACCOMPAGNEMENT",
      content: "Supports théoriques et mises en situation réelles avec manipulation de matériel. Un parcours pensé pour une employabilité immédiate.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 3,
      title: "EXPERTISE",
      content: "Plus de 15 ans d'expérience terrain dans les télécoms mis à votre service pour une transmission de savoir-faire unique.",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 4,
      title: "ÉVALUATION",
      content: "Positionnement initial, suivi quotidien et validation des acquis théoriques et pratiques pour garantir votre montée en compétences.",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 5,
      title: "AMÉLIORATION",
      content: "80% de taux de réussite et plus de 60% de retour à l'emploi en CDI. Nous restons à la pointe de la formation technique.",
      icon: <LineChart className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3">Excellence Pédagogique</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase">
            POURQUOI CHOISIR LA FORMATION T-LINK ?
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {points.map((point) => (
                <div key={point.id} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {point.icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                      <span className="text-blue-200 mr-2">0{point.id}</span>
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-600/5 rounded-full blur-3xl" />
              
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/photo3-10.jpeg"
                  alt="Professional meeting room"
                  className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Success Rate Card */}
              <div className="absolute -bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] animate-bounce-slow">
                <div className="flex items-center space-x-2 text-green-500 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-2xl font-black">80%</span>
                </div>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-tighter">Taux de réussite</p>
                <p className="text-[10px] text-slate-500 mt-1">Garantie d'excellence technique et pédagogique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
