import React from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { 
  ExternalLink, 
  LifeBuoy, 
  MessageSquare, 
  Phone, 
  Clock,
  ShieldCheck,
  Zap,
  Ticket
} from "lucide-react";

export function Support() {
  const supportUrl = "https://support.tlinkoperateur.com/support/";

  return (
    <Layout>
      <SEO 
        title="Support & Assistance Technique | Espace Client" 
        description="Besoin d'aide ? Accédez à notre portail de support technique, créez vos tickets ou contactez nos experts par téléphone pour une assistance rapide."
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
              <span className="text-white/90 text-[14px] font-semibold tracking-wide">ESPACE CLIENT & SUPPORT</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              Assistance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                Technique Dédiée
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Nous sommes là pour vous accompagner. Accédez à notre portail de support ou contactez nos experts pour une assistance rapide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portal Card */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <Ticket className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                  Portail de Tickets
                </h2>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Pour un suivi optimal de vos demandes techniques, nous utilisons un système de ticketing centralisé. 
                  Créez vos tickets, suivez leur résolution en temps réel et accédez à l'historique de vos échanges avec nos techniciens.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    "Suivi en temps réel de vos demandes",
                    "Accès historique complet",
                    "Priorisation des urgences",
                    "Échanges directs avec les techniciens"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <ShieldCheck className="w-5 h-5 text-[#2DD4BF]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group/btn"
                >
                  Accéder au Portail Support
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Other Contacts */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#2DD4BF] rounded-full" />
                  Autres moyens de contact
                </h3>

                <div className="grid gap-6">
                  <div className="flex gap-6 p-6 rounded-3xl border border-slate-100 hover:border-primary/20 hover:bg-slate-50/50 transition-all">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Support Téléphonique</h4>
                      <p className="text-primary font-bold text-lg mb-2">04 26 78 75 35</p>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Du lundi au vendredi, 9h-18h30</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-3xl border border-slate-100 hover:border-primary/20 hover:bg-slate-50/50 transition-all">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Par Email</h4>
                      <p className="text-primary font-bold text-lg mb-2">support@t-link.fr</p>
                      <p className="text-slate-500 text-sm">Réponse moyenne en moins de 4 heures</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Besoin d'une intervention urgente ?</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Pour les pannes critiques impactant la totalité de vos services, privilégiez le contact téléphonique pour une prise en charge immédiate par notre cellule de crise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Une expertise à votre service
            </h2>
            <p className="text-slate-600">
              Nos ingénieurs et techniciens maîtrisent l'ensemble de la chaîne de valeur pour vous garantir une continuité de service maximale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Infogérance",
                desc: "Gestion complète de votre parc et infrastructures réseaux.",
                icon: LifeBuoy
              },
              {
                title: "Sécurité",
                desc: "Surveillance proactive et protection contre les cybermenaces.",
                icon: ShieldCheck
              },
              {
                title: "Conseil",
                desc: "Accompagnement dans l'évolution de vos besoins numériques.",
                icon: MessageSquare
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Support;
