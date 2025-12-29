import React from 'react';
import { Clock, Euro, Users, CheckCircle, User, GraduationCap } from 'lucide-react';

const TechnicianCourseDetails: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Formation Technique</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
              TECHNICIEN INSTALLATION TELECOM ET RESEAU
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Acquérez les notions de base sur la programmation et la mise en place technique de systèmes de communication modernes. Une formation immersive pour devenir un expert terrain.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">35 Heures</p>
                  <p className="text-slate-500 text-sm">Durée totale</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Euro className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">2 380 €</p>
                  <p className="text-slate-500 text-sm">Investissement</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">1 - 12</p>
                  <p className="text-slate-500 text-sm">Participants</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg uppercase">K. Tazir</p>
                  <p className="text-slate-500 text-sm">Référent</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Objectifs de la formation
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Devenir technicien d’installation télécom et réseau, savoir administrer un système de communication, et raccorder des systèmes télécom en entreprise.
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[2rem] -rotate-3 -z-10" />
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/photo1-8.jpeg"
                alt="Formation Technicien"
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-blue-900/20 aspect-square md:aspect-video lg:aspect-square"
              />
              
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-tighter">Certification</p>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Attestation des acquis et obtention du certificat technique T-LINK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicianCourseDetails;
