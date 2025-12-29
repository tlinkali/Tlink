import React, { useState, useMemo, forwardRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

const partnersData = [
  {
    name: 'Cisco Meraki',
    src: '/partners/meraki.svg',
    category: 'Réseau & Connectivité',
    description: 'Leader mondial des solutions de réseau gérées dans le cloud.'
  },
  {
    name: 'Ruckus',
    src: '/partners/ruckus.svg',
    category: 'Réseau & Connectivité',
    description: 'Spécialiste des infrastructures réseau filaires et sans fil.'
  },
  {
    name: 'Aerohive',
    src: '/partners/aerohive.svg',
    category: 'Réseau & Connectivité',
    description: 'Pionnier des solutions Wi-Fi sans contrôleur gérées par le cloud.'
  },
    {
      name: 'Ascom',
      src: '/partners/ascom.png',
      category: 'Communications',
      description: 'Solutions de communication mobile et de flux de travail.'
    },
    {
      name: 'Google Cloud',
      src: '/partners/google.svg',
      category: 'Cloud & Sécurité',
      description: 'Solutions cloud et outils de collaboration pour entreprises.'
    },
    {
      name: 'Yealink',
      src: '/partners/yealink.jpg',
      category: 'Communications',
      description: 'Fournisseur mondial de solutions de terminal de communication unifiée.'
    },
    {
      name: 'Fortinet',
      src: '/partners/fortinet.png',
      category: 'Cloud & Sécurité',
      description: 'Solutions de cybersécurité larges, intégrées et automatisées.'
    },
    {
      name: 'Samsung',
      src: '/partners/samsung.svg',
      category: 'Communications',
      description: 'Leader technologique en terminaux mobiles et affichage.'
    },
    {
      name: 'Mitel',
      src: '/partners/mitel.png',
      category: 'Communications',
      description: 'Expert en communications d\'entreprise et collaboration.'
    },
    {
      name: 'Alcatel-Lucent',
      src: '/partners/alcatel.jpg',
      category: 'Réseau & Connectivité',
      description: 'Solutions de réseau et de communication pour entreprises.'
    },
    {
      name: 'Kosc Telecom',
      src: '/partners/kosc.png',
      category: 'Réseau & Connectivité',
      description: 'Réseau de connectivity très haut débit pour entreprises.'
    },
    {
      name: 'OVHcloud',
      src: '/partners/ovh.png',
      category: 'Cloud & Sécurité',
      description: 'Leader européen du cloud et des infrastructures internet.'
    },
];

const PartnerCardSkeleton = () => (
  <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center text-center overflow-hidden">
    <div className="h-24 w-full flex items-center justify-center mb-6 bg-white/50 rounded-2xl border border-white/50 shadow-sm p-4">
      <Skeleton className="h-16 w-32 bg-slate-200" />
    </div>
    <div className="mt-auto w-full space-y-3">
      <div className="flex justify-center">
        <Skeleton className="h-5 w-24 rounded-full bg-slate-200" />
      </div>
      <Skeleton className="h-6 w-32 mx-auto bg-slate-200" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full bg-slate-100" />
        <Skeleton className="h-4 w-5/6 mx-auto bg-slate-100" />
      </div>
    </div>
  </div>
);

const PartnerCard = forwardRef<HTMLDivElement, { partner: any; index: number }>(({ partner, index }, ref) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
      
      <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center text-center overflow-hidden">
        {/* Background Highlight */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="h-24 w-full flex items-center justify-center mb-6 transition-all duration-500 p-2 bg-white/50 rounded-2xl border border-white/50 shadow-sm overflow-hidden relative"
        >
          {!imageLoaded && (
            <Skeleton className="absolute inset-4 bg-slate-200/50" />
          )}
          <img
            src={partner.src}
            alt={partner.name}
            onLoad={() => setImageLoaded(true)}
            className={`max-h-[80%] max-w-[80%] object-contain transition-all duration-700 ${imageLoaded ? 'opacity-100 grayscale group-hover:grayscale-0 group-hover:scale-110' : 'opacity-0'}`}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=f1f5f9&color=2563eb&bold=true&size=200`;
              setImageLoaded(true);
            }}
          />
        </div>
        
        <div className="mt-auto relative z-10" style={{ transform: "translateZ(30px)" }}>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-3 border border-blue-100/50">
            {partner.category}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{partner.name}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            {partner.description}
          </p>
          <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </div>
    </motion.div>
  );
});

PartnerCard.displayName = 'PartnerCard';

const PartnersGrid = () => {
  const [activeTab, setActiveTab] = useState('Tous');
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    return ['Tous', 'Réseau & Connectivité', 'Cloud & Sécurité', 'Communications'];
  }, []);

  const filteredPartners = useMemo(() => {
    if (activeTab === 'Tous') return partnersData;
    return partnersData.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <section className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0f172a] to-transparent opacity-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Nos partenaires <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">technologiques</span>
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-lg">
              Une sélection rigoureuse d'experts mondiaux pour garantir l'excellence et l'innovation de vos infrastructures numériques.
            </p>
          </motion.div>
        </div>

        <div className="mb-12 flex justify-center">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl">
            <TabsList className="flex flex-wrap h-auto bg-white/50 backdrop-blur-md p-1 rounded-2xl border border-slate-200 shadow-sm justify-center">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-6 py-2.5 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 text-sm font-medium"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {isInitialLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <PartnerCardSkeleton />
                </motion.div>
              ))
            ) : (
              filteredPartners.map((partner, index) => (
                <PartnerCard key={partner.name} partner={partner} index={index} />
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call to action section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden relative group border border-slate-800 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/30 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 group-hover:bg-cyan-600/20 transition-colors duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à transformer votre infrastructure ?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Nos experts sont à votre disposition pour vous accompagner dans le choix et l'intégration des meilleures technologies pour votre entreprise.
              </p>
            </div>
            <Link 
              to="/contact?subject=Devenir%20partenaire" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 group-hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Démarrer un projet
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersGrid;