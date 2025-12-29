import React from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Wifi, 
  Network, 
  Mic2, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  LayoutDashboard
} from "lucide-react";
import { Link } from "react-router-dom";

export const Solutions = () => {
  const mainSolutions = [
    {
      title: "Fibre Optique",
      icon: <Network className="h-10 w-10 text-accent-cyan" />,
      description: "L'épine dorsale de votre transformation digitale. Une infrastructure internet robuste, sécurisée et évolutive capable d'absorber la hausse spectaculaire des usages.",
      link: "/solutions/fibre",
      features: ["Haut débit garanti", "Flux unifiés", "Sécurité maximale"]
    },
    {
      title: "Solutions Wifi",
      icon: <Wifi className="h-10 w-10 text-accent-cyan" />,
      description: "Un réseau sans fil stable, massif et sécurisé. Construit sur mesure selon vos usages, que vous soyez dans la santé, l'industrie ou les services.",
      link: "/solutions/wifi",
      features: ["Couverture totale", "Gestion des accès", "Stabilité accrue"]
    },
    {
      title: "Studio Musical",
      icon: <Mic2 className="h-10 w-10 text-accent-cyan" />,
      description: "Messages d'accueils téléphoniques 100% personnalisés. Notre équipe vous accompagne dans le choix rédactionnel et musical pour une image performante.",
      link: "/solutions/studio-musical",
      features: ["Identité sonore", "Qualité studio", "Conseils experts"]
    },
    {
      title: "Extranet Client",
      icon: <Globe className="h-10 w-10 text-accent-cyan" />,
      description: "Une interface de gestion intuitive et personnalisable. Un espace d'échange orienté client pour une gestion autonome et professionnelle de vos offres.",
      link: "/t-link",
      features: ["Gestion autonome", "Base de données", "Interface intuitive"]
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
              <Sparkles className="h-4 w-4 text-accent-cyan" />
              <span className="text-white/90 text-[14px] font-semibold tracking-wider uppercase">Nos Expertises</span>
            </div>
            
            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Des Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-blue">
                Sur Mesure pour votre Réseau
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              L'accès à un service de gestion autonome et des solutions techniques à forte valeur ajoutée pour vous accompagner dans votre transformation digitale.
            </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact?subject=Projet%20Solutions%20Réseau" className="px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-primary-blue/20 flex items-center gap-2">
                  Démarrer votre projet
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-deep-navy mb-6">
              L'expertise technique au service de votre <span className="text-primary-blue">croissance</span>
            </h2>
            <p className="text-lg text-muted-gray leading-relaxed">
              Les enjeux de connectivité se concentrent sur la gestion et l'optimisation de votre réseau, de vos outils de communication et des solutions techniques innovantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {mainSolutions.map((solution, index) => (
              <div key={index} className="group relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  {React.cloneElement(solution.icon as React.ReactElement, { className: "w-32 h-32" })}
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-deep-navy mb-4">{solution.title}</h3>
                  <p className="text-muted-gray leading-relaxed mb-8 text-lg">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent-cyan" />
                        <span className="text-deep-navy font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={solution.link}
                    className="inline-flex items-center gap-2 text-primary-blue font-bold hover:gap-4 transition-all"
                  >
                    En savoir plus <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="py-24 bg-deep-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-2">
                <Shield className="h-8 w-8 text-accent-cyan" />
              </div>
              <h4 className="text-4xl font-bold">100%</h4>
              <p className="text-white/60 font-medium">Sécurisé & Robuste</p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-2">
                <Zap className="h-8 w-8 text-accent-cyan" />
              </div>
              <h4 className="text-4xl font-bold">Performance</h4>
              <p className="text-white/60 font-medium">Innovation Continue</p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-2">
                <LayoutDashboard className="h-8 w-8 text-accent-cyan" />
              </div>
              <h4 className="text-4xl font-bold">Autonomie</h4>
              <p className="text-white/60 font-medium">Gestion Intuitive</p>
            </div>
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
                Prêt à transformer votre infrastructure ?
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Nos experts vous accompagnent dans la définition et la mise en place de vos solutions connectées.
              </p>
                <Link to="/contact?subject=Étude%20Solutions%20Personnalisée" className="inline-flex items-center gap-3 px-10 py-5 bg-deep-navy text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                  Demander une étude personnalisée
                  <ArrowRight className="h-5 w-5 text-accent-cyan" />
                </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
