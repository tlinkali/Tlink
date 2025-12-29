import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  Database, 
  MonitorSmartphone, 
  Wifi, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Activity, 
    Smartphone,
    ArrowRight,
    Eye,
    X
  } from "lucide-react";
import { Tilt } from "@/components/ui/micro-interactions";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  href: string;
  overlayColor: string;
}

const services: ServiceCardProps[] = [
  {
    title: "VoIP / SIP",
    description: "Migration vers l'IP avec qualité HD",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/voip-0iR5zpLi-11.png?width=600&quality=75&format=webp",
    icon: Phone,
    href: "/offres/telephonie/voip-sip",
    overlayColor: "from-blue-600/80 to-blue-800/80"
  },
  {
    title: "Hébergée",
    description: "PBX virtualisé clé en main",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/hebergee-DKkp8Ops-12.png?width=600&quality=75&format=webp",
    icon: Database,
    href: "/offres/telephonie/hebergee",
    overlayColor: "from-indigo-600/80 to-indigo-800/80"
  },
  {
    title: "Unifiée",
    description: "Communication multi-supports intégrée",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/unifiee-C1qY_pcP-13.png?width=600&quality=75&format=webp",
    icon: MonitorSmartphone,
    href: "/offres/telephonie/unifiee",
    overlayColor: "from-purple-600/80 to-purple-800/80"
  },
  {
    title: "xDSL",
    description: "Accès Internet professionnel fiable",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/xdsl-BoNstIkd-14.png?width=600&quality=75&format=webp",
    icon: Wifi,
    href: "/offres/internet/xdsl",
    overlayColor: "from-sky-600/80 to-sky-800/80"
  },
  {
    title: "Fibre",
    description: "Très haut débit pour entreprises",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/fibre-Bw4Zyhhu-15.png?width=600&quality=75&format=webp",
    icon: Zap,
    href: "/offres/internet/fibre",
    overlayColor: "from-cyan-600/80 to-cyan-800/80"
  },
  {
    title: "VPN",
    description: "Interconnexion sécurisée sur mesure",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/vpn-CSVtXSwL-16.png?width=600&quality=75&format=webp",
    icon: ShieldCheck,
    href: "/offres/internet/vpn",
    overlayColor: "from-slate-700/80 to-slate-900/80"
  },
  {
    title: "PBX / Standards",
    description: "Équipements téléphoniques performants",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/pbx-CPgV9ypE-17.png?width=600&quality=75&format=webp",
    icon: Cpu,
    href: "/offres/equipements/pbx",
    overlayColor: "from-blue-700/80 to-blue-900/80"
  },
  {
    title: "Santé",
    description: "Solutions connectées pour le médical",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/sante-k4jF5nH0-18.png?width=600&quality=75&format=webp",
    icon: Activity,
    href: "/offres/equipements/sante",
    overlayColor: "from-emerald-600/80 to-emerald-800/80"
  },
  {
    title: "Mobile",
    description: "Réseau mobile partout en France",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/mobile-DP6kD18e-19.png?width=600&quality=75&format=webp",
    icon: Smartphone,
    href: "/offres/mobile",
    overlayColor: "from-blue-600/80 to-blue-700/80"
  }
];

const ServiceItem = ({ service }: { service: ServiceCardProps }) => (
  <Tilt className="h-full">
    <a 
      href={service.href}
      className="group block relative bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#2563EB]/50 transition-all duration-500 h-full flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.overlayColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[#0F172A]/80 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-500 shadow-2xl">
            <service.icon className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <div className="p-6 md:p-10 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2 md:mb-4 group-hover:text-[#2563EB] transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-400 text-xs md:text-[15px] leading-relaxed mb-4 md:mb-8 flex-1">
          {service.description}
        </p>
        <div className="flex items-center text-white text-xs md:text-sm font-bold group/link">
          <span className="relative overflow-hidden inline-flex">
            <span className="transition-transform duration-300 group-hover:translate-y-[-120%]">Découvrir l'offre</span>
            <span className="absolute inset-0 transition-transform duration-300 translate-y-[120%] group-hover:translate-y-0 text-[#2563EB]">Découvrir l'offre</span>
          </span>
          <div className="ml-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-300">
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
          </div>
        </div>
      </div>
    </a>
  </Tilt>
);

const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOverlayOpen]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-[#0F172A] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#2563EB]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#2DD4BF]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-6">
              Solutions B2B
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] font-heading font-extrabold text-[#0F172A] mb-6 leading-tight">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#2DD4BF]">Services</span>
            </h2>
            <p className="text-[1.125rem] text-[#64748B] leading-relaxed max-w-xl">
              Propulsez votre entreprise avec des solutions télécom innovantes et une infrastructure réseau de pointe.
            </p>
          </div>
          
            {/* Navigation Controls */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsOverlayOpen(true)}
                className="w-14 h-14 rounded-full border border-[#0F172A]/10 bg-white/50 backdrop-blur-md flex items-center justify-center text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white hover:scale-110 cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                title="Tout afficher"
                aria-label="Tout afficher"
              >
                <Eye className="h-6 w-6" />
              </button>
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
              className={`w-14 h-14 rounded-full border border-[#0F172A]/10 bg-white/50 backdrop-blur-md flex items-center justify-center text-[#0F172A] transition-all duration-300 ${
                canScrollPrev 
                  ? "hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white hover:scale-110 cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.3)]" 
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`w-14 h-14 rounded-full border border-[#0F172A]/10 bg-white/50 backdrop-blur-md flex items-center justify-center text-[#0F172A] transition-all duration-300 ${
                canScrollNext 
                  ? "hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white hover:scale-110 cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.3)]" 
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Creative Fullscreen Overlay */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0F172A]/95 backdrop-blur-xl flex flex-col p-4 md:p-12 overflow-y-auto"
          >
            <div className="container mx-auto max-w-7xl relative">
              <button
                onClick={() => setIsOverlayOpen(false)}
                className="fixed top-6 right-6 md:top-12 md:right-12 w-14 h-14 rounded-full bg-white/10 hover:bg-[#2563EB] text-white flex items-center justify-center transition-all duration-300 z-[110]"
              >
                <X className="h-6 w-6" />
              </button>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-12 md:mb-20 text-center"
              >
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">
                  Toutes nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#2DD4BF]">solutions</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Découvrez l'ensemble de notre écosystème technologique pour votre entreprise.
                </p>
              </motion.div>

              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <ServiceItem service={service} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesCarousel;
