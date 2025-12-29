import React from "react";
import hebergeeImg from "../assets/pages/telephonie-unifiee/hero.jpg";
import teamImg from "../assets/services/connectivity.jpg";
import { Layout } from "@/components/layout/Layout";
import { 
  Phone, 
  Cloud, 
  Zap, 
  CheckCircle2, 
  Settings, 
  Users, 
  Smartphone, 
  Network,
  ShieldCheck,
  TrendingDown,
  MousePointer2
} from "lucide-react";

export function TelephonieHebergee() {
  return (
      <Layout>
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 overflow-hidden min-h-[60vh] flex items-center -mt-20">
            <div className="absolute inset-0 z-0">
                <img 
                  src={hebergeeImg} 
                  alt="" 
                  className="w-full h-full object-cover"
                  width="1200"
                  height="800"
                  loading="eager"
                  fetchpriority="high"
                />
            </div>
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/85 to-[#2563EB]/40 z-[1]" />
          
          {/* Radial Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2DD4BF]/20 via-transparent to-transparent z-[1]" />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent z-[2]" />
          
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide">TÉLÉPHONIE CLOUD</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                  La Téléphonie <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    Hébergée Centrex
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
                  Toutes les fonctionnalités d'un vrai standard, entièrement externalisées dans le cloud.
                </p>
              </div>
            </div>
        </section>

      {/* Qu'est-ce que le Centrex ? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                <Cloud className="h-4 w-4" />
                Le futur de la téléphonie
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Le Centrex IP, qu'est-ce que c'est ?
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Un Centrex IP, également connu sous le nom de téléphonie hébergée ou téléphonie dans le cloud, est tout simplement un autocommutateur déporté, virtualisé chez l'opérateur.
                </p>
                <p>
                  Pour fonctionner, le Centrex n'a besoin que d'un simple accès internet. Grâce à une plateforme robuste et sécurisée, T-LINK maîtrise la gestion de vos appels et de vos services de téléphonie.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                  <p className="font-medium text-slate-900 italic">
                    "Une solution de téléphonie sur IP clé en main qui s'adapte à votre croissance."
                  </p>
                </div>
              </div>
            </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-xl max-w-lg mx-auto">
                  <img 
                    src={teamImg} 
                    alt="Équipe travaillant avec la téléphonie cloud"
                    className="rounded-2xl w-full h-auto object-cover mb-6"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                      <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                      <span className="block font-bold text-slate-900 text-sm">Zéro PABX</span>
                      <span className="text-xs text-slate-500">Pas de matériel à acquérir</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                      <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                      <span className="block font-bold text-slate-900 text-sm">Zéro Maintenance</span>
                      <span className="text-xs text-slate-500">Géré par nos experts</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Pourquoi opter pour l'IP ? */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Pourquoi opter pour une solution de téléphonie Tout IP ?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Découvrez les avantages d'une infrastructure moderne, flexible et économique pour votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              icon={<Zap className="h-7 w-7 text-primary" />}
              title="Installation Rapide"
              description="Vos postes n'ont qu'à être branchés (Plug & Play) pour fonctionner immédiatement."
            />
            <Card 
              icon={<Users className="h-7 w-7 text-accent" />}
              title="Autonomie"
              description="Chaque utilisateur contrôle sa téléphonie, au bureau comme en déplacement, grâce à des outils dédiés."
            />
            <Card 
              icon={<Cloud className="h-7 w-7 text-blue-500" />}
              title="Flexibilité du Cloud"
              description="Déplacez vos téléphones où vous le souhaitez, votre configuration vous suit partout."
            />
            <Card 
              icon={<Smartphone className="h-7 w-7 text-indigo-500" />}
              title="Large Gamme"
              description="Un vaste choix de modèles de téléphones disponibles pour s'adapter à chaque usage."
            />
            <Card 
              icon={<Settings className="h-7 w-7 text-slate-700" />}
              title="Administration Simple"
              description="Gérez vos lignes, vos redirections et vos services via une interface intuitive."
            />
            <Card 
              icon={<TrendingDown className="h-7 w-7 text-emerald-500" />}
              title="Coûts Réduits"
              description="Réduction drastique des frais d'installation et de maintenance."
            />
          </div>
        </div>
      </section>

      {/* Optimisation et Mutualisation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <Network className="w-full h-full text-white" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                Optimisez vos coûts et vos infrastructures
              </h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  La solution Centrex ne nécessite aucun PaBX à acquérir ni à maintenir. T-LINK vous fournit une solution complète incluant les services, les terminaisons d'appels et la connexion Internet.
                </p>
                <p>
                  Vous mutualisez votre réseau informatique pour votre téléphonie et Internet sur l'ensemble de vos sites. La solution permet d'intégrer de nouveaux collaborateurs en toute simplicité.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xl">100% SÉCURISÉ</span>
                    <span className="text-sm text-white/60">Plateforme robuste</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MousePointer2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xl">AUTONOMIE</span>
                    <span className="text-sm text-white/60">Contrôle total</span>
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

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default TelephonieHebergee;
