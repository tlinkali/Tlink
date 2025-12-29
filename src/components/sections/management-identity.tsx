import React from 'react';

/**
 * ManagementIdentity component
 * Clones the dark themed full-width section emphasizing unique management tools.
 * Focuses on pixel-perfect accuracy to the provided screenshots and design instructions.
 */
const ManagementIdentity = () => {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration consistent with the tech-forward design system */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at top right, rgba(37, 99, 235, 0.15), transparent 40%), 
                            radial-gradient(circle at bottom left, rgba(45, 212, 191, 0.1), transparent 40%)`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* 
            Heading with emphasis on the second half. 
            The design instructions specify cloning the heading and emphasizing collaborative tools.
            Following the screenshot (5/8), the second part is italicized and in the accent cyan color.
          */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.2] tracking-tight">
            Pour un accueil qui vous ressemble,{' '}
            <span className="text-[#2DD4BF] italic">
              votre gestion doit être unique
            </span>
          </h2>

          {/* 
            Description paragraph emphasizing the collaborative nature of the tools.
            Styling follows the 'High contrast text' theme from the high-level design.
          */}
          <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
            Nous entendons souvent parler de la manière dont est géré votre dossier télécom. 
            Pour une meilleure gestion il est nécessaire de vous mettre à disposition des outils 
            collaboratifs qui nous donnerons les clefs pour répondre de la meilleure manière à vos demandes.
          </p>
        </div>
      </div>

      {/* Subtle bottom border highlight similar to other dark sections in the reference */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default ManagementIdentity;