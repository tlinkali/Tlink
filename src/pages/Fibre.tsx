import React from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import mutualiseeImg from "../assets/pages/fibre/mutualisee.jpg";
import mutualiseeNewImg from "../assets/pages/fibre/mutualisee_new.jpg";
import dedieeImg from "../assets/pages/fibre/dediee.jpg";
import { 
  Zap, 
  CheckCircle2, 
  ShieldCheck,
  Globe,
  Settings,
  Activity,
  Cpu,
  Lock,
  ArrowUpRight
} from "lucide-react";

const dedieeNewImg = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/images-FIBRE-DEDIEE-1766163893091.jpg?width=8000&height=8000&resize=contain";

export function Fibre() {
  const offers = [
    {
      title: "Fibre Mutualisée",
      subtitle: "FTTH / FTTB",
      description: "L'offre de connectivité haut-débit conçue pour répondre aux besoins de performance tout en maîtrisant votre budget.",
      image: mutualiseeNewImg,
      stats: {
        down: "500 Mb/s",
        up: "50 Mb/s"
      },
      features: [
        "Réseau de collecte hybride",
        "Option bande passante voix garantie",
        "Communications sereines",
        "Économique et performant",
        "Installation simplifiée",
        "Support réactif"
      ],
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "Fibre Dédiée",
      subtitle: "FTTO",
      description: "Le très haut débit exclusivement dédié à votre entreprise avec des engagements de disponibilité maximaux.",
        image: dedieeNewImg,
      stats: {
        down: "Jusqu'à 10 Gb/s",
        up: "Symétrique"
      },
      features: [
        "Débits 100% garantis",
        "Garantie de Temps de Rétablissement",
        "Sécurisation et Haute Disponibilité",
        "Solution vitale pour l'activité",
        "Évolutivité sur mesure",
        "Supervision 24/7"
      ],
      icon: <Cpu className="h-6 w-6 text-accent" />
    }
  ];

    return (
        <Layout>
            <SEO 
              title="Fibre Optique Pro (FTTH & FTTO) | Très Haut Débit B2B" 
              description="Découvrez nos solutions de fibre optique pour entreprises. Fibre mutualisée (FTTH) ou dédiée (FTTO) avec débits garantis et GTR 4h."
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
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide">TRÈS HAUT DÉBIT</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                  La Fibre <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    Optique Pro
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                  Le très haut débit doit rimer avec très haute fiabilité. 
                  Faites le choix d'une architecture exclusivement dédiée à votre sérénité numérique.
                </p>
              </div>
            </div>
        </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Fiabilité Entreprise
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Le socle de votre migration vers le tout IP
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Parce que votre accès Internet est vital pour votre activité, nous proposons des solutions performantes et économiques capables de répondre à l'évolution de vos usages : travail collaboratif, cloud computing, visioconférence, téléphonie sur IP et PRA.
              </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-accent" /> Évolutivité
                    </h4>
                    <p className="text-sm text-slate-600">Anticipez vos usages futurs avec un service flexible et scalable.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-accent" /> Sécurité
                    </h4>
                    <p className="text-sm text-slate-600">Accès sécurisé et disponible pour vous prémunir contre les coupures de service.</p>
                  </div>
                </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-xl">
                    <img src={mutualiseeNewImg} alt="Technologie Fibre" className="h-full w-full object-cover" />
                  </div>
                  <div className="bg-primary p-8 rounded-3xl text-slate-900 shadow-xl">
                    <Globe className="h-8 w-8 mb-4 opacity-50" />
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Fibre Pro</div>
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="bg-accent p-8 rounded-3xl text-slate-900 shadow-xl">
                    <Zap className="h-8 w-8 mb-4 opacity-50" />
                    <div className="text-3xl font-bold">Trés Haut</div>
                    <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Débit Stable</div>
                  </div>
                    <div className="h-64 rounded-3xl overflow-hidden shadow-xl">
                      <img src={dedieeNewImg} alt="Infrastructure Fibre" className="h-full w-full object-cover" />
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Offers */}
          <div className="space-y-24">
            {offers.map((offer, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
                      <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-slate-900/20" />
                      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50">
                        <div className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Performance</div>
                        <div className="text-2xl font-bold text-primary">{offer.stats.down}</div>
                        <div className="text-sm font-medium text-slate-600">{offer.stats.up}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shadow-sm">
                      {offer.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-slate-900">{offer.title}</h3>
                      <p className="text-accent font-bold text-sm tracking-widest uppercase">{offer.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {offer.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {offer.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all group shadow-lg">
                    En savoir plus
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#0F172A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                Prêt à passer au <span className="text-[#2DD4BF]">Très Haut Débit</span> ?
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Nos experts vous accompagnent pour définir l'offre fibre la plus adaptée à vos besoins et à l'évolution de votre entreprise. 
              </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/contact?subject=Étude%20Éligibilité%20Fibre" className="bg-[#2DD4BF] text-[#0F172A] px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                    Demander une étude gratuite
                  </Link>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Testez votre éligibilité</div>
                    <div className="font-bold">Contactez-nous</div>
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

export default Fibre;
