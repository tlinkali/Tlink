import React from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Network, 
  Cloud, 
  ShieldCheck, 
  Users, 
  Cpu, 
  PhoneCall, 
  FileText,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export const SolutionFibre = () => {
  const solutions = [
    {
      title: "LE CLOUD",
      icon: <Cloud className="h-8 w-8 text-accent-cyan" />,
      description: "Sécurisez efficacement vos données informatiques sur des serveurs en datacenter pour des possibilités de sauvegarde inégalées."
    },
    {
      title: "VPN",
      icon: <Network className="h-8 w-8 text-accent-cyan" />,
      description: "Facilitez le travail collaboratif et le raccordement de vos sites distants pour améliorer la productivité de vos équipes."
    },
    {
      title: "COM UNIFIEE",
      icon: <Users className="h-8 w-8 text-accent-cyan" />,
      description: "Visioconférence, messagerie et partage de documents sur tous vos supports pour optimiser vos déplacements."
    },
    {
      title: "VIRTUALISATION MACHINE",
      icon: <Cpu className="h-8 w-8 text-accent-cyan" />,
      description: "Logiciels métiers, CRM et serveurs PBX externalisés et accessibles via Internet pour une flexibilité totale."
    },
    {
      title: "TELEPHONIE IP",
      icon: <PhoneCall className="h-8 w-8 text-accent-cyan" />,
      description: "Passez au tout IP et réalisez des économies d'échelle en mutualisant votre lien fibre pour la data et la voix."
    },
    {
      title: "DEMATERIALISATION",
      icon: <FileText className="h-8 w-8 text-accent-cyan" />,
      description: "Fluidifiez les démarches de vos collaborateurs avec des flux sauvegardés sur serveurs distants."
    }
  ];

  return (
    <Layout>
      {/* Dynamic Hero Section */}
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
              <span className="text-white/90 text-[14px] font-semibold tracking-wider uppercase">Solutions Connectivité</span>
            </div>
            
            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              La Fibre Optique <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-blue">
                Le Cordon Ombilical de l'Entreprise
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Technologie de connexion par excellence, la fibre est devenue le lien vital par lequel transitent tous vos flux : téléphonie, messagerie, cloud et dématérialisation.
            </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact?subject=Étude%20Fibre%20Optique" className="px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-primary-blue/20 flex items-center gap-2">
                  Demander une étude
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-semibold transition-all hover:-translate-y-1">
                  Voir les usages
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* Feature Section with New Design */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-display font-bold text-deep-navy mb-6">
                Bien plus que de la <span className="text-primary-blue font-extrabold">vitesse</span>
              </h2>
              <div className="w-20 h-1.5 bg-accent-cyan rounded-full mb-8" />
              <p className="text-lg text-muted-gray leading-relaxed mb-8">
                Au-delà de la rapidité des échanges, la fibre permet à votre entreprise d'adopter des technologies de pointe qui transforment votre productivité au quotidien. C'est l'épine dorsale de votre transformation numérique.
              </p>
              
              <div className="space-y-4">
                {[
                  "Garantie de continuité de service",
                  "Mutualisation data et voix pour économies d'échelle",
                  "Support technique dédié aux entreprises",
                  "Débits symétriques et garantis"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent-cyan" />
                    <span className="text-deep-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-primary-blue mb-2">99.9%</div>
                  <div className="text-sm font-bold text-deep-navy uppercase tracking-widest">Disponibilité</div>
                </div>
                <div className="bg-deep-navy p-8 rounded-[2rem] text-white shadow-xl">
                  <Network className="h-10 w-10 text-accent-cyan mb-4" />
                  <div className="text-xl font-bold">Flux Unifiés</div>
                  <div className="text-sm text-white/50 mt-1">Data + Voix</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-accent-cyan p-8 rounded-[2rem] text-deep-navy shadow-xl">
                  <ShieldCheck className="h-10 w-10 text-deep-navy mb-4" />
                  <div className="text-xl font-bold">Sécurisation</div>
                  <div className="text-sm text-deep-navy/50 mt-1">Protection Max</div>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="text-4xl font-bold text-primary-blue mb-2">24/7</div>
                  <div className="text-sm font-bold text-deep-navy uppercase tracking-widest">Supervision</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary-blue/5 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-deep-navy mb-4">{item.title}</h3>
                <p className="text-muted-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
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
                Prêt à connecter votre entreprise au futur ?
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Découvrez comment nos solutions fibre peuvent booster votre activité.
              </p>
                <Link to="/contact?subject=Devis%20Fibre%20Optique" className="inline-flex items-center gap-3 px-10 py-5 bg-deep-navy text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                  Demander un devis gratuit
                  <ArrowRight className="h-5 w-5 text-accent-cyan" />
                </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionFibre;
