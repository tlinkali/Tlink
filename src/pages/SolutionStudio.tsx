import React from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Mic2, 
  Music, 
  Radio, 
  Headphones, 
  MessageSquare, 
  Volume2, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Smartphone,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

export const SolutionStudio = () => {
  const steps = [
    {
      number: "01",
      title: "Conseil & Planning",
      description: "Un conseiller média dédié vous accompagne dans la définition de votre stratégie de communication sonore."
    },
    {
      number: "02",
      title: "Création Artistique",
      description: "Choix de la musique (catalogue ou libre de droits), sélection de la voix et validation du texte."
    },
    {
      number: "03",
      title: "Production Studio",
      description: "Enregistrement par des comédiens professionnels et livraison du fichier prêt pour votre standard."
    }
  ];

  const useCases = [
    {
      title: "Pré-décroché",
      icon: <PhoneCall className="h-6 w-6 text-accent-cyan" />,
      description: "Soignez la première impression dès les premières secondes de l'appel."
    },
    {
      title: "Attente Musicale",
      icon: <Music className="h-6 w-6 text-accent-cyan" />,
      description: "Transformez l'attente en un moment de communication privilégié."
    },
    {
      title: "Répondeurs Mobiles",
      icon: <Smartphone className="h-6 w-6 text-accent-cyan" />,
      description: "Une image pro pour vos cadres et techniciens terrain en déplacement."
    },
    {
      title: "SVI & Call Centers",
      icon: <Users className="h-6 w-6 text-accent-cyan" />,
      description: "Optimisez le parcours client avec des menus vocaux clairs et accueillants."
    }
  ];

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
              <Mic2 className="h-4 w-4 text-accent-cyan" />
              <span className="text-white/90 text-[14px] font-semibold tracking-wider uppercase">Identité Sonore</span>
            </div>
            
            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Transformez votre Attente <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-blue">
                en Véritable Média
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Capter l'attention de vos clients au téléphone avec des annonces personnalisées et une identité sonore haute-fidélité.
            </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact?subject=Démos%20Studio%20Musical" className="px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-primary-blue/20 flex items-center gap-2">
                  Écouter nos démos
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/STUDIO-1-1766583250412.jpg?width=1200" 
                  alt="Communication Sonore" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-display font-bold text-deep-navy mb-6">
                Valorisez votre <span className="text-primary-blue">communication</span>
              </h2>
              <p className="text-lg text-muted-gray leading-relaxed mb-8">
                L'attente téléphonique est un espace de communication trop souvent négligé. Utilisez-le pour relayer vos actualités : fermetures exceptionnelles, salons, nouveaux produits ou journées portes ouvertes.
              </p>
              
              <div className="space-y-4">
                {[
                  "Annonces événementielles personnalisées",
                  "Maquettes créatives et évolutives",
                  "Musiques du commerce ou libres de droits",
                  "Comédiens professionnels (voix variées)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent-cyan" />
                    <span className="text-deep-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="text-6xl font-display font-black text-primary-blue/5 absolute top-4 right-8 select-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-bold text-deep-navy mb-4 relative z-10">{step.title}</h3>
                <p className="text-muted-gray leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Direction */}
      <section className="py-24 bg-deep-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/STUDIO-2-1766583250410.jpg?width=2000" 
            alt="Artistic Direction" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex p-3 rounded-2xl bg-accent-cyan/20 border border-accent-cyan/30 mb-8">
              <Sparkles className="h-6 w-6 text-accent-cyan" />
            </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
              Votre Identité Sonore <br />
              <span className="text-accent-cyan">sur-mesure</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Une conception haute-fidélité proposée par notre direction artistique avant production pour répondre à toutes vos exigences. Créez une image qui vous ressemble, note après note.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Volume2 className="h-8 w-8 text-accent-cyan flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Une voix</h4>
                  <p className="text-white/50 text-sm">Qui vous décrit en quelques sons et incarne vos valeurs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Music className="h-8 w-8 text-accent-cyan flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Une musique</h4>
                  <p className="text-white/50 text-sm">Qui vous raconte en quelques notes et crée la cohérence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-deep-navy mb-6">
              Des solutions pour <span className="text-primary-blue">chaque besoin</span>
            </h2>
            <p className="text-lg text-muted-gray">
              De l'accueil standard aux mobiles de vos équipes terrain, nous couvrons tous vos points de contact vocaux.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-deep-navy mb-3">{item.title}</h3>
                <p className="text-muted-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-primary-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:100px_100px] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Prêt à créer votre propre signature sonore ?
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Confiez votre image téléphonique à nos experts studio pour un accueil irréprochable.
              </p>
              <Link to="/contact?subject=Devis%20Studio%20Musical" className="inline-flex items-center gap-3 px-10 py-5 bg-deep-navy text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                Demander un devis studio
                <ArrowRight className="h-5 w-5 text-accent-cyan" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionStudio;
