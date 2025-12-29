import { Layout } from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PlaceholderPage = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const pageTitle = pathSegments[pathSegments.length - 1]
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()) || "Page";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Link>
        
        <div className="max-w-2xl">
          <nav className="text-sm text-muted-foreground mb-4">
            {pathSegments.map((segment, index) => (
              <span key={segment}>
                {index > 0 && " / "}
                <span className={index === pathSegments.length - 1 ? "text-foreground" : ""}>
                  {segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </span>
              </span>
            ))}
          </nav>
          
          <h1 className="text-4xl font-display font-bold mb-6">{pageTitle}</h1>
          <p className="text-muted-foreground text-lg">
            Cette page est en cours de construction. Revenez bientôt pour découvrir son contenu.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
