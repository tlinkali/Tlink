import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock, User, Loader2, ShieldCheck } from "lucide-react";

export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('page-ready'));
  }, []);

    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: username.includes("@") ? username : `${username}@t-link.fr`,
          password: password,
        });
  
        if (error) {
          toast.error("Identifiants incorrects ou compte non activé");
          return;
        }
  
        toast.success("Connexion réussie");
        navigate("/admin/dashboard");
      } catch (err) {
        toast.error("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <Card className="w-full max-w-md border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
        <div className="bg-blue-600 h-2 w-full" />
        <CardHeader className="pt-10 pb-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-black text-slate-900">Administration</CardTitle>
          <CardDescription className="text-slate-500 mt-2">
            Veuillez vous identifier pour accéder au tableau de bord.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Utilisateur</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  placeholder="votre-nom"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-12 h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500/10 focus:border-blue-500 transition-all rounded-2xl"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Mot de passe</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500/10 focus:border-blue-500 transition-all rounded-2xl"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] mt-4" 
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>
          
          <p className="text-center text-slate-400 text-xs mt-8">
            © {new Date().getFullYear()} T-Link Network • Accès sécurisé
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminLogin;