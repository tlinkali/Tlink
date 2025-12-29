import React from 'react';
import { Eye, FileText, Activity } from 'lucide-react';

const RelationClientServices = () => {
  const services = [
    {
      title: "Un suivi sur mesure",
      description: "Vous êtes accompagné tout au long de la vie du contrat. Nous serons présents, proactifs, et vous contacterons régulièrement pour faire le point sur vos besoins.",
      icon: Activity,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-5-7.jpg"
    },
    {
      title: "Un espace dédié au client",
      description: "Accès sécurisé à l’ensemble de nos indicateurs de performances. Vous avez le même niveau d’information que nos propres collaborateurs.",
      icon: Eye,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-6-8.jpg"
    },
    {
      title: "Facturation personnalisée",
      description: "Nous définissons ensemble le meilleur fonctionnement répondant à vos besoins analytiques et validons la forme des factures.",
      icon: FileText,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-7-9.jpg"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-deep-navy mb-4">Services & Transparence</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Des outils et un accompagnement conçus pour simplifier votre gestion quotidienne.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelationClientServices;