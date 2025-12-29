import React from 'react';
import { MapPin } from 'lucide-react';

const EquipeLocale = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-blue/10 rounded-[2rem] blur-2xl group-hover:bg-primary-blue/20 transition-all duration-500"></div>
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-2-4.jpg"
                alt="Équipe locale"
                className="relative w-full h-[400px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-deep-navy">Proximité</p>
                    <p className="text-xs text-slate-500">Présence Locale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-8 leading-tight">
              Une équipe <span className="text-primary-blue">locale</span> plus proche de vous
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Notre organisation est pensée pour être efficace et répondre de façon réactive et adaptée à vos problématiques. Nos équipes de proximité, installées localement, sont à taille humaine.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-semibold text-primary-blue">
                Votre dossier est pris en main immédiatement et suivi sans discontinuité par votre interlocuteur de référence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Elles sont dotées d'une autonomie et d'un pouvoir d'agir qui leur permettent de vous apporter une réponse rapide et pertinente sans délais administratifs inutiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipeLocale;