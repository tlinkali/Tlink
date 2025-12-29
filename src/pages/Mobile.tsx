import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Zap, 
  Globe2, 
  BarChart3, 
  Repeat, 
  Users2, 
  Network, 
  ShieldCheck, 
  ArrowUpRight,
  MonitorSmartphone,
  CheckCircle2,
  Signal,
  CreditCard,
  MessageSquare,
  Sparkles,
  Layers,
  PhoneCall,
  Activity
} from "lucide-react";

export function Mobile() {
  return (
    <Layout>
      {/* 1️⃣ Hero Section (STRICT REUSE) */}
      <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 overflow-hidden bg-deep-navy -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
              <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
              <span className="text-white font-semibold text-xs tracking-widest uppercase">Offre Mobile Entreprise</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-black text-white mb-6 leading-[1.1]">
              Offre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6]">
                Mobile
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
              Mettez la mobilité au cœur de la collaboration avec des solutions connectées pensées pour l'agilité et la performance des entreprises modernes.
            </p>
              <div className="mt-10 flex flex-wrap gap-6">
                 <Link to="/contact?subject=Expertise%20Mobile%20Entreprise" className="inline-flex items-center gap-3 bg-[#2DD4BF] text-[#0F172A] px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-[#2DD4BF]/20 active:scale-95">
                  Consulter un expert mobile
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Section – La mobilité au service de votre productivité (Dynamic editorial layout) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <div className="text-[#2DD4BF] font-black text-sm tracking-[0.3em] uppercase">Mobilité & Performance</div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#0F172A] leading-tight">
                  La productivité <br />
                  <span className="text-[#2563EB] italic">où que vous soyez</span>
                </h2>
              </div>
              
              <div className="prose prose-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Nos solutions de téléphonie mobile clé en main sont conçues pour briser les barrières physiques de votre bureau. Nous assurons une continuité d'activité totale grâce à un déploiement rapide et une assistance sur mesure.
                </p>
                <p>
                  Maîtrisez vos coûts en temps réel grâce à notre plateforme de gestion centralisée, offrant une visibilité granulaire sur l'ensemble de votre parc mobile.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { title: "Déploiement Agile", desc: "Lignes prêtes à l'emploi pour une mise en service immédiate de vos collaborateurs.", icon: <Zap className="text-[#2DD4BF]" /> },
                  { title: "Gestion 360°", desc: "Pilotage centralisé de votre flotte pour une optimisation constante de vos budgets.", icon: <BarChart3 className="text-[#2563EB]" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#2DD4BF]/30 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative pt-12">
               <div className="relative z-10 grid grid-cols-2 gap-6 translate-x-4">
                  <div className="space-y-6">
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl h-80 relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                        alt="Meeting collaboration" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent flex items-end p-8">
                        <p className="text-white font-bold italic">Collaboration en transit</p>
                      </div>
                    </div>
                    <div className="bg-[#0F172A] p-10 rounded-[3rem] text-white shadow-2xl border border-white/5">
                      <div className="text-4xl font-black text-[#2DD4BF] mb-2">99.9%</div>
                      <p className="text-sm text-white/60 font-medium">Disponibilité du réseau garantie pour vos communications vitales.</p>
                    </div>
                  </div>
                  <div className="space-y-6 -translate-y-12">
                    <div className="bg-[#2563EB] p-10 rounded-[3rem] text-white shadow-2xl flex flex-col justify-between h-64">
                      <Layers className="h-10 w-10 text-white/30" />
                      <p className="text-xl font-extrabold leading-tight">Infrastructure Cloud Hybride</p>
                    </div>
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl h-96 relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1557804483-ef3ae72eba50?q=80&w=2074&auto=format&fit=crop" 
                        alt="Office Professional" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-[#2DD4BF]/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
               </div>
               {/* Background decoration */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#2563EB]/5 blur-[120px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Section – À chacun son forfait (Innovative layouts) */}
      <section className="py-32 bg-[#0F172A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2563EB]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
              Des forfaits calibrés <br />
              <span className="text-[#2DD4BF]">pour chaque profil</span>
            </h2>
            <p className="text-xl text-white/60 italic leading-relaxed">
              Nous cassons les modèles standards pour vous proposer des offres segmentées, du paiement à l'usage aux forfaits illimités internationaux.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "L'Essentiel Pro",
                profile: "Collaborateurs Sédentaires",
                features: ["Paiement à l'usage réel", "Voix HD inclusive", "Accès Data 4G sécurisé"],
                icon: <Smartphone className="h-8 w-8 text-[#2DD4BF]" />,
                className: "bg-white/5 border-white/10"
              },
              {
                title: "L'Illimité Business",
                profile: "Équipes Mobiles",
                features: ["Appels & Data illimités", "Réseau Premium N°1", "Convergence Fixe-Mobile"],
                icon: <Signal className="h-8 w-8 text-[#2563EB]" />,
                className: "bg-[#2563EB] border-[#2563EB] shadow-2xl scale-105 z-10",
                isHighlight: true
              },
              {
                title: "L'International Connect",
                profile: "Voyageurs Affaires",
                features: ["Roaming Europe inclus", "Options Monde activables", "Support VIP 24/7"],
                icon: <Globe2 className="h-8 w-8 text-[#2DD4BF]" />,
                className: "bg-white/5 border-white/10"
              }
            ].map((card, i) => (
              <div key={i} className={`p-12 rounded-[4rem] border transition-all hover:-translate-y-4 ${card.className}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${card.isHighlight ? 'bg-white/20' : 'bg-white/5'}`}>
                  {card.icon}
                </div>
                <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3 ${card.isHighlight ? 'text-white/70' : 'text-[#2DD4BF]'}`}>
                  {card.profile}
                </p>
                <h3 className="text-3xl font-extrabold mb-8">{card.title}</h3>
                <ul className="space-y-6 mb-12">
                  {card.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-4 text-sm font-medium italic">
                      <div className={`w-1.5 h-1.5 rounded-full ${card.isHighlight ? 'bg-white' : 'bg-[#2DD4BF]'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className={`h-px w-full ${card.isHighlight ? 'bg-white/20' : 'bg-white/10'} mb-8`} />
                <p className={`text-[11px] font-bold uppercase tracking-widest ${card.isHighlight ? 'text-white/60' : 'text-white/30'}`}>
                  Compatibilité Unified Comms
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Section – Changez d’opérateur sans contrainte (Visual storytelling layout) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
               <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#2DD4BF] to-[#2563EB] rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100">
                    <div className="p-12 md:p-16">
                      <div className="flex justify-between items-start mb-12">
                        <div className="space-y-2">
                          <p className="text-4xl font-black text-[#0F172A] tracking-tighter">Portabilité</p>
                          <p className="text-[#2DD4BF] font-bold italic">Continuité garantie</p>
                        </div>
                        <Repeat className="h-10 w-10 text-slate-200" />
                      </div>
                      <div className="space-y-8">
                        {[
                          { step: "01", text: "Audit de votre parc actuel", color: "bg-[#2563EB]" },
                          { step: "02", text: "Gestion de la portabilité RIO", color: "bg-[#2DD4BF]" },
                          { step: "03", text: "Activation sans coupure", color: "bg-[#0F172A]" }
                        ].map((s, i) => (
                          <div key={i} className="flex items-center gap-6">
                            <span className={`w-10 h-10 rounded-full ${s.color} text-white flex items-center justify-center font-black text-xs shrink-0`}>
                              {s.step}
                            </span>
                            <span className="text-slate-700 font-bold text-lg italic">{s.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#0F172A] p-12 flex items-center justify-between text-white">
                      <div>
                        <p className="text-2xl font-black text-[#2DD4BF]">-25%</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Économie Moyenne</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-black text-white">Zéro</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Interruption de Service</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2DD4BF]/10 rounded-full text-[#2DD4BF] font-black text-xs tracking-widest uppercase">
                  <Sparkles className="h-4 w-4" /> Migration Transparente
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#0F172A] leading-tight">
                  Changez d'opérateur <br />
                  <span className="text-[#2563EB]">en toute liberté</span>
                </h2>
                <p className="text-xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#2DD4BF] pl-8">
                  Ne laissez pas la complexité administrative freiner vos économies. Nous pilotons l'intégralité du transfert pour une transition invisible.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#2DD4BF]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-xl">Forfaits Uniformisés</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic">Simplifiez la lecture de votre facturation avec des offres claires et constantes.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#2563EB]">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-xl">Réseau Premium</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic">Bénéficiez de la meilleure couverture nationale sur les infrastructures N°1 en France.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Section – Des forfaits qui s’adaptent à votre consommation (Modular layout) */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-black text-[#0F172A]">
              La modularité <span className="text-[#2DD4BF]">au centre</span> de l'usage
            </h2>
            <p className="text-xl text-slate-500 font-medium italic">
              Parce que chaque collaborateur a des besoins différents, nos forfaits se déclinent en profils d'usage ajustables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                label: "Communication", 
                title: "Voix Illimitée", 
                desc: "Parlez sans contrainte dans toute la Zone 1. Idéal pour les équipes commerciales.", 
                icon: <PhoneCall className="h-4 w-4" />,
                height: "h-auto"
              },
              { 
                label: "Mobilité Data", 
                title: "Data 4G/5G+", 
                desc: "Des enveloppes de 1Go à l'illimité pour vos besoins Datavores.", 
                icon: <Signal className="h-4 w-4" />,
                bg: "bg-[#0F172A]",
                textColor: "text-white",
                accentColor: "text-[#2DD4BF]",
                height: "md:translate-y-8"
              },
              { 
                label: "Roaming", 
                title: "Sans Roaming Europe", 
                desc: "Utilisez votre forfait en Europe comme si vous étiez au bureau, sans surprise.", 
                icon: <Globe2 className="h-4 w-4" />,
                height: "h-auto"
              },
              { 
                label: "Service", 
                title: "Usage à la carte", 
                desc: "Ajustez vos options (MMS, MVV, Tethering) selon les besoins réels de chaque ligne.", 
                icon: <MessageSquare className="h-4 w-4" />,
                bg: "bg-[#2563EB]",
                textColor: "text-white",
                accentColor: "text-white/40",
                height: "md:translate-y-8"
              }
            ].map((box, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[3.5rem] border border-slate-100 shadow-sm transition-all hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between ${box.bg || 'bg-slate-50'} ${box.textColor || 'text-[#0F172A]'} ${box.height}`}
              >
                <div>
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-10 ${box.bg ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                    <div className={box.accentColor || 'text-[#2563EB]'}>{box.icon}</div>
                   </div>
                   <p className={`text-[9px] font-black uppercase tracking-[0.3em] mb-4 ${box.accentColor || 'text-slate-400'}`}>
                    Usage {box.label}
                   </p>
                   <h4 className="text-2xl font-black mb-6">{box.title}</h4>
                </div>
                <p className={`text-sm leading-relaxed italic ${box.textColor === 'text-white' ? 'text-white/60' : 'text-slate-500'}`}>
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-32 max-w-5xl mx-auto">
            <div className="bg-[#0F172A] p-10 md:p-16 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/20 blur-[100px] -z-1" />
               <div className="flex gap-8 items-center">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <CreditCard className="h-10 w-10 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <h5 className="text-2xl font-black mb-2">Transparence Totale</h5>
                    <p className="text-white/50 italic leading-relaxed">Facturation simplifiée et uniformisée. Fini les frais cachés et les hors-forfaits imprévus.</p>
                  </div>
               </div>
                 <Link to="/contact?subject=Analyse%20Facture%20Mobile" className="bg-white text-[#0F172A] px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl whitespace-nowrap active:scale-95">
                    Analyser ma facture
                 </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Final Call to Action */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative rounded-[4rem] overflow-hidden bg-[#0F172A] group">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Infrastructure network" 
                className="w-full h-full object-cover opacity-20 scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A]/90 to-transparent" />
            </div>

            <div className="relative z-10 p-12 md:p-24 lg:p-32 flex flex-col lg:flex-row items-center justify-between gap-16">
               <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-10 leading-[1.1]">
                    Une offre mobile <br />
                    <span className="text-[#2DD4BF]">pensée pour la performance</span>
                  </h2>
                  <p className="text-xl text-white/70 italic leading-relaxed mb-12">
                    Prenez contact avec un expert pour auditer vos besoins et bâtir ensemble une offre sur mesure, adaptée à la réalité de votre entreprise.
                  </p>
                    <div className="flex flex-wrap gap-10">
                      <Link to="/contact?subject=Contact%20Expert%20Mobile" className="bg-[#2DD4BF] text-[#0F172A] px-12 py-6 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-[#2DD4BF]/20 active:scale-95">
                        Contacter un expert mobile
                      </Link>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-[#2DD4BF]" />
                      </div>
                      <div className="text-left">
                         <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Architecte Réseau</p>
                         <p className="text-white font-bold italic">Solutions Certifiées</p>
                      </div>
                    </div>
                  </div>
               </div>
               
               <div className="relative hidden lg:block">
                  <div className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center relative">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2DD4BF]/20 to-transparent blur-3xl animate-pulse" />
                     <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
                        <MonitorSmartphone className="h-24 w-24 text-white/10 animate-float" />
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

export default Mobile;
