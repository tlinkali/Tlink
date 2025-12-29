import React from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Network, 
  Globe, 
  Users, 
  Monitor, 
  Server,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Lock,
  Activity,
  Cpu,
  Smartphone
} from "lucide-react";

export function Vpn() {
  const features = [
    {
      title: "Interconnexion MPLS",
      description: "Basée sur un cœur de réseau MPLS (Multi Protocol Label Switching), notre solution VPN IP est le socle de vos solutions digitales multi-sites.",
      icon: <Network className="h-6 w-6 text-primary" />
    },
    {
      title: "Architecture Any-to-Any",
      description: "Votre propre réseau IP MPLS privé et étanche, indépendant des opérateurs traditionnels, sans passer par un site central.",
      icon: <Globe className="h-6 w-6 text-accent" />
    },
    {
      title: "Accès Nomades",
      description: "Permettez à vos utilisateurs nomades d'accéder aux ressources de l'entreprise en toute confidentialité selon vos règles.",
      icon: <Smartphone className="h-6 w-6 text-primary" />
    }
  ];

  const services = [
    "Firewall en cœur de réseau",
    "Redondance multi-technologies",
    "Accès distant sécurisé",
    "Téléphonie IP intégrée",
    "Supervision complète 24/7",
    "Hébergement d'applications"
  ];

    return (
        <Layout>
            <SEO 
              title="VPN IP MPLS & Interconnexion de Sites | Réseau Privé Managé" 
              description="Sécurisez vos échanges inter-sites avec nos solutions VPN IP MPLS. Architecture Any-to-Any, débits garantis et supervision en temps réel."
            />
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
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide">RÉSEAU PRIVÉ</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                  Connectivité <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    VPN IP MPLS
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                  Raccordez vos différents sites en toute simplicité. Augmentez la capacité et la rapidité d'échange de données au-delà de toute limite géographique.
                </p>
              </div>
            </div>
        </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Réseau Privé & Sécurisé
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                L'interconnexion de sites sans contraintes
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                T-LINK vous apporte son savoir-faire pour vous fournir une solution managée, flexible, performante et évolutive capable d'accompagner la croissance de votre business. Libérez-vous des contraintes liées à la distance.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-accent" /> MPLS Natif
                  </h4>
                  <p className="text-sm text-slate-600">Performance et priorité des flux applicatifs garanties sur tout votre réseau.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-accent" /> Sécurité Totale
                  </h4>
                  <p className="text-sm text-slate-600">Réseau privé étanche, indépendant d'Internet pour une protection maximale.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50" />
              <div className="relative bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-8">Services Complémentaires</h3>
                <ul className="space-y-4">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-sm text-white/60 italic">
                    "Une architecture « Any to Any », sans passer par un site central, pour une fluidité d'échange optimale."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Supervision Section */}
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <Activity className="w-full h-full text-white" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                  Pilotez votre réseau de manière <span className="text-accent">autonome</span>
                </h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Avec notre solution de supervision, vous maîtrisez totalement et en temps réel tout ce qu'il se passe sur votre réseau depuis votre interface dédiée.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-accent/20 rounded-lg">
                      <Monitor className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Visualisation Temps Réel</h4>
                      <p className="text-white/60 text-sm">Consommation de bande passante et état de connexion de tous vos sites.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-primary/20 rounded-lg">
                      <Activity className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Indicateurs de Qualité (QoS)</h4>
                      <p className="text-white/60 text-sm">Surveillez la latence, la gigue et la perte de paquets en continu.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-white font-bold tracking-wider uppercase text-sm">Dashboard Supervision</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Site Paris - Siège", value: 85, color: "bg-primary" },
                    { label: "Site Lyon - Agence", value: 42, color: "bg-accent" },
                    { label: "Site Bordeaux - Logistique", value: 67, color: "bg-primary" }
                  ].map((site, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs text-white/60 font-medium">
                        <span>{site.label}</span>
                        <span>{site.value}% BP</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${site.color} rounded-full`} style={{ width: `${site.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-around">
                  <div className="text-center">
                    <div className="text-xs text-white/40 uppercase mb-1">Latence</div>
                    <div className="text-white font-bold">12ms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/40 uppercase mb-1">Gigue</div>
                    <div className="text-white font-bold">2ms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/40 uppercase mb-1">Uptime</div>
                    <div className="text-white font-bold">99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                Prêt à connecter vos <span className="text-accent">Business Units</span> ?
              </h2>
              <p className="text-slate-900/70 text-lg mb-12 leading-relaxed font-medium">
                Libérez-vous des contraintes géographiques. Nos experts conçoivent pour vous le réseau privé dont votre organisation a besoin pour croître sereinement.
              </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/contact?subject=Étude%20VPN%20IP%20MPLS" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                    Demander une étude VPN
                  </Link>
                <div className="flex items-center gap-4 text-slate-900">
                  <div className="w-12 h-12 rounded-full border border-slate-900/20 flex items-center justify-center">
                    <Network className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900/50 font-bold uppercase">Multi-sites</div>
                    <div className="font-bold">Architecture sur mesure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Vpn;
