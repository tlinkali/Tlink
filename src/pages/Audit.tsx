import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { 
  CheckCircle2, 
  Target, 
  BarChart3, 
  Search, 
  FileText, 
  ClipboardList, 
  ArrowRight,
  ArrowUpRight,
  Activity,
  Zap,
  LayoutDashboard
} from 'lucide-react';
import { Link } from "react-router-dom";
import telephonieMain from '@/assets/pages/telephonie-overview/main.jpg';
import telephonieHero from '@/assets/pages/telephonie-overview/hero.jpg';

const Audit = () => {
  const sections = [
    {
      title: "IDENTIFIER LES OBJECTIFS",
      content: "L'audit permet de poser les bases d'un besoin clairement identifié et d'objectif réalistes et ambitieux. Comme toute entreprise vous disposez d'une organisation, d'un budget, de règles et de contraintes, le premier pas sera d'identifier ensemble les objectifs que vous souhaitez atteindre mais aussi les résultats que vous attendez. Un Audit a pour objectif d'apporter du confort de travail, une amélioration des performances, une vue d'ensemble limpide de vos outils de communication et une réduction tarifaire.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/AUDIT-1-1766502348496.jpg?width=800&quality=85",
      icon: <Target className="h-6 w-6" />,
      color: "blue",
      step: "01"
    },
    {
      title: "IDENTIFIER LES RUBRIQUES ET CRITERES STRATEGIQUES",
      content: "Il n'est pas évident de déterminer si la solution de téléphonie mise en œuvre au sein de votre organisation est la plus adaptée à vos besoins. Il est donc essentiel de fixer dans un premier temps les différentes rubriques sur lesquelles intervenir et orienter le processus d'audition selon des critères stratégiques qui correspondent à vos doléances.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/AUDIT-2-1766502348491.jpg?width=800&quality=85",
      icon: <ClipboardList className="h-6 w-6" />,
      color: "indigo",
      step: "02"
    },
    {
      title: "AUDITER VOTRE SITUATION",
      content: "Auditer sa situation télécom est une des premières étapes de la réalisation d'un projet. L'audit passe par plusieurs postes de revue avec les équipements, la partie opérateur télécom, la partie internet ou encore même le réseau et les différents usages nécessaires dans votre structure. Votre chargé de projet vous accompagnera dans l'évaluation de vos équipements téléphoniques et ainsi aura les clefs pour vous orienter au mieux.",
      image: telephonieHero,
      icon: <Search className="h-6 w-6" />,
      color: "sky",
      step: "03"
    },
    {
      title: "ANALYSER LES COÛTS ET EXIGENCES",
      content: "Après avoir établi un diagnostic complet de vos besoins, une analyse des coûts et exigences liés à votre téléphonie professionnelle est faite. Ceci vous permettra de comparer les offres du marché qui correspondent le mieux à vos attentes.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/AUDIT-4-1766502348495.jpg?width=800&quality=85",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "emerald",
      step: "04"
    },
    {
      title: "COMMUNIQUER LES RÉSULTATS",
      content: "Un rapport sur l'état des lieux de votre structure sera établi vous aurez alors une visibilité sur l'état général des équipements, de la répartition des coûts de votre téléphonie d'entreprise et sur vos différents états d'usages",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/AUDIT-5-1766502348495.jpg?width=800&quality=85",
      icon: <FileText className="h-6 w-6" />,
      color: "violet",
      step: "05"
    },
    {
      title: "PROPOSER UN PLAN D'ACTION",
      content: "Un plan d'action détaillé sera mis en œuvre avec différents axes d'améliorations contextuels, organisationnels et de développement. L'ensemble des résultats déterminera les objectifs financiers, technologiques et de mise en place de politiques télécoms au sein de l'entreprise. Ces objectifs seront suivis via des indicateurs clés identifiés et mesurés. Pour assurer la continuité des actions identifiées pendant l'audit, la mise en place d'une plateforme logicielle s'avèrera nécessaire. Un suivi simple et à la carte tout au long de votre projet d'Audit pour arriver à l'optimisation de votre structure.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/AUDIT-6-1766502348492.jpg?width=800&quality=85",
      icon: <CheckCircle2 className="h-6 w-6" />,
      color: "primary",
      step: "06"
    },
  ];

  return (
    <Layout>
        {/* 1️⃣ Hero Section (Aligned with other pages) */}
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
              <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">Audit & Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              Optimisation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                & Audit Télécom
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Un état des lieux limpide de votre situation dans le but de réussir à dégager des objectifs simples, réalistes et ambitieux.
            </p>
              <div className="mt-10">
                 <Link to="/contact?subject=Démarrer%20Audit%20Télécom" className="inline-flex items-center gap-2 bg-[#2DD4BF] text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
                  Démarrer mon audit
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Intro Section – Comprendre votre environnement (Asymmetric Layout) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:-rotate-2">
                <img 
                  src={telephonieMain} 
                  alt="Comprendre votre environnement" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow">
                <Activity className="h-10 w-10 text-primary mb-4" />
                <p className="text-slate-900 font-bold text-lg">Visibilité Totale</p>
                <p className="text-slate-500 text-sm">Comprendre l'environnement légal, technique et sociologique de vos télécoms.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                <LayoutDashboard className="h-4 w-4" />
                Diagnostic Stratégique
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Comprendre votre <span className="text-primary italic">environnement</span> télécom
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                La téléphonie professionnelle peut parfois manquer de transparence et paraître opaque. Notre mission est de vous apporter une clarté totale sur vos usages et vos coûts.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "Transparence Technique", desc: "Nous démystifions les notions complexes pour une compréhension simple." },
                  { title: "Maîtrise des Coûts", desc: "Identifiez chaque euro dépensé et optimisez votre budget." }
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

      {/* 3️⃣ Processus Section (Layered Approach) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="dotGridAudit" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dotGridAudit)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Notre processus <span className="text-[#2DD4BF]">d'accompagnement</span>
            </h2>
            <p className="text-white/60 text-lg">
              Une méthodologie rigoureuse pour transformer votre infrastructure et dégager des objectifs réalistes.
            </p>
          </div>

          <div className="grid gap-24">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[3rem]">
                      <img 
                        src={section.image} 
                        alt={section.title} 
                        className="rounded-[2.8rem] w-full h-[450px] object-cover"
                        width="800"
                        height="450"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-[2.8rem]" />
                    </div>
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/10 blur-[100px] rounded-full" />
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="text-6xl font-display font-black text-white/10 italic">
                    {section.step}
                  </div>
                  <div>
                    <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-[#2DD4BF] mb-6">
                      {section.icon}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-6">
                      {section.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Final CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#0F172A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <pattern id="gridLargeAudit" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#gridLargeAudit)" />
              </svg>
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Optimisez votre structure <span className="text-[#2DD4BF]">dès aujourd'hui</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Un suivi simple et à la carte tout au long de votre projet d'Audit pour arriver à l'optimisation de votre structure.
              </p>
                <div className="flex justify-center flex-wrap gap-6">
                  <Link to="/contact?subject=Audit%20Gratuit%20Télécom" className="bg-[#2DD4BF] text-[#0F172A] px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl inline-flex items-center gap-2">
                    Demander mon audit gratuit
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Audit;

