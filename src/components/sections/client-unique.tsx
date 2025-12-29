import React from 'react';
import { UserCheck } from 'lucide-react';

const ClientUnique = () => {
  const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-1-3.jpg";

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-blue/10 rounded-[2rem] blur-2xl group-hover:bg-primary-blue/20 transition-all duration-500"></div>
              <img
                src={imageUrl}
                alt="Chaque client est unique"
                className="relative w-full h-[400px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-deep-navy">Accompagnement</p>
                    <p className="text-xs text-slate-500">100% Personnalisé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-8 leading-tight">
              Chaque client est <span className="text-primary-blue">unique</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                La relation client est simple, fluide et personnifiée. Des interlocuteurs, experts à chaque étape de la vie du contrat (avant-vente, installation, exploitation), seront vos contacts privilégiés.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Vous les connaîtrez personnellement et aurez leurs coordonnées directes. Une expérience inédite de relation clients personnalisée.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary-blue shadow-sm border border-slate-100">Contact Direct</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary-blue shadow-sm border border-slate-100">Experts Dédiés</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary-blue shadow-sm border border-slate-100">Fluidité Totale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientUnique;