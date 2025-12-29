import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { 
  Phone, 
  Cloud, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Network, 
  Smartphone, 
  ShieldCheck,
  Globe,
  MessageSquare
} from "lucide-react";

import heroImg from "@/assets/pages/telephonie-overview/hero.jpg";
import mainImg from "@/assets/pages/telephonie-overview/main.jpg";

const services = [
  {
    title: "Trunk SIP / VoIP",
    description: "Connectez votre standard IP ou analogique à notre réseau opérateur et profitez de tarifs ultra-compétitifs.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    href: "/offres/telephonie/voip-sip",
    features: ["Compatibilité universelle", "Haute disponibilité", "Portabilité gratuite"]
  },
  {
    title: "CentreX / Hébergée",
    description: "Un standard virtuel complet, flexible et évolutif sans investissement matériel lourd.",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    href: "/offres/telephonie/hebergee",
    features: ["Multi-sites", "Interface intuitive", "Zéro maintenance"]
  },
  {
    title: "Communications Unifiées",
    description: "Convergence fixe-mobile, chat, visio et outils collaboratifs pour une productivité décuplée.",
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    href: "/offres/telephonie/unifiee",
    features: ["Softphone PC/Mac", "Application Mobile", "Présence temps réel"]
  }
];

export function TelephonieOverview() {
  return (
    <Layout>
      <SEO 
        title="Solutions Téléphonie" 
        description="Standard téléphonique hébergé, VoIP, Trunk SIP et Communication Unifiée. Modernisez vos communications d'entreprise."
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
              <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">SOLUTIONS TÉLÉCOMS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              La Téléphonie <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                D'Entreprise
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Des solutions de communication agiles, performantes et économiques adaptées à toutes les tailles d'entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Nos Solutions Télécoms
            </h2>
            <p className="text-slate-600 text-lg">
              De la simple ligne VoIP à la convergence totale, T-LINK vous accompagne dans la modernisation de vos outils de communication.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.href}
                  className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                >
                  Découvrir l'offre
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why T-Link Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50" />
              <img 
                src={mainImg} 
                alt="Expertise T-Link"
                className="relative rounded-[3rem] shadow-2xl border border-white"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">99.9%</span>
                </div>
                <p className="text-sm font-medium text-slate-500">Disponibilité garantie</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Opérateur Engagé
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                Pourquoi choisir T-LINK pour votre téléphonie ?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 font-bold text-primary">01</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Opérateur Direct</h4>
                    <p className="text-slate-600">En tant qu'opérateur pure-player, nous maîtrisons l'intégralité de la chaîne technique pour vous garantir la meilleure qualité de service.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 font-bold text-primary">02</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Support Local</h4>
                    <p className="text-slate-600">Fini les plateformes à l'étranger. Vous bénéficiez d'un accompagnement personnalisé par nos experts basés en France.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 font-bold text-primary">03</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Agilité Technologique</h4>
                    <p className="text-slate-600">Nous faisons évoluer nos solutions en permanence pour vous proposer les meilleurs outils de collaboration du marché.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
            {/* These would be actual partner logos */}
            <span className="text-2xl font-display font-bold text-slate-900 italic">POLY</span>
            <span className="text-2xl font-display font-bold text-slate-900 italic">YEALINK</span>
            <span className="text-2xl font-display font-bold text-slate-900 italic">CISCO</span>
            <span className="text-2xl font-display font-bold text-slate-900 italic">3CX</span>
            <span className="text-2xl font-display font-bold text-slate-900 italic">ALCATEL</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TelephonieOverview;
