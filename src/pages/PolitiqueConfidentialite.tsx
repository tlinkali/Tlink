import { Layout } from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Shield, 
  Cookie, 
  Lock, 
  Mail, 
  UserCheck, 
  Eye, 
  UserX, 
  Scale, 
  FileText,
  ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";
import privacyBg from "../assets/pages/fibre/hero.jpg";

const sections = [
  { id: "utilisation", title: "1. Utilisation du site", icon: Eye },
  { id: "cookies", title: "2. Cookies", icon: Cookie },
  { id: "donnees", title: "3. Utilisation des données", icon: FileText },
  { id: "securite", title: "4. Sécurité", icon: Lock },
  { id: "spamming", title: "5. Spamming", icon: Mail },
  { id: "droits", title: "6. Droit de refus et d'accès", icon: Shield },
  { id: "fermeture", title: "7. Fermeture de compte", icon: UserX },
  { id: "mentions", title: "8. Mentions Légales", icon: Scale },
  { id: "rgpd", title: "9. RGPD", icon: UserCheck },
];

export const PolitiqueConfidentialite = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <Layout>
        <div className="min-h-screen bg-white">
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
                  <span className="text-white/90 text-[14px] font-semibold tracking-wide uppercase">Cadre Légal</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                  Charte des <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                    données personnelles
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                  Votre vie privée est notre priorité. Découvrez comment nous protégeons et gérons vos informations personnelles avec la plus grande rigueur.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-24 space-y-2">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 px-4">
                  Navigation
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            activeSection === section.id
                              ? "bg-white text-primary-blue shadow-sm ring-1 ring-slate-200"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${activeSection === section.id ? "text-primary-blue" : "text-slate-400"}`} />
                        {section.title}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-8 md:p-12">
                    <div className="prose prose-slate max-w-none prose-headings:text-primary-blue prose-a:text-primary-blue hover:prose-a:text-deep-navy prose-strong:text-slate-900">
                      <p className="lead text-lg text-slate-600 mb-12">
                        La présente Charte des données personnelles fait partie intégrante des Conditions d'utilisation du site <span className="font-semibold text-primary-blue">tlinkoperateur.com</span>. 
                      Nous nous réservons le droit de modifier la Charte à tout moment en mettant en ligne la nouvelle version. Cette nouvelle version de la Charte entrera en vigueur 15 jours après sa mise en ligne.
                    </p>

                    <Separator className="my-12" />

                    {/* Section 1 */}
                    <section id="utilisation" className="scroll-mt-24 mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                          <Eye className="w-6 h-6" />
                        </div>
                        <h2 className="m-0">1. Utilisation du site et données recueillies</h2>
                      </div>
                      <p>
                        Pour pouvoir utiliser nos services, vous devrez vous inscrire et donc, enregistrer vos données personnelles (nom, prénom, adresse e-mail, etc.).
                      </p>
                      <p>
                        Vos données personnelles sont ensuite utilisées à des fins marketing ou commerciales par le site formation/tlinkoperateur.com ou par des tiers, et/ou cédées à des tiers. Nos partenaires CPF sont des centres agrées et tous certifiés Qualiopi.
                      </p>
                      <p>
                        Si vous utilisez les services de sites partenaires et choisissez de leur communiquer vos données personnelles, vous êtes informé que la collecte et l'utilisation de vos données par ces sites sont soumises à leurs propres conditions relatives au traitement des données personnelles. Nous ne sommes pas responsables de la façon dont les sites partenaires utilisent les données personnelles.
                      </p>
                      <p>
                        Conformément aux dispositions de la loi du 6 janvier 1978 modifiée, relative à l'Informatique, aux fichiers et aux libertés (la "Loi informatique et libertés"), les traitements de données nominatives réalisés à partir du site formation/tlinkoperateur.com ont fait l'objet d'une déclaration auprès de la Commission nationale de l'informatique et des libertés (CNIL).
                      </p>
                    </section>

                    {/* Section 2 */}
                    <section id="cookies" className="scroll-mt-24 mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                          <Cookie className="w-6 h-6" />
                        </div>
                        <h2 className="m-0">2. Cookies</h2>
                      </div>
                      <p>
                        Lors de vos visites sur formation/tlinkoperateur.com, un "cookie" peut s'installer automatiquement sur votre logiciel de navigation. Ces cookies sont utilisés à des fins statistiques et de reconnaissance.
                      </p>
                      <p>
                        Les cookies sont des programmes, stockés sur votre ordinateur, ne permettant pas de vous identifier. Ils servent à enregistrer vos informations de navigation sur le site.
                      </p>
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
                        <h4 className="mt-0 text-slate-900">Gestion de vos cookies :</h4>
                        <ul className="list-none pl-0 space-y-3 mb-0">
                          {[
                            { name: "Microsoft Edge / IE", url: "https://support.microsoft.com/fr-fr/kb/278835" },
                            { name: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies" },
                            { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647?hl=fr" },
                            { name: "Apple Safari", url: "https://support.apple.com/fr-fr/HT201265" },
                          ].map((browser) => (
                            <li key={browser.name} className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-primary-blue" />
                              <a href={browser.url} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline font-medium">
                                Paramétrer sur {browser.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm italic text-slate-500">
                        Attention : le refus des cookies peut impacter le fonctionnement de certaines sections du site.
                      </p>
                    </section>

                    {/* Section 3 */}
                    <section id="donnees" className="scroll-mt-24 mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                          <FileText className="w-6 h-6" />
                        </div>
                        <h2 className="m-0">3. Utilisation des données personnelles</h2>
                      </div>
                      <p>
                        Outre les données collectées via le formulaire d'inscription, nous pouvons utiliser vos informations pour résoudre tout litige ou régler tout problème né de l'utilisation de nos services.
                      </p>
                      <p>
                        Nous utilisons vos données (e-mail, téléphone) dans le cadre de nos campagnes marketing et promotionnelles, ainsi qu'à des fins statistiques pour améliorer et personnaliser les services proposés.
                      </p>
                      <p>
                        Vous reconnaissez et acceptez que vos données puissent être transmises à des tiers sous-traitants intervenant dans la fourniture des services de formation/tlinkoperateur.com.
                      </p>
                    </section>

                    {/* Section 4 */}
                    <section id="securite" className="scroll-mt-24 mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                          <Lock className="w-6 h-6" />
                        </div>
                        <h2 className="m-0">4. Sécurité</h2>
                      </div>
                      <p>
                        Vos données personnelles sont hébergées sur des serveurs situés en France ou dans l'Union Européenne. Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données.
                      </p>
                    </section>

                    {/* Section 5 */}
                    <section id="spamming" className="scroll-mt-24 mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                          <Mail className="w-6 h-6" />
                        </div>
                        <h2 className="m-0">5. Spamming</h2>
                      </div>
                      <p>
                        L'envoi abusif de courriers électroniques non sollicités est strictement interdit. Vous vous interdisez d'enregistrer les adresses e-mail des utilisateurs sans leur accord explicite.
                      </p>
                    </section>

                    {/* Section 6 */}
                    <section id="droits" className="scroll-mt-24 mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                          <Shield className="w-6 h-6" />
                        </div>
                        <h2 className="m-0">6. Droit de refus, d'accès et de rectification</h2>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-slate-900">6.1 Droit de refus</h4>
                          <p>
                            Vous avez le droit de refuser que vos données soient utilisées ou cédées à des partenaires tiers à des fins marketing. Ce refus n'affecte en rien votre utilisation du site.
                          </p>
                        </div>
                          <div>
                            <h4 className="text-slate-900">6.2 Droit d'accès et de rectification</h4>
                            <p>
                              Vous disposez d'un droit d'accès et de rectification en envoyant un email à <a href="mailto:contact@t-link.fr" className="font-semibold">contact@t-link.fr</a>.
                            </p>
                          </div>
                        </div>
                      </section>
  
                      {/* Section 7 */}
                      <section id="fermeture" className="scroll-mt-24 mb-16">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                            <UserX className="w-6 h-6" />
                          </div>
                          <h2 className="m-0">7. Fermeture de compte</h2>
                        </div>
                        <p>
                          Vous pouvez demander la fermeture de votre compte et la suppression de vos données à tout moment par email. Nous conserverons uniquement les données légalement obligatoires pour la durée autorisée.
                        </p>
                      </section>
  
                      {/* Section 8 */}
                      <section id="mentions" className="scroll-mt-24 mb-16">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                            <Scale className="w-6 h-6" />
                          </div>
                          <h2 className="m-0">8. Mentions légales</h2>
                        </div>
                        <p>
                          L'inscription à nos services est 100% gratuite. Le site a pour objet de permettre aux utilisateurs de bénéficier d'offres de services télécoms.
                        </p>
                        <p className="font-medium text-slate-900">
                          Édition et conception du site : T-LINK NETWORK OPERATEUR
                        </p>
                      </section>

                    {/* Section 9 */}
                    <section id="rgpd" className="scroll-mt-24">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue">
                          <UserCheck className="w-6 h-6" />
                        </div>
                        <h2 className="m-0">9. RGPD</h2>
                      </div>
                      <p>
                        Conformément au règlement (UE) 2016/679 (RGPD), vous bénéficiez du respect des droits d'information, d'opposition, d'accès et de rectification.
                      </p>
                      <ul className="bg-blue-50 p-6 rounded-xl list-none pl-0 space-y-4 border border-blue-100">
                        <li className="flex gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary-blue shrink-0" />
                          <span><strong className="text-primary-blue">Droit d'information :</strong> Mise en avant claire des politiques de confidentialité sur tous nos supports.</span>
                        </li>
                        <li className="flex gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary-blue shrink-0" />
                          <span><strong className="text-primary-blue">Droit d'opposition :</strong> Formulaire de contact disponible pour exercer ce droit facilement.</span>
                        </li>
                        <li className="flex gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary-blue shrink-0" />
                          <span><strong className="text-primary-blue">Droit d'accès et rectification :</strong> Procédures simplifiées pour l'exercice de vos droits.</span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
