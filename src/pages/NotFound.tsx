import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, PhoneOff } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

    useEffect(() => {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
      window.dispatchEvent(new CustomEvent('page-ready'));
    }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary animate-bounce">
          <PhoneOff size={48} />
        </div>
        
        <h1 className="text-9xl font-extrabold text-primary mb-2 tracking-tighter">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Signal perdu...</h2>
        
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          La page que vous recherchez semble être hors de notre zone de couverture ou a été déplacée définitivement.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="#" onClick={() => window.history.back()} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Retour
            </Link>
          </Button>
          
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Accueil T-Link
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Visual representation of a "broken link" */}
      <div className="mt-20 opacity-20 hidden md:block">
        <svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50H150L170 30L200 70L230 50H400" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-primary" />
          <circle cx="150" cy="50" r="4" fill="currentColor" className="text-primary" />
          <circle cx="230" cy="50" r="4" fill="currentColor" className="text-primary" />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
