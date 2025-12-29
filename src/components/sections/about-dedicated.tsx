import React from 'react';
import { Building2, CircleCheck, ArrowRight, Network, Shield, Globe } from 'lucide-react';

const AboutDedicated = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2563eb]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 text-[#2563eb] text-sm font-semibold mb-4 uppercase tracking-wider">
              <Building2 className="h-4 w-4" />
              À propos de T-Link
            </div>
            
            <h2 className="text-[2.5rem] font-bold leading-[1.2] text-[#0f172a] font-heading mb-6">
              Un Opérateur Dédié au<span className="text-[#2563eb]"> Monde Professionnel</span>
            </h2>
            
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 font-sans">
              Opérateur télécom, T-linK est présent sur le segment de la communication et de la transition vers l'Internet Protocole. 
              Nous nous plaçons dans une démarche d'innovation continue pour offrir un réseau capable d'absorber la hausse spectaculaire 
              des usages internet et vous accompagner dans votre transformation digitale.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 group">
                <CircleCheck className="h-5 w-5 text-[#2dd4bf] flex-shrink-0" />
                <span className="text-[#0f172a] font-sans font-medium">Infrastructure réseau propriétaire</span>
              </div>
              <div className="flex items-center gap-3 group">
                <CircleCheck className="h-5 w-5 text-[#2dd4bf] flex-shrink-0" />
                <span className="text-[#0f172a] font-sans font-medium">Solutions sur mesure pour chaque métier</span>
              </div>
              <div className="flex items-center gap-3 group">
                <CircleCheck className="h-5 w-5 text-[#2dd4bf] flex-shrink-0" />
                <span className="text-[#0f172a] font-sans font-medium">Interlocuteur unique pour tous vos besoins</span>
              </div>
            </div>
            
            <a 
              href="/a-propos" 
              className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-3 transition-all group font-sans"
            >
              En savoir plus
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Floating Cards Display */}
          <div className="relative">
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2563eb]/20 to-[#2dd4bf]/20 rounded-3xl blur-3xl opacity-30 pointer-events-none" />
            
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] border border-[#e2e8f0]/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Infrastructure Card */}
                <div className="text-center p-6 rounded-2xl bg-[#f1f5f9]/50 hover:bg-[#f1f5f9] transition-colors duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
                    <Network className="h-6 w-6 text-[#2563eb]" />
                  </div>
                  <h3 className="font-heading font-semibold text-[#0f172a] mb-2 text-lg">Infrastructure</h3>
                  <p className="text-sm text-[#64748b] leading-snug">Réseau propriétaire haute performance</p>
                </div>

                {/* Security Card */}
                <div className="text-center p-6 rounded-2xl bg-[#f1f5f9]/50 hover:bg-[#f1f5f9] transition-colors duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#2563eb]" />
                  </div>
                  <h3 className="font-heading font-semibold text-[#0f172a] mb-2 text-lg">Sécurité</h3>
                  <p className="text-sm text-[#64748b] leading-snug">Protection et confidentialité garanties</p>
                </div>

                {/* Coverage Card - Spanning or taking full column width on small devices */}
                <div className="text-center p-6 rounded-2xl bg-[#f1f5f9]/50 hover:bg-[#f1f5f9] transition-colors duration-300 md:col-span-1">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-[#2563eb]" />
                  </div>
                  <h3 className="font-heading font-semibold text-[#0f172a] mb-2 text-lg">Couverture</h3>
                  <p className="text-sm text-[#64748b] leading-snug">Présence nationale et internationale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDedicated;