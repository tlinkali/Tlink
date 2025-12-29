import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText, Shield, Zap, Globe, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const downloads = [
  {
    title: "Brochure Fibre Optique",
    description: "Découvrez nos offres fibre ultra-rapides pour les entreprises.",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    size: "2.4 MB",
    type: "PDF"
  },
  {
    title: "Guide Téléphonie IP",
    description: "Tout savoir sur l'installation et la configuration de vos postes.",
    icon: <Phone className="w-8 h-8 text-green-500" />,
    size: "1.8 MB",
    type: "PDF"
  },
  {
    title: "Conditions Générales",
    description: "Les mentions légales et conditions d'utilisation de nos services.",
    icon: <Shield className="w-8 h-8 text-slate-500" />,
    size: "0.5 MB",
    type: "PDF"
  },
  {
    title: "Fiche Technique VPN",
    description: "Spécifications techniques de nos solutions de réseaux privés.",
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    size: "1.2 MB",
    type: "PDF"
  },
  {
    title: "Catalogue Équipements",
    description: "Liste complète des routeurs, switchs et téléphones disponibles.",
    icon: <FileText className="w-8 h-8 text-orange-500" />,
    size: "4.5 MB",
    type: "PDF"
  }
];

export default function Downloads() {
  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen bg-slate-50/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Espace Téléchargement</h1>
            <p className="text-lg text-muted-foreground">
              Retrouvez l'ensemble de nos documentations techniques, brochures commerciales et guides d'utilisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="mt-1">{item.type} • {item.size}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group hover:bg-primary hover:text-white transition-colors">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Télécharger
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/20">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Besoin d'un document spécifique ?</h2>
              <p className="opacity-90">
                Si vous ne trouvez pas le document que vous recherchez, n'hésitez pas à contacter notre support technique.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Nous contacter</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
