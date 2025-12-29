import React from 'react';
import { Settings } from 'lucide-react';

const InstallationMaitrisee = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-12 h-12 bg-primary-blue text-white rounded-2xl flex items-center justify-center shrink-0 font-bold text-xl shadow-lg shadow-primary-blue/20">2</div>
              <div>
                <h3 className="text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary-blue" />
                  Installation Maîtrisée
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Lors de la phase d’installation, dès signature de votre contrat, un interlocuteur unique de référence est désigné. Vous le rencontrerez en personne pour préparer la mise en place technique de votre solution.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-semibold text-deep-navy">
                    Il sera en charge de l’intégralité de votre projet, depuis la coordination des intervenants techniques jusqu'à la présentation de votre première facture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-4-6.jpg"
                alt="Installation maîtrisée"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationMaitrisee;