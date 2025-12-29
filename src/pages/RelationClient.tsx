import React from 'react';
import { Layout } from "@/components/layout/Layout";
import HeroRelationClient from "@/components/sections/hero-relation-client";
import ClientUnique from "@/components/sections/client-unique";
import EquipeLocale from "@/components/sections/equipe-locale";
import PreparerInstallation from "@/components/sections/preparer-installation";
import InstallationMaitrisee from "@/components/sections/installation-maitrisee";
import RelationClientServices from "@/components/sections/relation-client-services";
import AgregateurReseaux from "@/components/sections/agregateur-reseaux";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

export default function RelationClient() {
  return (
    <Layout>
      {/* Dark Hero Section matching the site's theme */}
      <section className="relative min-h-[60vh] flex items-center pt-40 pb-24 overflow-hidden bg-deep-navy -mt-20">
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
              <span className="text-white/90 text-[14px] font-semibold tracking-wider uppercase">Relation Client</span>
            </div>
            
            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              La Voix du Client <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-blue">
                au Cœur de T-Link
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Un accompagnement personnalisé et une proximité locale pour bâtir ensemble les solutions adaptées à vos enjeux.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections from cloned website */}
      <HeroRelationClient />
      <ClientUnique />
      <EquipeLocale />
      <PreparerInstallation />
      <InstallationMaitrisee />
      <RelationClientServices />
      <AgregateurReseaux />

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-primary-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:100px_100px] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Bénéficiez d'un accompagnement sur mesure
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Nos experts sont à votre écoute pour définir vos besoins et optimiser vos infrastructures.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-deep-navy text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                Contacter un conseiller
                <ArrowRight className="h-5 w-5 text-accent-cyan" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
