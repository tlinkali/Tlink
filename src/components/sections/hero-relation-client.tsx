import React from 'react';

const HeroRelationClient: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-1 bg-primary-blue rounded-full mb-8"></div>
          
          <h2 className="text-sm font-bold text-primary-blue uppercase tracking-[0.2em] mb-4">
            La voix du client au cœur de la démarche
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-8 leading-tight">
            Une approche agile et personnalisée pour chaque entreprise
          </h3>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              Opérateur agile exclusivement dédié aux professionnels, notre métier est de bâtir des solutions adaptées à la taille et aux enjeux de chaque entreprise. Nous adaptons nos réponses à leurs besoins et fournissons des solutions packagées ou sur-mesure, complétées de services haut de gamme à valeur ajoutée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRelationClient;