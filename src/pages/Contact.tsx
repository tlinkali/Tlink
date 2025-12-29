import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { 
  Mail, 
  Phone, 
  Send, 
  MapPin,
  Clock,
  CheckCircle2,
  Image as ImageIcon,
  Upload
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [searchParams] = useSearchParams();
  const [subjectValue, setSubjectValue] = React.useState("");

    const isInitialized = React.useRef(false);
  
    useEffect(() => {
      const subjectParam = searchParams.get("subject");
      if (subjectParam && !isInitialized.current) {
        setSubjectValue(subjectParam);
        isInitialized.current = true;
      }
    }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      let image_url = "";

      // 1. Upload image to Supabase Storage if exists
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `submissions/${fileName}`;

        const { error: uploadError, data: uploadData } = await supabase.storage
          .from('submissions')
          .upload(filePath, imageFile);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          // Continue without image or stop? Let's notify but try to save data
          toast.error("Erreur lors de l'envoi de l'image");
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from('submissions')
            .getPublicUrl(filePath);
          image_url = publicUrl;
        }
      }

      // 2. Save to Supabase Table
      const { error: dbError } = await supabase.from("submissions").insert([{
        name: data.nom,
        email: data.email,
        subject: data.objet,
        message: `${data.message}\n\nEntreprise: ${data.entreprise}\nFonction: ${data.fonction}\nSecteur: ${data.secteur}\nTéléphone: ${data.telephone}`,
        image_url: image_url
      }]);

      if (dbError) throw dbError;

      // 3. Optional: Web3Forms submission (as requested/fallback)
      const web3Data = {
        ...data,
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "0b26ed92-9b5e-4395-bb82-006dec1f94a9",
        from_name: "Site Web Architecte Réseau",
        subject: `Nouveau message de ${data.nom}: ${data.objet}`,
        image_url: image_url // Include Supabase image link in Web3Forms too
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(web3Data),
      });

      setIsSuccess(true);
      toast.success("Message envoyé avec succès !");
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi.");
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
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
              <span className="text-white/90 text-[14px] font-semibold tracking-wide">ASSISTANCE & PROJETS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              Contactez-nous <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
                À votre écoute
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets numériques.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
              {/* Content Column */}
              <div className="lg:col-span-1 space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-display font-bold text-[#0F172A] leading-tight">
                    Vous avez un projet en <span className="text-[#2563EB]">téléphonie ?</span>
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p className="font-medium text-[#0F172A]">
                      Vous avez un projet en téléphonie, réseau ou infrastructure ? Nous serons ravis de partager notre expertise pour vous conseiller.
                    </p>
                    <p>
                      Nous accompagnons les professionnels dans leur transformation digitale vers le passage au tout à l’IP, et avons hâte de vous rencontrer !
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF]">
                      ?
                    </span>
                    Comment nous contacter ?
                  </h3>
                  
                  <div className="space-y-6 relative">
                    <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-100" />
                    
                    {[
                      {
                        title: "Formulaire",
                        desc: "Vous remplissez le formulaire de contact sur votre droite pour nous transmettre vos coordonnées"
                      },
                      {
                        title: "Rappel Expert",
                        desc: "Un expert de votre secteur vous recontacte pour avoir une meilleure compréhension de votre projet."
                      },
                      {
                        title: "Solution sur-mesure",
                        desc: "Vous déterminez ensemble les solutions les mieux adaptées à vos besoins de connectivité réseau."
                      }
                    ].map((step, idx) => (
                      <div key={idx} className="relative pl-10 group">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center font-bold text-sm text-[#0F172A] group-hover:border-[#2DD4BF] group-hover:text-[#2DD4BF] transition-colors z-10">
                          {idx + 1}
                        </div>
                        <h4 className="font-bold text-[#0F172A] mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-slate-400">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm font-medium">01 800 900 00</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#2DD4BF] to-[#2563EB]" />
                
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-[#2DD4BF]/10 rounded-full flex items-center justify-center text-[#2DD4BF]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-[#0F172A] mb-2">Message envoyé !</h2>
                      <p className="text-slate-500 max-w-sm mx-auto">
                        Merci de nous avoir contactés. Un expert reviendra vers vous dans les plus brefs délais.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-[#2563EB] font-semibold hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h2 className="text-3xl font-display font-bold text-[#0F172A] mb-2">Envoyez-nous un message</h2>
                      <p className="text-slate-500">Remplissez le formulaire ci-dessous et nos experts reviendront vers vous.</p>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Nom et Prénom <span className="text-red-500">*</span>
                          </label>
                          <input 
                            name="nom"
                            type="text" 
                            required
                            placeholder="Jean Dupont"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Entreprise <span className="text-red-500">*</span>
                          </label>
                          <input 
                            name="entreprise"
                            type="text" 
                            required
                            placeholder="Votre société"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Fonction <span className="text-red-500">*</span>
                          </label>
                          <input 
                            name="fonction"
                            type="text" 
                            required
                            placeholder="Directeur IT, Gérant..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Secteur d'activité <span className="text-red-500">*</span>
                          </label>
                          <input 
                            name="secteur"
                            type="text" 
                            required
                            placeholder="Informatique, Santé..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Email professionnel <span className="text-red-500">*</span>
                          </label>
                          <input 
                            name="email"
                            type="email" 
                            required
                            placeholder="jean.dupont@entreprise.fr"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Numéro de téléphone <span className="text-red-500">*</span>
                          </label>
                          <input 
                            name="telephone"
                            type="tel" 
                            required
                            placeholder="06 00 00 00 00"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all"
                          />
                        </div>
                      </div>

                          <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Objet de votre demande <span className="text-red-500">*</span>
                          </label>
                          <input 
                            name="objet"
                            type="text" 
                            required
                            value={subjectValue}
                            onChange={(e) => setSubjectValue(e.target.value)}
                            placeholder="Audit réseau, Devis installation..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all"
                          />
                        </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          name="message"
                          rows={5}
                          required
                          placeholder="Dites-nous en plus sur votre projet..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 ring-[#2DD4BF]/10 focus:border-[#2DD4BF] transition-all resize-none"
                        ></textarea>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" />
                          Image / Capture d'écran (optionnel)
                        </label>
                        <div className="relative group">
                          <input 
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            id="image-upload"
                          />
                          <label 
                            htmlFor="image-upload"
                            className="flex items-center gap-3 w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl px-6 py-4 cursor-pointer hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all"
                          >
                            <Upload className="w-5 h-5 text-slate-400 group-hover:text-[#2DD4BF]" />
                            <span className="text-slate-500 group-hover:text-[#2DD4BF]">
                              {imageFile ? imageFile.name : "Cliquez pour ajouter une image"}
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-xs text-slate-400 max-w-xs">
                          En validant ce formulaire, vous acceptez notre politique de confidentialité.
                        </p>
                        <button 
                          disabled={isSubmitting}
                          className="w-full md:w-auto group relative bg-[#0F172A] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#1E293B] transition-all overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                            {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
