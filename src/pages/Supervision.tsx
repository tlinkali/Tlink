import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { 
  Shield, 
  Activity, 
  BarChart3, 
  Settings, 
  Smartphone, 
  Globe, 
  ArrowRight, 
  CheckCircle2,
  Lock,
  PieChart,
  ClipboardList
} from "lucide-react";
import { Link } from 'react-router-dom';

export default function Supervision() {
  const features = [
    {
      title: "La Flotte Mobile",
      description: "Gestion complète du cycle de vie des utilisateurs : activation SIM, suspension de lignes, renouvellement d'offres. Accès libre et autonome à votre parc mobile.",
      icon: <Smartphone className="h-8 w-8 text-accent-cyan" />,
    },
    {
      title: "Le Fixe et Internet",
      description: "Interface dédiée à la téléphonie hébergée. Surveillance en temps réel, alertes de changement d'état et de saturation des liens pour une performance optimale.",
      icon: <Globe className="h-8 w-8 text-accent-cyan" />,
    }
  ];

  const monitoringServices = [
    {
      title: "Suivi de performance",
      icon: <PieChart className="w-6 h-6" />,
      details: [
        "Statut de connexion en temps réel",
        "Statut des services internet/téléphonie",
        "Débit consommé et bande passante",
        "Contrôle et visualisation des connexions"
      ]
    },
    {
      title: "Gestion des incidents",
      icon: <ClipboardList className="w-6 h-6" />,
      details: [
        "Gestion et suivi des tickets d'incidents",
        "Information automatique des résolutions",
        "Suivi de l'avancement en temps réel",
        "Application mobile dédiée (bientôt)"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 overflow-hidden bg-deep-navy -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
              </span>
              <span className="text-white/90 text-[14px] font-semibold tracking-wider uppercase">Extranet & Supervision</span>
            </div>
            
            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Espace de Gestion <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-blue">
                Personnel & Intuitif
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Mieux vous connaître pour mieux vous gérer. Accédez à une plateforme de surveillance réseau ultra-performante pour un contrôle total de votre infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-deep-navy mb-6">
              Gestion de votre parc en <span className="text-primary-blue">toute autonomie</span>
            </h2>
            <div className="w-20 h-1.5 bg-accent-cyan rounded-full mx-auto mb-8" />
            <p className="text-lg text-muted-gray leading-relaxed">
              Une interface unique pour piloter l'ensemble de vos ressources télécoms, mobiles et internet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-deep-navy mb-4">{feature.title}</h3>
                <p className="text-muted-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Monitoring & Services Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-deep-navy mb-10">
                Suivi des services & Performance
              </h2>
              <div className="grid sm:grid-cols-1 gap-6">
                {monitoringServices.map((service, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-deep-navy">{service.title}</h3>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-muted-gray text-sm">
                          <CheckCircle2 className="h-5 w-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-deep-navy p-10 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10">
                  <BarChart3 className="h-12 w-12 mb-8 text-accent-cyan" />
                  <h3 className="text-3xl font-display font-bold mb-8">Espace Client Intuitif</h3>
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <PieChart className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Facturation & Consommation</h4>
                        <p className="text-white/60 text-sm leading-relaxed">Gérez vos informations personnelles, suivez votre compte en temps réel et accédez à des factures détaillées.</p>
                      </div>
                    </div>
                    <div className="flex gap-5 pt-8 border-t border-white/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <Lock className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Sécurité & Contrôle</h4>
                        <p className="text-white/60 text-sm leading-relaxed">Espaces indépendants garantissant une sécurité totale. Solution automatisée, modulable et personnalisable.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="italic text-white/80 text-sm leading-relaxed">
                      "Notre solution permet de piloter vos services en toute sécurité et d'accueillir simplement vos futures évolutions."
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-slate-100 rounded-[3rem] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-primary-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:100px_100px] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Prêt à optimiser la gestion de votre réseau ?
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Découvrez comment notre outil de supervision peut transformer le pilotage de vos télécoms.
              </p>
              <Link to="/contact?subject=Démo%20Supervision" className="inline-flex items-center gap-3 px-10 py-5 bg-deep-navy text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                Demander une démo gratuite
                <ArrowRight className="h-5 w-5 text-accent-cyan" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

