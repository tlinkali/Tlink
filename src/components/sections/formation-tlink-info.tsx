import React from 'react';
import { Info, ShieldCheck, Banknote, MapPin, Users, Lightbulb } from 'lucide-react';

const FormationTLinkInfo = () => {
  const assets = {
    serverInfrastructure: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/photo2-9.jpeg",
  };

  const sections = [
    {
      id: 1,
      title: "QUI SOMMES-NOUS ?",
      content: "T-LINK fête ses 5 ans cette année ! Découvrez notre organisme et ses activités dédiées à l'excellence technologique.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "NOTRE ORGANISME",
      content: "Découvrez notre catalogue de formations et nos dispositifs d'accompagnement personnalisés pour chaque profil.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "FINANCEMENT",
      content: "T-LINK vous accompagne dans votre recherche de financement (CPF, OPCO, etc.) pour faciliter votre accès à la formation.",
      icon: <Banknote className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "PRÉSENTIEL",
      content: "L'alternance entre cours théoriques et manipulations sur matériel réel : une formule gagnante pour votre réussite.",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 text-blue-600 mb-6">
                <Lightbulb className="w-5 h-5 fill-blue-600/10" />
                <span className="font-bold uppercase tracking-widest text-sm">Formation T-LINK</span>
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 mb-10 leading-tight">
                UN ACCOMPAGNEMENT GLOBAL POUR VOTRE CARRIÈRE
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((item) => (
                  <div key={item.id} className="group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Area */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={assets.serverInfrastructure}
                  alt="Infrastructure serveur T-Link"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-black">5 Ans</p>
                <p className="text-xs font-medium uppercase tracking-widest opacity-80">D'Expertise</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationTLinkInfo;
