import React from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Wifi, 
  Search, 
  Settings, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export const SolutionWifi = () => {
  const features = [
    {
      title: "Audit Wifi Expert",
      icon: <Search className="h-8 w-8 text-accent-cyan" />,
      description: "Étude technique ultra-performante : analyse spectrale, puissance de signal, rapport signal/bruit et capacité du canal radio pour une architecture optimale."
    },
    {
      title: "Installation & Connexion",
      icon: <Settings className="h-8 w-8 text-accent-cyan" />,
      description: "Déploiement par des partenaires certifiés avec équipements haut de gamme. Raccordement internet dédié et contrôle constant des flux."
    },
    {
      title: "Espace de Gestion",
      icon: <BarChart3 className="h-8 w-8 text-accent-cyan" />,
      description: "Supervision 24/7 pour anticiper les incidents. Interface web pour visualiser les statistiques en temps réel et consulter l'état des équipements."
    },
    {
      title: "Wifi Visiteur",
      icon: <Users className="h-8 w-8 text-accent-cyan" />,
      description: "Portail captif responsive et personnalisé à vos couleurs. Authentification sécurisée et conforme aux réglementations en vigueur."
    },
    {
      title: "Sécurité & Légalité",
      icon: <ShieldCheck className="h-8 w-8 text-accent-cyan" />,
      description: "Sauvegarde des logs de connexion sur 12 mois (Loi Anti-Terroriste). Accès partagé en toute sécurité avec règles de contrôle strictes."
    },
    {
      title: "Wifi Sur-Mesure",
      icon: <Zap className="h-8 w-8 text-accent-cyan" />,
      description: "Profils de connexion variés, hotspots d'authentification, mots de passe éphémères et priorisation des débits selon les besoins."
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
              <Wifi className="h-4 w-4 text-accent-cyan" />
              <span className="text-white/90 text-[14px] font-semibold tracking-wider uppercase">Wifi Professionnel</span>
            </div>
            
            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Un Réseau Élargi pour <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-blue">
                le Confort de Tous
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Solutions Wifi sur-mesure pour infrastructures collectives, adaptées aux usages intensifs et maîtrisées de l'étude à l'exploitation.
            </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact?subject=Audit%20Wifi%20Professionnel" className="px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-primary-blue/20 flex items-center gap-2">
                  Démarrer votre audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-blue/5 rounded-full blur-3xl" />
              <h2 className="text-4xl font-display font-bold text-deep-navy mb-6">
                Maîtrise totale de la <span className="text-primary-blue">chaîne de production</span>
              </h2>
              <p className="text-lg text-muted-gray leading-relaxed mb-8">
                Pour garantir une infrastructure de Wifi collectif robuste et performante, nous maîtrisons l'ensemble du processus : de l'étude initiale à la maintenance continue.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Search className="w-5 h-5" />, text: "Étude technique site" },
                  { icon: <Settings className="w-5 h-5" />, text: "Installation certifiée" },
                  { icon: <Clock className="w-5 h-5" />, text: "Supervision 24/7" },
                  { icon: <Globe className="w-5 h-5" />, text: "Portail de connexion" },
                  { icon: <Smartphone className="w-5 h-5" />, text: "Interface de suivi" },
                  { icon: <ShieldCheck className="w-5 h-5" />, text: "Conformité légale" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-accent-cyan">{item.icon}</div>
                    <span className="text-deep-navy font-semibold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-deep-navy p-10 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-6">Le Wifi Visiteur</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Un portail d'accueil responsive, personnalisé aux couleurs de votre établissement, offrant une expérience fluide et sécurisée pour vos clients et collaborateurs.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                      <span>Respect de la loi du 23 janvier 2006 (sauvegarde IP 12 mois)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                      <span>Authentification multi-langue automatique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                      <span>Limitation des responsabilités juridiques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-deep-navy mb-4 uppercase tracking-wide">{item.title}</h3>
                <p className="text-muted-gray leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interface Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 border border-slate-100 shadow-xl relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue font-bold text-xs uppercase tracking-widest mb-6">
                  Interface de contrôle
                </div>
                <h2 className="text-4xl font-display font-bold text-deep-navy mb-8">
                  Gardez le contrôle en temps réel
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/10 rounded-xl flex items-center justify-center text-accent-cyan">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-navy mb-1">Statistiques avancées</h4>
                      <p className="text-muted-gray">Visualisez les consommations et le nombre d'utilisateurs connectés en direct.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue">
                      <Settings className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-navy mb-1">Gestion des accès</h4>
                      <p className="text-muted-gray">Créez des mots de passe éphémères, gérez les black/white listes et priorisez les débits.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-deep-navy rounded-2xl p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <Wifi className="w-16 h-16 text-accent-cyan mx-auto mb-4 animate-pulse" />
                      <div className="text-white/40 text-sm font-mono tracking-widest">DASHBOARD_V2.5</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent-cyan p-6 rounded-2xl shadow-xl transform -rotate-3 text-deep-navy font-bold">
                  Bientôt une Application !
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-deep-navy mb-8">
              Prêt pour un Wifi qui vous ressemble ?
            </h2>
            <p className="text-xl text-muted-gray mb-12">
              Contactez nos experts pour une étude technique personnalisée de votre site.
            </p>
              <Link to="/contact?subject=Audit%20Wifi%20Professionnel" className="inline-flex items-center gap-3 px-10 py-5 bg-primary-blue text-white rounded-2xl font-bold hover:bg-primary-blue/90 transition-all shadow-xl shadow-primary-blue/20">
                Demander un audit gratuit
                <ArrowRight className="h-5 w-5" />
              </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionWifi;
