import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import heroImg from "../assets/pages/voip-sip/hero.png";
import trunkImg from "../assets/services/connectivity.jpg";
import { 
  Phone, 
  Signal, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle,
  Zap,
  Network,
  Cloud,
  CheckCircle2,
  Server
} from "lucide-react";

export function VoipSip() {
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
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide">VOIX SUR IP</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-4 leading-tight">
                  Offre VoIP <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    SIP Classic
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 max-w-2xl">
                  L'outil indispensable au développement de votre société.
                </p>
              </div>
            </div>
          </section>

      {/* Fin du Cuivre Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertTriangle className="w-64 h-64 text-orange-500" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-200/50 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <AlertTriangle className="h-4 w-4" />
                INFRASTRUCTURE HISTORIQUE
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Le cuivre bientôt la fin ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Les lignes analogiques et numériques répondent à des besoins basiques de téléphonie pour les entreprises. Le raccordement à notre réseau se fait via l'infrastructure cuivre de l'opérateur historique.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Très simples à déployer ou à transférer vers T-LINK via un simple changement administratif, elles restent utiles ou économiques pour les petites configurations même si d'autres solutions de téléphonie sont amenées à les remplacer à terme.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <Signal className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Lignes Numériques (T0)</h3>
                      <p className="text-slate-600">Acheminement des communications depuis des PABX numériques. Chaque ligne offre deux communications simultanées.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Solutions de Remplacement</h3>
                      <p className="text-slate-600">VoiP, Trunk SIP, carte SIM... Préparez dès maintenant votre migration vers les technologies modernes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Trunk SIP Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-50" />
                  <img 
                    src={trunkImg} 
                    alt="Le Trunk SIP"
                    className="relative w-full h-auto rounded-3xl shadow-xl border border-slate-100 object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                  <Network className="h-4 w-4" />
                  Connectivité Avancée
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  Le Trunk SIP : La passerelle vers le futur
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  L'offre Téléphonie sur IP de T-LINK est une solution permettant aux entreprises disposant d'un standard téléphonique (PABX traditionnel ou IPBX) d'acheminer leurs appels en utilisant le réseau haut débit (SDSL / fibre optique).
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Une fois la solution mise en place, vos communications transitent sur le réseau IP T-LINK et non plus sur les réseaux traditionnels.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Économies immédiates sur les abonnements (T0/T2)",
                    "Migration douce vers l'IP sans changer de matériel",
                    "Qualité de voix haute définition",
                    "Évolutivité simplifiée du nombre de canaux"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VoIP Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-bold mb-4 uppercase tracking-wider">
                <Cloud className="h-4 w-4" />
                Services Cloud
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
                La VoIP : La liberté de communiquer
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Une ère nouvelle s'ouvre à vous avec des services à la carte. La téléphonie sur IP est une solution clés-en-main, administrable en temps réel, qui ne nécessite pas d'investissement matériel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Clés-en-main</h3>
                <p className="text-slate-600 leading-relaxed">
                  Prête à l'emploi, déployable en un clic seulement. Aucun investissement lourd en matériel n'est nécessaire.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Optimisation</h3>
                <p className="text-slate-600 leading-relaxed">
                  De l'optimisation de votre standard aux redirections d'appels, maximisez votre taux de réponse.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Productivité</h3>
                <p className="text-slate-600 leading-relaxed">
                  Améliorez votre productivité et devenez plus compétitif grâce à une technologie agile et performante.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <div className="p-8 bg-slate-900 rounded-3xl text-white inline-block max-w-2xl">
                <p className="text-lg font-medium italic">
                  "Déployable avec un délai de mise en place plus court que le temps pris pour lire ce texte."
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
}

export default VoipSip;
