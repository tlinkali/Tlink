import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Eye, 
  Cpu, 
  Network, 
  Activity, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight,
  Settings,
  Users,
  LineChart,
  HardDrive
} from "lucide-react";

export function Security() {
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
              <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
              <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">Protection Avancée</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              Sécurité <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                Informatique
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Un système de protection informatique adapté à vos besoins, au bureau comme en déplacement.
            </p>
              <div className="mt-10">
                 <Link to="/contact?subject=Sécurisation%20Réseau%20Informatique" className="inline-flex items-center gap-2 bg-[#2DD4BF] text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
                  Sécuriser mon réseau
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Section – Votre environnement est-il sécurisé ? (Asymmetric Layout) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:-rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sécurité de l'environnement" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow">
                <ShieldAlert className="h-10 w-10 text-red-500 mb-4" />
                <p className="text-slate-900 font-bold text-lg">Menaces en constante évolution</p>
                <p className="text-slate-500 text-sm">Votre réseau est-il prêt à faire face aux cyberattaques modernes ?</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                <Activity className="h-4 w-4" />
                Analyse de risque
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Votre environnement est-il <span className="text-primary italic">réellement</span> sécurisé ?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Avec la multiplication des terminaux (BYOD), le télétravail et l'adoption massive du Cloud, le périmètre de sécurité traditionnel a disparu. La complexité du réseau est devenue l'alliée des attaquants.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "Surface d'attaque étendue", desc: "Chaque nouvel appareil connecté est une porte d'entrée potentielle." },
                  { title: "Complexité croissante", desc: "La gestion fragmentée de la sécurité crée des failles invisibles." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                      <Zap className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Section – Une solution robuste et évolutive (Layered / Split-screen approach) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
             <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <pattern id="dotGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#dotGrid)" />
              </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Une solution <span className="text-[#2DD4BF]">robuste</span> et évolutive
                </h2>
                <p className="text-white/60 text-lg">
                  Notre approche repose sur le concept de Security Fabric : une protection de classe entreprise, transparente et unifiée, qui s'adapte à la croissance de votre infrastructure.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Protection Multi-niveaux", desc: "Du périmètre aux terminaux, chaque couche est verrouillée." },
                  { step: "02", title: "Architecture Unifiée", desc: "Concentrez votre gestion pour éliminer les angles morts." },
                  { step: "03", title: "Adaptation Continue", desc: "Nos systèmes apprennent et évoluent face aux nouvelles menaces." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="text-4xl font-display font-black text-white/10 group-hover:text-[#2DD4BF]/50 transition-colors uppercase italic">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1 group-hover:text-[#2DD4BF] transition-colors">{item.title}</h4>
                      <p className="text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[3rem]">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop" 
                  alt="Security Data Center" 
                  className="rounded-[2.8rem] w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-[2.8rem]" />
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl">
                      <div className="w-12 h-12 bg-[#2DD4BF] rounded-full flex items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white/70 uppercase tracking-widest">Certification</div>
                        <div className="text-xl font-bold">Protection Entreprise</div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[120px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Section – Visibilité automatisée & protection intelligente (Dynamic visual composition) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-6 text-primary font-bold text-sm">
                <Eye className="h-4 w-4" />
                VISIBILITÉ TOTALE
             </div>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
               Visibilité automatisée & <span className="text-primary underline decoration-[#2DD4BF] decoration-4 underline-offset-8">protection intelligente</span>
             </h2>
             <p className="text-slate-600 text-lg">
               Maîtrisez ce qui se passe sur votre réseau en temps réel. Identifiez chaque application, chaque objet et chaque utilisateur.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="md:col-span-2">
               <div className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                    alt="Network Visibility" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 max-w-md">
                     <h3 className="text-3xl font-bold text-white mb-4">Cartographie réseau dynamique</h3>
                     <p className="text-white/80">Une vue exhaustive de votre écosystème en temps réel pour une prise de décision éclairée.</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-col gap-8">
               {[
                 { icon: <Cpu />, title: "IA & IoT Security", desc: "Protection automatisée des objets connectés via IA." },
                 { icon: <HardDrive />, title: "Apps Cloud", desc: "Visibilité sur les applications SaaS utilisées." }
               ].map((item, i) => (
                  <div key={i} className="flex-1 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-xl transition-all group">
                     <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#2DD4BF] transition-colors">
                        {React.cloneElement(item.icon as React.ReactElement, { className: "h-7 w-7 text-primary group-hover:text-[#2DD4BF] transition-colors" })}
                     </div>
                     <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                     <p className="text-slate-600">{item.desc}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Section – Contrôle autonome et interface unifiée (Dashboard-style layout) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
             <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-4 p-12 lg:p-20 bg-slate-900 text-white">
                   <h2 className="text-3xl font-display font-bold mb-8">Contrôle autonome & interface unifiée</h2>
                   <div className="space-y-8">
                      {[
                        { title: "Accès Admin Dédié", icon: <Users /> },
                        { title: "Blacklist / Whitelist", icon: <ShieldAlert /> },
                        { title: "Contrôle Bande Passante", icon: <LineChart /> },
                        { title: "Gestion Hotspot", icon: <Network /> }
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/70 hover:text-[#2DD4BF] transition-colors cursor-default group">
                           <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#2DD4BF]/10 transition-colors">
                              {React.cloneElement(feature.icon, { className: "h-5 w-5" })}
                           </div>
                           <span className="font-bold">{feature.title}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="lg:col-span-8 p-12 lg:p-20 relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Settings className="h-64 w-64 rotate-12" />
                  </div>
                  <div className="max-w-2xl relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Le cerveau de votre sécurité réseau</h3>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                      Notre interface unifiée vous permet d'administrer l'intégralité de vos règles de sécurité depuis un console de gestion simplifiée. Prenez le contrôle total de vos flux sortants et entrants.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="border-l-4 border-primary pl-6">
                        <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pilotage Autonome</div>
                      </div>
                      <div className="border-l-4 border-accent pl-6">
                        <div className="text-4xl font-bold text-slate-900 mb-2">Realtime</div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Administration Directe</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 bg-slate-900/5 rounded-3xl p-8 border border-slate-100 flex items-center justify-between gap-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                           <Settings className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                           <p className="text-slate-900 font-bold">Besoin d'aide pour la config ?</p>
                           <p className="text-slate-500 text-sm">Nos ingénieurs vous assistent 24/7</p>
                        </div>
                     </div>
                       <Link to="/contact?subject=Configuration%20Sécurité%20Réseau" className="p-4 bg-white text-primary rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm border border-slate-100">
                          <ArrowUpRight className="h-5 w-5" />
                       </Link>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Final Call to Action (Consistent with Design System) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#0F172A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <pattern id="gridLarge" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#gridLarge)" />
              </svg>
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Faites évoluer vos règles de sécurité en même temps que <span className="text-[#2DD4BF]">votre entreprise</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Ne laissez pas votre croissance devenir une vulnérabilité. Adoptez une protection intelligente qui grandit avec vous.
              </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/contact?subject=Expert%20Sécurité%20Informatique" className="bg-[#2DD4BF] text-[#0F172A] px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                    Parler à un expert sécurité
                  </Link>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Audit de sécurité offert</div>
                    <div className="font-bold">Contactez Architecte Réseau</div>
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

export default Security;
