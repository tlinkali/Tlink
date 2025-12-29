import React from 'react';
import { Globe } from 'lucide-react';
import evolutionImg from '@/assets/home/internet-evolution.png';

const InternetEvolution = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Circular Hub Graphic */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            {/* Glow Effect behind the graphic */}
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
              <div className="relative">
                <img
                  src={evolutionImg}
                  alt="L'Évolution des Usages d'Internet - Graphique de connectivité"
                  className="w-full max-w-[480px] h-auto object-contain transition-transform duration-700 hover:scale-105"
                  width="480"
                  height="480"
                  loading="lazy"
                />
              </div>
          </div>

          {/* Right Column: Detailed Text Explanation */}
          <div className="order-1 lg:order-2">
            {/* Connectivity Badge */}
            <div className="inline-flex items-center gap-2 text-primary text-[14px] font-semibold mb-6 uppercase tracking-[0.1em]">
              <Globe className="h-4 w-4" />
              CONNECTIVITÉ
            </div>

            {/* Heading */}
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-heading font-bold text-[#0f172a] mb-8 leading-[1.15] tracking-tight">
              L&apos;Évolution des Usages <span className="text-primary">d&apos;Internet</span>
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6">
              <p className="text-[#64748b] text-lg leading-relaxed">
                La connexion internet en entreprise est devenue vitale. Tous les flux transitent
                par ce lien : téléphonie, messagerie, raccordement des agences distantes,
                travail sur le net en mode cloud et flux de dématérialisation.
              </p>
              
              <div className="pt-2">
                <p className="text-[#64748b] text-lg leading-relaxed">
                  Cette connexion devient un véritable cordon ombilical qui relie votre entreprise au reste
                  du monde. <span className="font-semibold text-primary">Le choix du partenaire qui va raccorder votre entreprise devient essentiel.</span>
                </p>
              </div>
            </div>

            {/* Visual indicator / separator line */}
            <div className="mt-10 w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Additional subtle design element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mb-32 -mr-32 pointer-events-none"></div>
    </section>
  );
};

export default InternetEvolution;
