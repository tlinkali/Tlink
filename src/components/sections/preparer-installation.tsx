import React from 'react';
import { ClipboardCheck } from 'lucide-react';

const PreparerInstallation = () => {
  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-deep-navy mb-4">Un déploiement maîtrisé</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Notre méthodologie éprouvée garantit une transition fluide et sans interruption pour votre activité.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-12 h-12 bg-primary-blue text-white rounded-2xl flex items-center justify-center shrink-0 font-bold text-xl shadow-lg shadow-primary-blue/20">1</div>
              <div>
                <h3 className="text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                  <ClipboardCheck className="w-6 h-6 text-primary-blue" />
                  Audit & Préparation
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Avant l’installation matérielle, un audit technique est systématiquement réalisé pour préparer au mieux le déploiement de votre solution.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Tout est mis en œuvre, de l’analyse de l’existant à la prise en compte de tous vos paramètres organisationnels, pour nous assurer que la migration se déroule le mieux possible. Un incontournable pour démarrer notre relation sur de bonnes bases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-3-5.jpg"
                alt="Audit technique"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparerInstallation;