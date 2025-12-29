import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Headphones, 
  HeartPulse, 
  Shield, 
  ArrowRight, 
  CheckCircle2,
  Settings,
  Cpu,
  Monitor,
  Users
} from "lucide-react";

const EquipementsGrid = () => {
  const categories = [
    {
      title: "PBX & Standard",
      description: "Solutions de standard téléphonique performantes (PABX/IPBX) adaptées aux besoins de votre entreprise.",
      icon: <PhoneCall className="h-8 w-8 text-primary" />,
      href: "/offres/equipements/pbx-standard",
      features: ["IPBX Physique/Cloud", "Postes numériques", "Standard automatique", "Gestion des appels"],
      gradient: "from-blue-600/10 to-cyan-500/10"
    },
    {
      title: "Centre d'Appel",
      description: "Optimisez votre relation client avec des outils de gestion d'appels avancés et de supervision en temps réel.",
      icon: <Headphones className="h-8 w-8 text-accent" />,
      href: "/offres/equipements/centre-appel",
      features: ["ACD & File d'attente", "Couplage Téléphonie-Informatique", "Statistiques temps réel", "Écoute discrète"],
      gradient: "from-teal-500/10 to-emerald-500/10"
    },
    {
      title: "Santé",
      description: "Systèmes de communication critiques pour les établissements de santé, EHPAD et cliniques.",
      icon: <HeartPulse className="h-8 w-8 text-red-500" />,
      href: "/offres/equipements/sante",
      features: ["Appel malade", "Anti-fugue", "DECT spécialisés", "Interopérabilité"],
      gradient: "from-red-500/10 to-orange-500/10"
    },
    {
      title: "Sécurité",
      description: "Protégez vos locaux et assurez la sécurité de vos collaborateurs avec nos solutions intégrées.",
      icon: <Shield className="h-8 w-8 text-blue-700" />,
      href: "/offres/equipements/securite",
      features: ["Contrôle d'accès", "Vidéoprotection IP", "Interphonie", "Alarme intrusion"],
      gradient: "from-indigo-600/10 to-blue-700/10"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-50/50 rounded-full blur-[100px] -mr-20 -mt-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/30 rounded-full blur-[100px] -ml-20 -mb-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Découvrez nos Univers Matériels
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-sans">
            T-LINK sélectionne pour vous les équipements les plus fiables et performants du marché 
            pour garantir la pérennité de vos installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                {category.title}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-[15px] font-sans">
                {category.description}
              </p>
              
              <ul className="space-y-3 mb-10 flex-grow">
                {category.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 font-medium font-sans">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={category.href}
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all font-display mt-auto"
              >
                Voir les produits
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Decorative corner element */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Settings className="h-12 w-12 text-slate-100 animate-spin-slow" />
              </div>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-24 p-8 md:p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
                Besoin d'un conseil technique ?
              </h3>
              <p className="text-white/70 text-lg mb-8 font-sans">
                Nos experts sont à votre disposition pour vous accompagner dans le choix 
                de vos équipements et définir l'architecture la plus adaptée à vos besoins.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-primary rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  Contacter un expert
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <PhoneCall className="h-5 w-5 text-accent" />
                  <span className="font-bold">04 XX XX XX XX</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Cpu className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-bold mb-2 font-display text-lg text-white">Interopérabilité</h4>
                <p className="text-sm text-white/50 font-sans">Solutions certifiées compatibles multi-constructeurs.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Monitor className="h-8 w-8 text-[#2DD4BF] mb-4" />
                <h4 className="font-bold mb-2 font-display text-lg text-white">Maintenance</h4>
                <p className="text-sm text-white/50 font-sans">Garantie matériel et support technique premium.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Users className="h-8 w-8 text-blue-500 mb-4" />
                <h4 className="font-bold mb-2 font-display text-lg text-white">Formation</h4>
                <p className="text-sm text-white/50 font-sans">Accompagnement à la prise en main des équipements.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Shield className="h-8 w-8 text-indigo-500 mb-4" />
                <h4 className="font-bold mb-2 font-display text-lg text-white">Qualité</h4>
                <p className="text-sm text-white/50 font-sans">Matériels testés et approuvés par nos laboratoires.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipementsGrid;
