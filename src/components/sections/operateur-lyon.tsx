import React from 'react';
import { MapPin } from 'lucide-react';

const OperateurLyon = () => {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden relative">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-6 border border-blue-100">
              <MapPin className="w-4 h-4" />
              <span className="text-[13px] font-bold uppercase tracking-wider">Opérateur de Proximité</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Un Ancrage Local, <br />
              <span className="text-[#2563EB]">Un Rayonnement National</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-sans">
                T-Link Network bénéficie d'une implantation régionale forte avec cette identité lyonnaise qui nous caractérise. Nous cultivons la proximité géographique avec nos clients pour garantir une réactivité optimale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-sans">
                Grâce à nos partenariats avec les plus grands opérateurs d'infrastructure nationaux, nous couvrons l'ensemble du territoire français avec le même niveau d'exigence et de qualité de service.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">LY</div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Siège à Lyon</div>
                  <div className="text-slate-500 text-sm font-medium uppercase">Centre de décision</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">FR</div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Présence France</div>
                  <div className="text-slate-500 text-sm font-medium uppercase">Couverture totale</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:w-auto">
            <div className="relative z-10 bg-white rounded-[2.5rem] p-4 md:p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 group">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/Carte-de-France-tlink-operateur-3.jpg"
                alt="Carte de France T-Link Network Opérateur"
                className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
                <div className="text-2xl font-extrabold text-[#2563EB]">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Couverture Fibre</div>
              </div>
            </div>
            
            {/* Background decorative blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-400/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperateurLyon;