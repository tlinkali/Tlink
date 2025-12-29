import { Link } from "react-router-dom";
import { Phone, Server, Monitor, Wifi, Zap, Shield, Settings, HeartPulse, Smartphone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import service images
import voipImg from "@/assets/services/voip.png";
import hebergeeImg from "@/assets/services/hebergee.png";
import unifieeImg from "@/assets/services/unifiee.png";
import xdslImg from "@/assets/services/xdsl.png";
import fibreImg from "@/assets/services/fibre.png";
import vpnImg from "@/assets/services/vpn.png";
import pbxImg from "@/assets/services/pbx.png";
import santeImg from "@/assets/services/sante.png";
import mobileImg from "@/assets/services/mobile.png";

const services = [
  {
    icon: Phone,
    title: "VoIP / SIP",
    description: "Migration vers l'IP avec qualité HD et fiabilité maximale.",
    image: voipImg,
    href: "/offres/telephonie/fixe-voip",
    className: "md:col-span-2 md:row-span-2",
    color: "from-blue-600/20 to-cyan-400/20",
  },
  {
    icon: Zap,
    title: "Fibre Pro",
    description: "Très haut débit symétrique pour booster votre productivité.",
    image: fibreImg,
    href: "/offres/internet/fibre",
    className: "md:col-span-2 md:row-span-1",
    color: "from-purple-600/20 to-pink-400/20",
  },
  {
    icon: Shield,
    title: "VPN & Sécurité",
    description: "Interconnexion sécurisée sur mesure pour vos sites distants.",
    image: vpnImg,
    href: "/offres/internet/vpn",
    className: "md:col-span-1 md:row-span-2",
    color: "from-emerald-600/20 to-teal-400/20",
  },
  {
    icon: Server,
    title: "Hébergée",
    description: "PBX virtualisé clé en main, sans infrastructure lourde.",
    image: hebergeeImg,
    href: "/offres/telephonie/hebergee",
    className: "md:col-span-1 md:row-span-1",
    color: "from-orange-600/20 to-yellow-400/20",
  },
  {
    icon: HeartPulse,
    title: "Santé Connectée",
    description: "Solutions dédiées au secteur médical et EHPAD.",
    image: santeImg,
    href: "/offres/sante",
    className: "md:col-span-2 md:row-span-1",
    color: "from-red-600/20 to-orange-400/20",
  },
  {
    icon: Smartphone,
    title: "Flotte Mobile",
    description: "Forfaits pros sur le meilleur réseau de France.",
    image: mobileImg,
    href: "/offres/mobile",
    className: "md:col-span-1 md:row-span-1",
    color: "from-indigo-600/20 to-blue-400/20",
  },
  {
    icon: Settings,
    title: "Standards PBX",
    description: "Équipements performants pour votre accueil téléphonique.",
    image: pbxImg,
    href: "/offres/equipements/pbx-standard",
    className: "md:col-span-1 md:row-span-1",
    color: "from-slate-600/20 to-slate-400/20",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              L'expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">réseau</span> sans limite.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Nous concevons des infrastructures sur-mesure pour propulser votre entreprise vers le futur de la communication.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Explorez nos solutions</span>
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={cn(
                "group relative rounded-3xl overflow-hidden border border-white/5 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
                service.className
              )}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className={cn("absolute inset-0 bg-gradient-to-br transition-opacity duration-500", service.color)} />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative line on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}

          {/* Call to Action Card */}
          <div className="md:col-span-1 md:row-span-1 rounded-3xl border border-dashed border-primary/30 flex flex-col items-center justify-center p-6 text-center hover:bg-primary/5 transition-colors cursor-pointer group">
            <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:animate-bounce">
              <Zap className="h-6 w-6" />
            </div>
            <h4 className="text-white font-bold mb-1">Besoin d'un audit ?</h4>
            <p className="text-slate-500 text-xs">Analyse gratuite de vos besoins</p>
            <Link to="/audit" className="mt-4 text-xs font-bold text-primary hover:underline uppercase tracking-wider">Démarrer →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
