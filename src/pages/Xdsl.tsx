import React from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import heroImg from "../assets/pages/xdsl/hero.jpg";
import infraImg from "../assets/pages/xdsl/detail.jpg";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Network, 
  ShieldCheck,
  Globe,
  Settings,
  Activity,
  BarChart3
} from "lucide-react";

export function Xdsl() {
  const services = [
    {
      title: "ADSL",
      description: "Accès Internet haut débit jusqu'à 20 Mb/s sur une simple ligne analogique. Solution fiable et économique.",
      icon: <Activity className="h-8 w-8 text-primary" />,
      features: [
        "Jusqu'à 20 Mb/s",
        "Ligne analogique simple",
        "Administration en temps réel",
        "Faible coût",
        "Déploiement rapide",
        "Excellente couverture nationale"
      ]
    },
    {
      title: "VDSL",
      description: "Accès Internet ultra-haut débit jusqu'à 100 Mb/s pour les entreprises situées à proximité du central.",
      icon: <Zap className="h-8 w-8 text-accent" />,
      features: [
        "Jusqu'à 100 Mb/s",
        "Performance boostée",
        "Pilotez vos liaisons",
        "Déploiement immédiat",
        "Économique",
        "Couverture optimisée"
      ]
    },
    {
      title: "SDSL",
      description: "Débits symétriques garantis avec une GTR de 4h pour vos applications critiques et le SaaS.",
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      features: [
        "Jusqu'à 20 Mb/s symétriques",
        "GTR 4H garantie",
        "Débits 100% garantis",
        "Idéal SaaS & Visio",
        "Interconnexion de sites",
        "Stabilité maximale"
      ]
    }
  ];

    return (
        <Layout>
            <SEO 
              title="Connexions Internet xDSL (ADSL, VDSL, SDSL) | Réseau Cuivre" 
              description="Découvrez nos solutions internet cuivre pour entreprises. De l'ADSL économique au SDSL professionnel avec débits symétriques garantis et GTR 4h."
            />
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
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide">LIAISONS CUIVRE</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                  Solutions <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    Internet XDSL
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                  Une gamme de solutions ajustées selon l’activité de votre entreprise, votre budget et votre niveau d’usage. 
                </p>
              </div>
            </div>
        </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Nos Accès Internet Cuivre
            </h2>
            <p className="text-slate-600 text-lg">
              De l'ADSL économique au SDSL professionnel avec débit garanti, choisissez la technologie qui correspond à vos besoins réels.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all cursor-default">
                  Inclus dans l'offre
                  <Settings className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Services Professionnels
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                Plus qu'une simple connexion
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 font-bold text-primary">01</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Pilotage en temps réel</h4>
                    <p className="text-slate-600">Depuis votre interface dédiée, vous pouvez administrer vos routeurs et piloter vos liaisons en temps réel pour une maîtrise totale.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 font-bold text-primary">02</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">GTR 4H Garantie</h4>
                    <p className="text-slate-600">Sur nos liens SDSL, nous nous engageons sur une Garantie de Temps de Rétablissement de 4 heures pour assurer votre continuité d'activité.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 font-bold text-primary">03</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Déploiement Agile</h4>
                    <p className="text-slate-600">Profitez de la meilleure couverture géographique en France avec une mise en service rapide et un accompagnement de proximité.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50" />
                <img 
                  src={infraImg} 
                  alt="Infrastructure Réseau Professionnelle"
                  className="relative rounded-[3rem] shadow-2xl border border-white"
                />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">100%</span>
                </div>
                <p className="text-sm font-medium text-slate-500">Couverture France</p>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Comparatif Technique</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-6 font-bold text-slate-900">Caractéristique</th>
                    <th className="p-6 font-bold text-slate-900">ADSL</th>
                    <th className="p-6 font-bold text-slate-900">VDSL</th>
                    <th className="p-6 font-bold text-slate-900">SDSL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { label: "Débit Descendant (Download)", adsl: "Jusqu'à 20 Mb/s", vdsl: "Jusqu'à 100 Mb/s", sdsl: "Jusqu'à 20 Mb/s" },
                    { label: "Débit Montant (Upload)", adsl: "Jusqu'à 1 Mb/s", vdsl: "Jusqu'à 20 Mb/s", sdsl: "Jusqu'à 20 Mb/s (Symétrique)" },
                    { label: "Débit Garanti", adsl: "Non", vdsl: "Non", sdsl: "Oui (100%)" },
                    { label: "GTR (Garantie de Rétablissement)", adsl: "Best effort", vdsl: "Best effort", sdsl: "4 Heures" },
                    { label: "Usage recommandé", adsl: "Bureautique légère", vdsl: "Multimédia, Cloud", sdsl: "SaaS, VoIP, VPN" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 font-semibold text-slate-700">{row.label}</td>
                      <td className="p-6 text-slate-600">{row.adsl}</td>
                      <td className="p-6 text-slate-600">{row.vdsl}</td>
                      <td className="p-6 text-slate-600 font-bold text-primary">{row.sdsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </Layout>
    );
  }


export default Xdsl;
