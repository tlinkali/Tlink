import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { Phone, Globe, Laptop, Smartphone, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from '@/assets/home/hero-bg.png';

export function Offres() {
  const offerSections = [
    {
      title: "Téléphonie",
      description: "Des solutions de communication modernes et performantes pour votre entreprise.",
      icon: <Phone className="h-8 w-8 text-primary" />,
      color: "bg-blue-50",
      items: [
        { label: "Fixe VoIP / SIP", href: "/offres/telephonie/voip-sip", description: "Standard téléphonique IP flexible." },
        { label: "Téléphonie hébergée", href: "/offres/telephonie/hebergee", description: "Votre standard dans le cloud." },
        { label: "Téléphonie unifiée", href: "/offres/telephonie/unifiee", description: "Collaborer sans limites." },
      ],
    },
    {
      title: "Internet & Réseaux",
      description: "Une connectivité ultra-rapide et sécurisée adaptée à vos besoins réels.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      color: "bg-emerald-50",
      items: [
        { label: "Fibre Optique", href: "/offres/internet/fibre", description: "Le très haut débit dédié ou mutualisé." },
        { label: "xDSL", href: "/offres/internet/xdsl", description: "Liaisons ADSL et VDSL stables." },
        { label: "VPN", href: "/offres/internet/vpn", description: "Interconnectez vos sites en toute sécurité." },
      ],
    },
    {
      title: "Équipements & Solutions",
      description: "Le matériel et les logiciels pour optimiser votre productivité.",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      color: "bg-purple-50",
      items: [
        { label: "PBX – Standard", href: "/offres/equipements/pbx-standard", description: "Systèmes de communication sur site." },
        { label: "Centre d'appel", href: "/offres/equipements/centre-appel", description: "Gérez vos flux d'appels entrants." },
        { label: "Santé", href: "/offres/equipements/sante", description: "Solutions dédiées au secteur médical." },
        { label: "Sécurité", href: "/offres/equipements/securite", description: "Protections réseaux et pare-feu." },
      ],
    },
    {
      title: "Mobile",
      description: "Restez connecté partout avec nos forfaits mobiles professionnels.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      color: "bg-orange-50",
      items: [
        { label: "Forfaits Mobiles", href: "/offres/mobile", description: "Large gamme de forfaits voix et data." },
      ],
    },
  ];

  return (
    <Layout>
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 overflow-hidden bg-deep-navy -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
              <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
              <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">Solutions Professionnelles</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              Nos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                Offres & Solutions
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Découvrez notre gamme complète de services télécoms conçus pour booster la performance de votre entreprise.
            </p>
              <div className="mt-10">
                 <Link to="/contact?subject=Démo%20Offres%20Solutions" className="inline-flex items-center gap-2 bg-[#2DD4BF] text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
                  Demander une démo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Categories Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Une expertise <span className="text-primary italic">multiservice</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Des solutions agiles et performantes adaptées à chaque aspect de votre communication d'entreprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {offerSections.map((section, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="space-y-4">
                  {section.items.map((item, iIdx) => (
                    <Link 
                      key={iIdx} 
                      to={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item"
                    >
                      <div className="mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-slate-900 font-semibold mb-1 flex items-center gap-2 group-hover/item:text-primary transition-colors">
                          {item.label}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Besoin d'une offre <span className="text-primary underline decoration-[#2DD4BF] decoration-4 underline-offset-8">sur mesure</span> ?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Nos experts sont là pour vous accompagner et construire avec vous la solution qui correspond exactement à vos besoins.
          </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact?subject=Contact%20Offres%20Sur%20Mesure" 
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
              >
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
            <a 
              href="tel:0102030405" 
              className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2"
            >
              <Phone className="h-5 w-5 text-primary" />
              01 02 03 04 05
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Offres;
