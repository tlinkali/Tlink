import React from "react";
import { Layout } from "@/components/layout/Layout";
import heroImg from "../assets/pages/telephonie-unifiee/hero.jpg";
import commImg from "../assets/pages/telephonie-unifiee/comm.jpg";
import mobileImg from "../assets/services/connectivity.jpg";
import { 
  Phone, 
  MessageSquare, 
  Video, 
  Users, 
  Smartphone, 
  Monitor,
  LayoutGrid,
  Zap,
  CheckCircle2,
  Globe,
  Share2,
  Mail
} from "lucide-react";

export function TelephonieUnifiee() {
  return (
      <Layout>
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 overflow-hidden min-h-[60vh] flex items-center -mt-20">
            <div className="absolute inset-0 z-0">
                <img 
                  src={heroImg} 
                  alt="" 
                  className="w-full h-full object-cover"
                  width="1200"
                  height="800"
                  loading="eager"
                  fetchpriority="high"
                />
            </div>
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/85 to-[#2563EB]/40 z-[1]" />
          
          {/* Radial Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2DD4BF]/20 via-transparent to-transparent z-[1]" />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
          
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in duration-700">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide">TOUT-EN-UN</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                  La Téléphonie <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    Unifiée & Convergence
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                  Vos besoins de communication évoluent avec votre entreprise et nos modes de communications optimisent votre évolution.
                </p>
              </div>
            </div>
        </section>

      {/* Téléphonie Unifiée et Convergence */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                <LayoutGrid className="h-4 w-4" />
                Tout-en-un
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Téléphonie Unifiée et Convergence
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Accroissement du nombre de lignes, standard téléphonique, serveur vocal interactif, gestion du flux d'appels, interconnexions distantes... l'évolution de votre entreprise passe forcément par l'évolution de votre téléphonie.
                </p>
                <p>
                  En tant qu'opérateur télécoms Pure Player, nous proposons une solution de communications unifiées tout IP dernière génération. Tous les modes de communication de vos collaborateurs sont regroupés en un seul et même endroit.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                  <p className="font-medium text-slate-900 italic">
                    "E-mail, téléphone, fax, messagerie instantanée, vidéoconférence, collaboration web... un seul outil pour tout gérer."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-xl max-w-lg mx-auto">
                <img 
                  src={commImg} 
                  alt="Communications unifiées"
                  className="rounded-2xl w-full h-auto object-cover mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                    <span className="block font-bold text-slate-900 text-sm">Productivité</span>
                    <span className="text-xs text-slate-500">Flux simplifiés</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                    <span className="block font-bold text-slate-900 text-sm">Simplicité</span>
                    <span className="text-xs text-slate-500">Interface unique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Mobilité */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-bold mb-4 uppercase tracking-wider">
                <Smartphone className="h-4 w-4" />
                Liberté totale
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                La mobilité au service du rendement
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Vous profitez d'une téléphonie homogène au sein de votre entreprise, avec les mêmes services pour tous vos collaborateurs, qu'ils soient équipés d'un fixe, d'un mobile ou des deux.
                </p>
                <p>
                  La convergence vous permet de communiquer un seul numéro à vos correspondants : vous êtes joignable partout. Une seule messagerie pour tous vos messages, consultables même en déplacement.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Un numéro unique pour fixe et mobile",
                    "Messagerie unifiée (email, voix, fax)",
                    "Conférences audio et vidéo instantanées",
                    "Partage de documents et collaboration web"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:order-1 relative">
                <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
                  <img 
                    src={mobileImg} 
                    alt="Mobilité entreprise"
                    className="rounded-[2rem] w-full h-auto object-cover"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages / Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Une interface unique pour tout vos outils
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Regroupez l'ensemble de vos communications pour gagner en réactivité et en confort de travail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<MessageSquare className="h-7 w-7 text-primary" />}
              title="Messagerie Instantanée"
              description="Échangez en temps réel avec vos collaborateurs, où qu'ils soient."
            />
            <FeatureCard 
              icon={<Video className="h-7 w-7 text-accent" />}
              title="Vidéoconférence"
              description="Organisez des réunions virtuelles en haute définition en un clic."
            />
            <FeatureCard 
              icon={<Monitor className="h-7 w-7 text-blue-500" />}
              title="Softphone"
              description="Utilisez votre ordinateur comme un véritable téléphone d'entreprise."
            />
            <FeatureCard 
              icon={<Share2 className="h-7 w-7 text-emerald-500" />}
              title="Collaboration Web"
              description="Partagez vos écrans et travaillez ensemble sur vos documents."
            />
          </div>
        </div>
      </section>

      {/* Closing CTA/Info Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <Globe className="w-full h-full text-white" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                L'avenir de votre téléphonie est ici
              </h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Plus de problème de joignabilité, votre téléphone est directement intégré à votre poste de travail. Au bureau comme en déplacement, votre poste vous suit partout, et vous choisissez si vous voulez être joignable... ou non.
                </p>
                <p>
                  Compatible avec les smartphones, tablettes et ordinateurs, les communications unifiées constituent l'avenir de la téléphonie d'entreprise, de la TPE de proximité aux plus grandes entreprises internationales.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xl">PRODUCTIVITÉ</span>
                    <span className="text-sm text-white/60">Équipes boostées</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xl">COLLABORATION</span>
                    <span className="text-sm text-white/60">Interactions fluides</span>
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 group">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

export default TelephonieUnifiee;
