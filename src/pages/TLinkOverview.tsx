import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { 
  Building2, 
  Users2, 
  Target, 
  Handshake, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  ShieldCheck,
  Rocket
} from "lucide-react";

import heroImg from "@/assets/telecom-illustration.png";

const sections = [
  {
    title: "Notre Société",
    description: "Découvrez l'histoire de T-Link, notre vision et les valeurs qui animent nos experts au quotidien.",
    icon: <Building2 className="h-8 w-8 text-primary" />,
    href: "/t-link/societe",
    features: ["Expertise reconnue", "Proximité locale", "Indépendance"]
  },
  {
    title: "Nos Partenaires",
    description: "Nous collaborons avec les leaders technologiques pour vous offrir les solutions les plus performantes du marché.",
    icon: <Handshake className="h-8 w-8 text-primary" />,
    href: "/t-link/partenaires",
    features: ["Écosystème robuste", "Accompagnement", "Synergie"]
  },
  {
    title: "Nos Engagements",
    description: "La satisfaction client est au cœur de notre démarche. Découvrez nos garanties de service et de qualité.",
    icon: <Target className="h-8 w-8 text-primary" />,
    href: "/t-link/engagements",
    features: ["GTR garantie", "Support dédié", "Souveraineté"]
  }
];

export function TLinkOverview() {
  return (
    <Layout>
      <SEO 
        title="À propos de T-Link" 
        description="Découvrez T-Link Network Operateur, votre partenaire technologique pour une communication fluide et humaine. Nos valeurs, nos engagements et nos partenaires."
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center -mt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/85 to-[#2563EB]/40 z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">À propos de nous</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              L'Opérateur Qui <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#2563EB]">
                Réinvente le Lien
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Bien plus qu'un simple fournisseur, T-LINK est votre partenaire technologique pour une communication fluide et humaine.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={section.href}
                  className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
              <Award className="h-4 w-4" />
              Notre Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
              Connecter les entreprises, <br /> libérer les potentiels
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Depuis notre création, nous nous efforçons de simplifier les télécoms pour les entreprises de toutes tailles. Nous croyons que la technologie ne doit pas être un obstacle, mais un levier de croissance puissant et accessible.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Souveraineté</h4>
                <p className="text-sm text-slate-500">Des infrastructures et un support 100% basés en France pour votre sécurité.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Innovation</h4>
                <p className="text-sm text-slate-500">Une veille constante pour vous proposer les solutions de demain dès aujourd'hui.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Users2 className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Accompagnement</h4>
                <p className="text-sm text-slate-500">Un interlocuteur unique dédié à la réussite de vos projets télécoms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TLinkOverview;
