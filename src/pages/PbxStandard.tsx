import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import heroImg from "../assets/pages/telephonie-overview/hero.jpg";
import { 
  Phone, 
  Server, 
  Settings, 
  Headset, 
  Smartphone, 
  ShieldCheck,
  Zap,
  Globe,
  Monitor,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Users,
  MessageSquare
} from "lucide-react";

export function PbxStandard() {
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
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide">INFRASTRUCTURE DÉDIÉE</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                  Standard Téléphonique <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    PBX Professionnel
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                  Le centre névralgique de votre communication. Une solution robuste, flexible et intuitive conçue pour propulser votre accueil client vers de nouveaux sommets.
                </p>
              </div>
            </div>
        </section>

      {/* Intro Section - Two Column Pattern */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                <Server className="h-4 w-4" />
                Infrastructure Dédiée
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                La puissance d'un standard physique de nouvelle génération
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Notre solution PBX (Private Branch Exchange) offre une maîtrise totale de votre infrastructure de communication. Idéal pour les entreprises souhaitant conserver leurs équipements sur site tout en profitant des avantages du Tout IP.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/30 transition-colors">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" /> IP Native
                  </h4>
                  <p className="text-sm text-slate-600">Prêt pour le futur, simplifiant la maintenance et réduisant les coûts.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Sécurité
                  </h4>
                  <p className="text-sm text-slate-600">Communications chiffrées et protection contre les tentatives d'intrusion.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                      alt="Tech Infrastructure" 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div className="bg-primary p-8 rounded-3xl text-slate-900 shadow-xl">
                    <Globe className="h-8 w-8 mb-4 opacity-50" />
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Disponibilité</div>
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="bg-accent p-8 rounded-3xl text-slate-900 shadow-xl">
                    <Activity className="h-8 w-8 mb-4 opacity-50" />
                    <div className="text-3xl font-bold">HD</div>
                    <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Qualité Audio</div>
                  </div>
                  <div className="h-64 rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop" 
                      alt="PBX Hardware" 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Une solution complète pour vos besoins métiers
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Découvrez les fonctionnalités avancées intégrées à notre standard pour optimiser votre productivité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="h-7 w-7 text-primary" />}
              title="Accueil Professionnel"
              description="SVI multi-niveaux, files d'attente intelligentes et musiques d'attente personnalisables."
            />
            <FeatureCard 
              icon={<Smartphone className="h-7 w-7 text-accent" />}
              title="Mobilité Totale"
              description="Vos collaborateurs restent joignables partout, sur n'importe quel terminal (PC, Smartphone, Tablette)."
            />
            <FeatureCard 
              icon={<Settings className="h-7 w-7 text-blue-500" />}
              title="Gestion Simplifiée"
              description="Interface d'administration intuitive pour gérer vos extensions et vos règles de routage."
            />
            <FeatureCard 
              icon={<Activity className="h-7 w-7 text-emerald-500" />}
              title="Analytique Avancée"
              description="Statistiques détaillées sur vos flux d'appels pour optimiser votre qualité de service."
            />
            <FeatureCard 
              icon={<Headset className="h-7 w-7 text-indigo-500" />}
              title="Collaboration Unifiée"
              description="Intégrez voix, vidéo et messagerie dans une interface unique pour vos collaborateurs."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-7 w-7 text-slate-700" />}
              title="Fiabilité Garantie"
              description="Une infrastructure robuste conçue pour fonctionner 24/7 sans interruption."
            />
          </div>
        </div>
      </section>

      {/* Hardware Spotlight Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <Monitor className="w-full h-full text-white" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-accent text-sm font-bold mb-4 uppercase tracking-wider">
                  <Headset className="h-4 w-4" />
                  Terminaux IP
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                  Des équipements élégants et ergonomiques
                </h2>
                <div className="space-y-6 text-white/80 text-lg leading-relaxed mb-10">
                  <p>
                    L'expérience PBX passe aussi par le hardware. Nous sélectionnons les meilleurs postes IP du marché pour offrir un confort d'utilisation exceptionnel.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Écrans LCD tactiles",
                      "Qualité sonore HD",
                      "Touches programmables",
                      "Bluetooth & Wi-Fi intégré"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-white/90 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  <Link to="/contact?subject=Gamme%20Terminaux%20IP" className="inline-flex items-center gap-2 bg-accent text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                    Découvrir la gamme
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] opacity-20" />
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop" 
                    alt="PBX Postes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl border border-slate-100 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                Prêt à <span className="text-primary">transformer</span> votre téléphonie ?
              </h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Nos conseillers experts sont à votre disposition pour réaliser une étude gratuite de vos besoins et vous proposer la solution PBX la plus adaptée.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                  <Link to="/contact?subject=Devis%20PBX%20Standard" className="bg-primary text-slate-900 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20">
                    Demander un devis personnalisé
                  </Link>
                <div className="flex items-center gap-4 text-slate-900">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-slate-500">Une question ?</div>
                    <div className="font-bold text-primary">Chattez avec un expert</div>
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

export default PbxStandard;
