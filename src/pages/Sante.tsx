import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Wifi, 
  PhoneCall, 
  HeartPulse, 
  Activity, 
  ShieldPlus, 
  ArrowUpRight,
  UserCheck,
  Zap,
  Network,
  Clock,
  MapPin,
  Lock
} from "lucide-react";

export function Sante() {
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
              <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">Secteur Médical & Social</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              Offre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                Santé
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Une offre dédiée aux professionnels de santé pour les accompagner au quotidien dans leur transformation digitale.
            </p>
              <div className="mt-10">
                 <Link to="/contact?subject=Expertise%20Télécom%20Santé" className="inline-flex items-center gap-2 bg-[#2DD4BF] text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
                  Contacter un expert santé
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Section – Gestion de vos flux de communication (Innovative Editorial Layout) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-16">
            <div className="w-full lg:w-5/12 space-y-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                <Network className="h-4 w-4" />
                Intégration Réseau
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Gestion intelligente de vos <span className="text-primary italic">flux de communication</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                L'établissement de santé digital n'est plus une option technique mais une nécessité humaine. Nous assurons le cycle de vie complet de vos services innovants, de l'intégration multimédia à l'exploitation quotidienne.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-primary mb-1">360°</div>
                  <p className="text-sm text-slate-500 font-medium italic">Accompagnement multimédia</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl text-white">
                  <div className="text-3xl font-bold text-[#2DD4BF] mb-1">24/7</div>
                  <p className="text-sm text-white/60 font-medium italic">Exploitation continue</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 relative min-h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
              <div className="grid grid-cols-12 grid-rows-6 h-full gap-4 relative z-10">
                <div className="col-span-8 row-span-4 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173599211d0?q=80&w=2070&auto=format&fit=crop" 
                    alt="Healthcare communication" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-4 row-span-3 col-start-9 row-start-2 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" 
                    alt="Digital Health" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-12 row-span-2 row-start-5 bg-gradient-to-r from-primary to-accent rounded-[2rem] p-8 flex items-center justify-between text-white shadow-lg">
                  <p className="text-xl font-medium max-w-lg italic">"Construire ensemble un monde en meilleure santé grâce au numérique."</p>
                  <Activity className="h-12 w-12 text-white/20 hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Section – WiFi Métier (Layered / Asymmetric Approach) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0F172A] hidden lg:block" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-3/5 lg:pr-20 pb-16 lg:pb-0">
               <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 text-primary font-bold text-sm">
                  <Wifi className="h-4 w-4" />
                  WIFI MULTISERVICE
               </div>
               <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                 Un écosystème WiFi haute performance <span className="text-primary italic">orienté médical</span>
               </h2>
               <div className="space-y-6">
                 {[
                   { title: "Indépendance & Sécurité", desc: "Bénéficiez de plusieurs accès indépendants, sécurisés et manageables sur un même support physique." },
                   { title: "Mobilité du Personnel", desc: "Logiciels de gestion connectés et outils cloud pour une réactivité maximale des soignants." },
                   { title: "Expérience Visiteur", desc: "Un accès invité performant pour le confort des patients et de leurs proches." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-transform hover:translate-x-2">
                     <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                       <Zap className="h-6 w-6 text-accent" />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                       <p className="text-slate-600 italic leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="relative p-12 lg:p-0">
                <div className="bg-white p-4 rounded-[3rem] shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
                    alt="Medical WiFi" 
                    className="rounded-[2.5rem] w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent rounded-[2.5rem]" />
                  <div className="absolute bottom-10 left-10 p-8 border border-white/20 backdrop-blur-md rounded-2xl text-white">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#2DD4BF] mb-2">Opérateur Réseau</p>
                    <p className="text-2xl font-bold">Solutions Connectées Cloud</p>
                  </div>
                </div>
                {/* Decorative dots for layered look */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Section – L’évolution de vos usages (Modular Flow) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
               L’évolution de <span className="text-primary underline decoration-accent decoration-4 underline-offset-8">vos usages</span>
             </h2>
             <p className="text-slate-600 text-lg">
               La convergence des services administratifs et médicaux est le cœur de la modernisation des établissements de santé.
             </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { 
                icon: <PhoneCall />, 
                title: "Convergence", 
                desc: "Interconnexion fluide entre les services administratifs et médicaux.",
                color: "bg-slate-900",
                textColor: "text-white"
              },
              { 
                icon: <Activity />, 
                title: "Continuité", 
                desc: "Garantie d'une qualité de service sans interruption 24h/24.",
                color: "bg-primary",
                textColor: "text-white"
              },
              { 
                icon: <HeartPulse />, 
                title: "Qualité", 
                desc: "Optimisation de la prise en charge patient via des outils précis.",
                color: "bg-accent",
                textColor: "text-[#0F172A]"
              },
              { 
                icon: <Zap />, 
                title: "Agilité", 
                desc: "Adéquation totale avec les nouveaux logiciels de gestion cloud.",
                color: "bg-slate-50",
                textColor: "text-slate-900"
              }
            ].map((box, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-4 hover:shadow-2xl ${box.color} ${box.textColor}`}>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  {React.cloneElement(box.icon, { className: "h-8 w-8" })}
                </div>
                <h4 className="text-2xl font-bold mb-4">{box.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed font-medium italic">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Section – Un matériel adapté et dédié (Unique Visual Layout) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider mb-6">
                <Stethoscope className="h-4 w-4" />
                Matériel Spécialisé
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
                La technologie au service de <span className="text-[#2DD4BF]">l'efficacité soignante</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Nos solutions se concentrent sur l'essentiel : la communication patient-soignant. En réduisant les déplacements inutiles et en priorisant les alertes, nous redonnons du temps de soin qualitatif aux équipes médicales.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                  <Clock className="h-8 w-8 text-[#2DD4BF] mb-4" />
                  <h4 className="text-xl font-bold mb-2">Gain de temps</h4>
                  <p className="text-white/40 text-sm italic">Optimisation des circuits de déplacement des soignants.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                  <UserCheck className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Réactivité</h4>
                  <p className="text-white/40 text-sm italic">Vérification de l'appel prioritaire en situation de mobilité.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/20 blur-[100px] scale-75 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl border border-white/10">
                     <img 
                       src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                       alt="Soignant mobile" 
                       className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                     />
                     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 p-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                              <Activity className="h-6 w-6 text-slate-900" />
                            </div>
                            <div>
                               <p className="font-bold">Priorisation intelligente</p>
                               <p className="text-white/50 text-xs">Gestion des appels et transferts mobiles</p>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Sub-section: Fugue Prevention (Unique Dashboard Layout) */}
          <div className="bg-white/5 rounded-[4rem] border border-white/10 p-8 lg:p-16 backdrop-blur-xl">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative h-[400px]">
                   <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 rounded-3xl border border-white/5 animate-pulse-slow overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                           <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.1" />
                           <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.1" />
                           <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.1" fill="none" />
                        </svg>
                      </div>
                      {/* Interactive elements simulation */}
                      <div className="absolute top-1/2 left-1/3 flex flex-col items-center">
                         <div className="w-3 h-3 bg-accent rounded-full animate-ping" />
                         <div className="mt-2 px-2 py-1 bg-accent/20 border border-accent/40 rounded text-[10px] uppercase font-bold text-accent">Zone B - Patient 12</div>
                      </div>
                      <div className="absolute top-1/4 left-2/3 flex flex-col items-center">
                         <div className="w-3 h-3 bg-primary rounded-full" />
                         <div className="mt-2 px-2 py-1 bg-primary/20 border border-primary/40 rounded text-[10px] uppercase font-bold text-primary text-nowrap">Zone C - Porte Verrouillée</div>
                      </div>
                   </div>
                   <div className="absolute -bottom-6 -right-6 bg-[#0F172A] p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[200px]">
                      <ShieldPlus className="h-8 w-8 text-accent mb-3" />
                      <p className="text-xs font-medium text-white/70 italic">Interface de localisation temps réel</p>
                   </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                   <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 text-accent font-bold text-xs">
                      <Lock className="h-3 w-3" />
                      SÉCURITÉ RÉSIDENTS
                   </div>
                   <h3 className="text-3xl font-display font-bold">Prévention des fugues <span className="text-[#2DD4BF]">automatisée</span></h3>
                   <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                         <div className="w-2 h-10 bg-accent rounded-full shrink-0 mt-1" />
                         <div>
                            <p className="font-bold text-xl mb-1">Bracelets & Médaillons</p>
                            <p className="text-white/50 italic">Des dispositifs discrets et légers envoyant automatiquement la localisation précise du résident.</p>
                         </div>
                      </div>
                      <div className="flex gap-4 items-start">
                         <div className="w-2 h-10 bg-primary rounded-full shrink-0 mt-1" />
                         <div>
                            <p className="font-bold text-xl mb-1">Verrouillage Intelligent</p>
                            <p className="text-white/50 italic">Blocage automatique des portes et fenêtres dès la détection d'un résident à risque à proximité.</p>
                         </div>
                      </div>
                      <div className="flex gap-4 items-start">
                         <div className="w-2 h-10 bg-white/20 rounded-full shrink-0 mt-1" />
                         <div>
                            <p className="font-bold text-xl mb-1">Alerte Immédiate</p>
                            <p className="text-white/50 italic">Notification instantanée sur les terminaux mobiles du personnel en service.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Final Call to Action (Consistent Header) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="relative inline-block mb-12">
               <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 hover:opacity-100 transition-opacity" />
               <img 
                 src="https://images.unsplash.com/photo-1579153173746-8354fe97376e?q=80&w=2070&auto=format&fit=crop" 
                 alt="Contact Sante" 
                 className="w-32 h-32 rounded-full object-cover border-4 border-slate-50 shadow-xl relative z-10"
               />
               <div className="absolute -bottom-2 -right-2 bg-accent p-3 rounded-full shadow-lg z-20">
                 <HeartPulse className="h-6 w-6 text-slate-900" />
               </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 mb-8 leading-[1.1]">
              Des solutions connectées pour un monde médical <br />
              <span className="text-primary italic">plus efficace et plus humain</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                 <Link 
                   to="/contact?subject=Contact%20Expert%20Santé" 
                   className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                 >
                 <span className="relative z-10">Parler à un expert santé</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               </Link>
               
               <div className="flex items-center gap-4 text-slate-400 group cursor-default">
                 <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                   <Activity className="h-5 w-5 text-primary" />
                 </div>
                 <div className="text-left">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Audit Secteur Santé</p>
                    <p className="text-slate-900 font-bold">Solutions Architecte Réseau</p>
                 </div>
               </div>
            </div>
        </div>
        
        {/* Background decorative images with low opacity */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5 pointer-events-none grayscale translate-x-[-20%] translate-y-[-20%]">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" alt="bg" className="rounded-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none grayscale translate-x-[20%] translate-y-[20%]">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="bg" className="rounded-full" />
        </div>
      </section>
    </Layout>
  );
}

export default Sante;
