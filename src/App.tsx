import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense, lazy } from "react";
import "./index.css";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { CookieConsent } from "./components/layout/CookieConsent";
import { Preloader } from "./components/ui/Preloader";

// Lazy loading pages
const Security = lazy(() => import("./pages/Security"));
const Sante = lazy(() => import("./pages/Sante"));
const Mobile = lazy(() => import("./pages/Mobile"));
const Contact = lazy(() => import("./pages/Contact"));
const Index = lazy(() => import("./pages/Index"));
const Offres = lazy(() => import("./pages/Offres"));
const TelephonieOverview = lazy(() => import("./pages/TelephonieOverview"));
const VoipSip = lazy(() => import("./pages/VoipSip"));
const CentreAppel = lazy(() => import("./pages/CentreAppel"));
const TelephonieHebergee = lazy(() => import("./pages/TelephonieHebergee"));
const TelephonieUnifiee = lazy(() => import("./pages/TelephonieUnifiee"));
const InternetOverview = lazy(() => import("./pages/InternetOverview"));
const Xdsl = lazy(() => import("./pages/Xdsl"));
const Fibre = lazy(() => import("./pages/Fibre"));
const SolutionFibre = lazy(() => import("./pages/SolutionFibre"));
const SolutionWifi = lazy(() => import("./pages/SolutionWifi"));
const SolutionStudio = lazy(() => import("./pages/SolutionStudio"));
const Supervision = lazy(() => import("./pages/Supervision"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Vpn = lazy(() => import("./pages/Vpn"));
const PbxStandard = lazy(() => import("./pages/PbxStandard"));
const Formation = lazy(() => import("./pages/Formation"));
const Audit = lazy(() => import("./pages/Audit"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/AdminLogin").then(module => ({ default: module.AdminLogin })));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard").then(module => ({ default: module.AdminDashboard })));
const RelationClient = lazy(() => import("./pages/RelationClient"));
const TLinkOverview = lazy(() => import("./pages/TLinkOverview"));
const Societe = lazy(() => import("./pages/Societe"));
const About = lazy(() => import("./pages/About"));
const Partenaires = lazy(() => import("./pages/Partenaires"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const Engagements = lazy(() => import("./pages/Engagements"));
const Equipements = lazy(() => import("./pages/Equipements"));
const Support = lazy(() => import("./pages/Support"));

const queryClient = new QueryClient();

const PlaceholderPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Page en cours de construction</h1>
      <p className="text-slate-600">Cette page sera bientôt disponible.</p>
      <a href="/" className="mt-8 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        Retour à l'accueil
      </a>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Preloader />
            <ScrollToTop />
            <CookieConsent />
            <Suspense fallback={null}>
              <Routes>

              <Route path="/" element={<Index />} />
              
              {/* Offres */}
              <Route path="/offres" element={<Offres />} />
              <Route path="/offres/telephonie" element={<TelephonieOverview />} />
              <Route path="/offres/telephonie/voip-sip" element={<VoipSip />} />
              <Route path="/offres/telephonie/hebergee" element={<TelephonieHebergee />} />
              <Route path="/offres/telephonie/unifiee" element={<TelephonieUnifiee />} />
              <Route path="/offres/internet" element={<InternetOverview />} />
              <Route path="/offres/internet/xdsl" element={<Xdsl />} />
              <Route path="/offres/internet/fibre" element={<Fibre />} />
              <Route path="/offres/internet/vpn" element={<Vpn />} />
              <Route path="/offres/equipements" element={<Equipements />} />
              <Route path="/offres/equipements/pbx-standard" element={<PbxStandard />} />
              <Route path="/offres/equipements/centre-appel" element={<CentreAppel />} />
              <Route path="/offres/equipements/sante" element={<Sante />} />
              <Route path="/offres/equipements/securite" element={<Security />} />
              <Route path="/offres/mobile" element={<Mobile />} />
              
              {/* Solutions */}
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/fibre" element={<SolutionFibre />} />
              <Route path="/solutions/wifi" element={<SolutionWifi />} />
              <Route path="/solutions/studio-musical" element={<SolutionStudio />} />
              <Route path="/solutions/supervision" element={<Supervision />} />
              
              {/* Other pages */}
                <Route path="/audit" element={<Audit />} />
                <Route path="/relation-clients" element={<RelationClient />} />
                <Route path="/t-link" element={<TLinkOverview />} />
                  <Route path="/t-link/societe" element={<Societe />} />
                  <Route path="/a-propos" element={<About />} />
                  <Route path="/t-link/partenaires" element={<Partenaires />} />
                  <Route path="/t-link/engagements" element={<Engagements />} />
                  <Route path="/equipements" element={<Navigate to="/offres/equipements" replace />} />
                  <Route path="/equipement" element={<Navigate to="/offres/equipements" replace />} />
                    <Route path="/formation" element={<Formation />} />
                <Route path="/support" element={<Support />} />
                <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              
              {/* Admin */}
              <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />

                <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>

          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
