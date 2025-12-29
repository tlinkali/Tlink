import React from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Headphones, 
  LineChart, 
  Users, 
  Cpu, 
  CheckCircle2, 
  Calendar, 
  Monitor, 
  Smartphone, 
  Clock, 
  Zap,
  ArrowRight,
  Database,
  ExternalLink
} from "lucide-react";
import heroImg from "../assets/pages/telephonie-overview/hero.jpg";

export function CentreAppel() {
  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden min-h-[40vh] flex items-center -mt-20">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/85 to-[#2563EB]/40 z-[1]" />
          
          {/* Radial Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2DD4BF]/20 via-transparent to-transparent z-[1]" />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
                <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                <span className="text-white/90 text-[14px] font-semibold tracking-wide">SOLUTIONS SUR MESURE</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                Centre d'Appel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">&</span> 
                <span className="block">Services Externalisés</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                Propulsez votre productivité avec T-LINK CALL, la solution conçue pour l'excellence opérationnelle et la satisfaction client.
              </p>
            </div>
          </div>
        </section>

      {/* Main Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">
                T-LINK CALL : Une productivité hors normes
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Étudiés pour prendre en compte un maximum de facteurs d'efficacité, les centres d'appels déployés par T-LINK répondent à toutes les exigences techniques contemporaines. Bénéficiez d'une modularité exceptionnelle pour s'adapter au mieux à votre organisation interne.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Pour l'entreprise</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      Augmentation du volume traité
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      Meilleure fidélisation client
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      Performance accrue
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Pour vos collaborateurs</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Meilleur confort de travail
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Statistiques en temps réel
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Outils collaboratifs avancés
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Headphones className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="text-accent font-bold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 fill-accent" />
                    PERFORMANCE HUB
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Gestion du temps d'attente & modularité</h3>
                  <div className="space-y-4">
                    {[
                      "Répartition automatique des appels (ACD)",
                      "Files d'attente personnalisées",
                      "Supervision en direct",
                      "Rapports détaillés d'activité"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 flex items-center gap-2 text-white font-bold hover:text-accent transition-colors">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTI Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Couplage Informatique / Téléphonie (CTI)
            </h2>
            <p className="text-slate-600 text-lg">
              Fusionnez vos systèmes d'information et de communication pour un gain de temps et une satisfaction client inégalée.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <Database className="h-7 w-7 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Intégration Data</h3>
              <p className="text-slate-600">
                Compatible LDAP, bases de données standard ou développements spécifiques. Couplage direct à vos fichiers contacts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <Monitor className="h-7 w-7 text-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Remontée de Fiche</h3>
              <p className="text-slate-600">
                Gestion instantanée : la fiche client s'affiche automatiquement à l'écran lors de la réception d'un appel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <Zap className="h-7 w-7 text-emerald-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Click-to-Call</h3>
              <p className="text-slate-600">
                Appels en un clic depuis n'importe quelle application ou CRM. Assistant téléphonique intégré sur PC.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-primary rounded-3xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Mobilité Totale</h4>
                  <p className="text-white/80">Affichage de la présence des collègues et recherche globale dans tous les annuaires.</p>
                </div>
              </div>
              <div className="px-6 py-3 bg-white text-primary font-bold rounded-xl whitespace-nowrap">
                Inclus dans l'offre T-LINK CALL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Télé-secrétariat Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-slate-100 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <div>
                      <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-bold text-slate-900">Permanent ou ponctuel</div>
                    </div>
                  </div>
                </div>
                <div className="h-64 rounded-2xl bg-accent p-6 flex flex-col justify-end text-white">
                  <Calendar className="w-10 h-10 mb-4" />
                  <h4 className="text-xl font-bold">Agenda Partagé</h4>
                  <p className="text-white/80 mt-2">Accès 24/7 sur PC, tablette et smartphone.</p>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="h-64 rounded-2xl bg-primary p-6 flex flex-col justify-end text-white">
                  <Users className="w-10 h-10 mb-4" />
                  <h4 className="text-xl font-bold">Conseillers Dédiés</h4>
                  <p className="text-white/80 mt-2">Accueil professionnel et sans contrainte.</p>
                </div>
                <div className="h-48 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <div className="text-center p-6 text-slate-900 font-bold">
                    Logiciel de téléphonie IP intégré
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">
                Télé-secrétariat : L'accueil professionnel externalisé
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Votre accueil téléphonique et vos agendas sont pilotés à distance selon vos besoins. Quelle que soit la taille de votre entreprise, assurez un service irréprochable.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Renseignement Intelligent</h4>
                    <p className="text-sm text-slate-600">Horaires d'ouverture, plan d'accès, adresse ou toute autre information pratique transmise à vos clients.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Prise de Rendez-vous</h4>
                    <p className="text-sm text-slate-600">Nos conseillers fixent directement les rendez-vous avec vos clients ou patients.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">Un service à la carte :</h4>
                <div className="flex gap-4 flex-wrap">
                  <span className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">Illimité</span>
                  <span className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">Hebdomadaire</span>
                  <span className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">Horaire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2563EB]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
              Prêt à transformer votre relation client ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#2DD4BF] text-[#0F172A] font-bold rounded-2xl hover:bg-[#2DD4BF]/90 transition-all flex items-center justify-center gap-2 shadow-lg">
                Demander une démo <ExternalLink className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 bg-white text-[#2563EB] font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-lg">
                Contacter un expert
              </button>
            </div>
          </div>
        </section>
    </Layout>
  );
}

export default CentreAppel;
