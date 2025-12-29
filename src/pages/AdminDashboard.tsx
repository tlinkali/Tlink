import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Trash2, 
  LogOut, 
  Eye, 
  Search, 
  Users, 
  MessageSquare, 
  ShieldAlert,
  Calendar,
  Menu,
  MoreVertical,
  CheckCircle2,
  Mail,
  User,
  X,
  FileText,
  TrendingUp,
  Clock,
  ExternalLink,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

interface UserSession {
  id: string;
  username: string;
  role: string;
}

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  image_url: string | null;
  is_read: boolean;
  created_at: string;
}

export function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("submissions");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // New User Form State
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('page-ready'));
  }, []);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin/login");
        return;
      }
      
      const user = {
        id: session.user.id,
        username: session.user.email?.split("@")[0] || "Admin",
        role: session.user.user_metadata?.role || "admin"
      };
      
      setCurrentUser(user);
      fetchData();
    };

    checkSession();
  }, [navigate]);

  useEffect(() => {
    const results = submissions.filter(sub => 
      sub.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.message?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSubmissions(results);
  }, [searchTerm, submissions]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: subs } = await supabase
        .from("submissions")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (subs) {
        setSubmissions(subs);
        setFilteredSubmissions(subs);
      }
    } catch (err) {
      toast.error("Erreur de chargement des données");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("submissions")
      .update({ is_read: !currentStatus })
      .eq("id", id);
    
    if (error) {
      toast.error("Erreur lors de la mise à jour");
    } else {
      setSubmissions(prev => prev.map(sub => 
        sub.id === id ? { ...sub, is_read: !currentStatus } : sub
      ));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(prev => prev ? { ...prev, is_read: !currentStatus } : null);
      }
    }
  };

  const deleteSubmission = async (id: string) => {
    if (currentUser?.role !== "admin") {
      toast.error("Action non autorisée");
      return;
    }
    const { error } = await supabase.from("submissions").delete().eq("id", id);
    if (error) toast.error("Erreur lors de la suppression");
    else {
      toast.success("Message supprimé");
      fetchData();
      if (selectedSubmission?.id === id) setSelectedSubmission(null);
    }
  };

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser?.role !== "admin") {
      toast.error("Action non autorisée");
      return;
    }
    const { error } = await supabase.from("users_management").insert([{ 
      username: newUsername, 
      password: newPassword,
      role: "user" 
    }]);
    
    if (error) toast.error("Erreur lors de la création");
    else {
      toast.success("Utilisateur créé avec succès");
      setNewUsername("");
      setNewPassword("");
      fetchData();
    }
  };

  const deleteUser = async (id: string) => {
    if (currentUser?.role !== "admin") {
      toast.error("Action non autorisée");
      return;
    }
    const { error } = await supabase.from("users_management").delete().eq("id", id);
    if (error) toast.error("Erreur lors de la suppression");
    else {
      toast.success("Utilisateur supprimé");
      fetchData();
    }
  };

  const isAdmin = currentUser?.role === "admin";
  const unreadCount = submissions.filter(s => !s.is_read).length;

  const renderSidebar = (isMobile = false) => {
    const isOpen = isMobile ? true : isSidebarOpen;
    return (
      <div className="flex flex-col h-full bg-[#1e293b] text-slate-300">
        <div className="p-6">
          <div className={cn("flex items-center gap-3 font-bold text-xl text-white", !isOpen && "justify-center")}>
            <div className="bg-blue-600 p-2 rounded-xl">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            {isOpen && <span>T-Link Admin</span>}
          </div>
        </div>

        <div className="px-4 py-4">
          <div className={cn("text-[10px] font-bold text-slate-500 uppercase tracking-widest px-4 mb-4", !isOpen && "text-center")}>
            Menu Principal
          </div>
          <nav className="space-y-1">
            <button
              onClick={() => {
                setActiveTab("submissions");
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                activeTab === "submissions" 
                  ? "bg-blue-600 text-white font-semibold shadow-lg shadow-blue-900/40" 
                  : "hover:bg-slate-800 hover:text-white",
                !isOpen && "justify-center px-0"
              )}
            >
              <MessageSquare className={cn("w-5 h-5 shrink-0 transition-colors", activeTab === "submissions" ? "text-white" : "text-slate-400 group-hover:text-white")} />
              {isOpen && (
                <>
                  <span>Messages</span>
                  {unreadCount > 0 && (
                    <span className="ml-auto bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ring-2 ring-[#1e293b]">
                      {unreadCount}
                    </span>
                  )}
                </>
              )}
              {!isOpen && unreadCount > 0 && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-[#1e293b]" />
              )}
            </button>
            
            {isAdmin && (
              <button
                onClick={() => {
                  setActiveTab("users");
                  if (isMobile) setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  activeTab === "users" 
                    ? "bg-blue-600 text-white font-semibold shadow-lg shadow-blue-900/40" 
                    : "hover:bg-slate-800 hover:text-white",
                  !isOpen && "justify-center px-0"
                )}
              >
                <Users className={cn("w-5 h-5 shrink-0 transition-colors", activeTab === "users" ? "text-white" : "text-slate-400 group-hover:text-white")} />
                {isOpen && <span>Utilisateurs</span>}
              </button>
            )}
          </nav>
        </div>

        <div className="p-4 mt-auto border-t border-slate-800">
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center gap-3 text-slate-400 hover:text-white hover:bg-red-500/10 rounded-xl px-4",
              isOpen ? "justify-start" : "justify-center px-0"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isOpen && <span>Déconnexion</span>}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <header className="md:hidden bg-[#1e293b] text-white p-4 sticky top-0 z-50 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <span>T-Link Admin</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-slate-800">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </header>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-72 z-50 transition-transform duration-300 transform md:hidden translate-x-0 shadow-2xl">
            {renderSidebar(true)}
          </aside>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className={cn(
        "transition-all duration-300 hidden md:block sticky top-0 h-screen shadow-xl z-20 overflow-hidden",
        isSidebarOpen ? "w-64" : "w-20"
      )}>
        {renderSidebar(false)}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-slate-200 h-16 sticky top-0 z-30 hidden md:block">
          <div className="h-full px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-500 hover:bg-slate-100 rounded-lg">
                <Menu className="w-5 h-5" />
              </Button>
              <nav className="flex items-center gap-2 text-sm">
                <span className="text-slate-400">Dashboard</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-900 font-semibold capitalize">{activeTab === "submissions" ? "Messages" : "Utilisateurs"}</span>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900 leading-tight">{currentUser?.username}</p>
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">{currentUser?.role}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold border border-blue-200">
                  {currentUser?.username?.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full animate-in fade-in duration-500">
          {activeTab === "submissions" ? (
            <>
              {/* Modern Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Total Messages", value: submissions.length, icon: MessageSquare, color: "blue", trend: "+12%" },
                  { label: "Non lus", value: unreadCount, icon: Mail, color: "amber", trend: "Important" },
                  { label: "Traités", value: submissions.filter(s => s.is_read).length, icon: CheckCircle2, color: "emerald", trend: "85%" },
                  { label: "Aujourd'hui", value: submissions.filter(s => new Date(s.created_at).toDateString() === new Date().toDateString()).length, icon: Clock, color: "indigo", trend: "Nouveau" }
                ].map((stat, i) => (
                  <Card key={i} className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300",
                          stat.color === "blue" ? "bg-blue-50 text-blue-600" :
                          stat.color === "amber" ? "bg-amber-50 text-amber-600" :
                          stat.color === "emerald" ? "bg-emerald-50 text-emerald-600" :
                          "bg-indigo-50 text-indigo-600"
                        )}>
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <Badge variant="secondary" className={cn(
                          "bg-transparent text-[10px] font-bold",
                          stat.color === "blue" ? "text-blue-600" :
                          stat.color === "amber" ? "text-amber-600" :
                          stat.color === "emerald" ? "text-emerald-600" :
                          "text-indigo-600"
                        )}>
                          {stat.trend}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                      </div>
                    </CardContent>
                    <div className={cn(
                      "h-1.5 w-full",
                      stat.color === "blue" ? "bg-blue-500" :
                      stat.color === "amber" ? "bg-amber-500" :
                      stat.color === "emerald" ? "bg-emerald-500" :
                      "bg-indigo-500"
                    )} />
                  </Card>
                ))}
              </div>

              {/* Filters & Actions */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <Input 
                    placeholder="Rechercher par nom, email, sujet..." 
                    className="pl-12 h-12 border-slate-200 bg-white shadow-sm rounded-2xl focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <Button 
                    variant="outline" 
                    className="h-12 bg-white flex-1 md:flex-none gap-2 rounded-2xl border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-6" 
                    onClick={fetchData}
                  >
                    <TrendingUp className="w-4 h-4" /> Actualiser
                  </Button>
                </div>
              </div>

              {/* Enhanced Table */}
              <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden bg-white rounded-3xl">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50/50">
                      <TableRow className="hover:bg-transparent border-slate-100">
                        <TableHead className="w-12"></TableHead>
                        <TableHead className="font-bold text-slate-600 py-6">Expéditeur</TableHead>
                        <TableHead className="font-bold text-slate-600 hidden lg:table-cell">Sujet</TableHead>
                        <TableHead className="font-bold text-slate-600">Aperçu</TableHead>
                        <TableHead className="font-bold text-slate-600">Reçu le</TableHead>
                        <TableHead className="text-right font-bold text-slate-600 px-8">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSubmissions.map((sub) => (
                        <TableRow 
                          key={sub.id} 
                          className={cn(
                            "group cursor-pointer transition-all duration-200 border-slate-50",
                            !sub.is_read ? "bg-blue-50/30 font-semibold" : "hover:bg-slate-50"
                          )}
                          onClick={() => setSelectedSubmission(sub)}
                        >
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-center">
                              <div 
                                className={cn(
                                  "w-2.5 h-2.5 rounded-full transition-transform duration-300",
                                  !sub.is_read ? "bg-blue-600 scale-125 shadow-[0_0_10px_rgba(37,99,235,0.4)]" : "bg-slate-200"
                                )} 
                              />
                            </div>
                          </TableCell>
                          <TableCell className="py-5">
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border",
                                !sub.is_read ? "bg-blue-600 text-white border-blue-500" : "bg-slate-100 text-slate-600 border-slate-200"
                              )}>
                                {sub.name.charAt(0).toUpperCase()}
                              </div>
                              <div className="flex flex-col min-w-[120px]">
                                <span className="text-slate-900 text-sm truncate">{sub.name}</span>
                                <span className="text-[10px] text-slate-400 font-medium truncate">{sub.email}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell max-w-[180px]">
                            <span className="text-slate-700 text-sm font-medium truncate block">{sub.subject}</span>
                          </TableCell>
                          <TableCell className="max-w-[280px]">
                            <span className="text-slate-500 truncate block text-xs leading-relaxed">{sub.message}</span>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-900">{new Date(sub.created_at).toLocaleDateString()}</span>
                              <span className="text-[10px] text-slate-400">{new Date(sub.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right px-8" onClick={(e) => e.stopPropagation()}>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white hover:shadow-md transition-all">
                                  <MoreVertical className="w-4 h-4 text-slate-400" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-2xl border-slate-100 animate-in slide-in-from-top-2 duration-200">
                                <DropdownMenuItem onClick={() => setSelectedSubmission(sub)} className="flex gap-3 rounded-xl py-2.5 cursor-pointer text-slate-700 font-medium">
                                  <Eye className="w-4 h-4 text-blue-600" /> Détails du message
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => toggleReadStatus(sub.id, sub.is_read)} className="flex gap-3 rounded-xl py-2.5 cursor-pointer text-slate-700 font-medium">
                                  {sub.is_read ? (
                                    <>
                                      <Mail className="w-4 h-4 text-slate-500" /> Marquer comme non lu
                                    </>
                                  ) : (
                                    <>
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Marquer comme lu
                                    </>
                                  )}
                                </DropdownMenuItem>
                                {isAdmin && (
                                  <>
                                    <div className="h-px bg-slate-100 my-1 mx-1" />
                                    <DropdownMenuItem 
                                      onClick={() => deleteSubmission(sub.id)}
                                      className="flex gap-3 text-red-600 rounded-xl py-2.5 focus:bg-red-50 focus:text-red-700 cursor-pointer font-medium"
                                    >
                                      <Trash2 className="w-4 h-4" /> Supprimer définitivement
                                    </DropdownMenuItem>
                                  </>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                      {filteredSubmissions.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-32 text-slate-400">
                            <div className="flex flex-col items-center gap-3">
                              <div className="bg-slate-100 p-4 rounded-full">
                                <Search className="w-8 h-8 text-slate-300" />
                              </div>
                              <p className="text-sm font-medium">Aucun résultat pour "{searchTerm}"</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <Card className="lg:col-span-2 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-3xl overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-6 px-8">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-black text-slate-900">Utilisateurs Autorisés</CardTitle>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">{users.length} Comptes</Badge>
                  </div>
                </CardHeader>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-100">
                        <TableHead className="px-8 font-bold text-slate-600">Utilisateur</TableHead>
                        <TableHead className="font-bold text-slate-600">Rôle</TableHead>
                        <TableHead className="text-right px-8 font-bold text-slate-600">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                          <TableCell className="px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                                {user.username.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-bold text-slate-900">{user.username}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={cn(
                              "rounded-lg px-2.5 py-0.5 font-bold text-[10px] uppercase",
                              user.role === "admin" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                            )}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right px-8">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50"
                              onClick={() => deleteUser(user.id)}
                              disabled={user.username === "admin"}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>

              <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-3xl overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-6 px-8">
                  <CardTitle className="text-xl font-black text-slate-900">Nouveau Compte</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={createUser} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Identifiant</label>
                      <Input 
                        placeholder="ex: jean.dupont" 
                        className="h-12 border-slate-200 rounded-2xl focus:ring-blue-500/10"
                        value={newUsername} 
                        onChange={(e) => setNewUsername(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Mot de passe</label>
                      <Input 
                        type="password" 
                        placeholder="••••••••"
                        className="h-12 border-slate-200 rounded-2xl focus:ring-blue-500/10"
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]">
                      <Plus className="w-5 h-5 mr-2" /> Créer le compte
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      {/* Modern Modal Detail */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in duration-300">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 text-white relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-none w-fit px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    Message entrant
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-black leading-tight mt-2">{selectedSubmission.subject}</h2>
                </div>
                <button 
                  onClick={() => setSelectedSubmission(null)}
                  className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-200 text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="flex items-center gap-2 text-blue-100 text-xs font-bold">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedSubmission.created_at).toLocaleDateString("fr-FR", { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2 text-blue-100 text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  {new Date(selectedSubmission.created_at).toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-8 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Expéditeur</p>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                      {selectedSubmission.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-slate-900 font-bold">{selectedSubmission.name}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Contact Email</p>
                  <a href={`mailto:${selectedSubmission.email}`} className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex items-center gap-4 group hover:bg-blue-100 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center text-blue-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-blue-700 font-bold truncate break-all">{selectedSubmission.email}</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" /> Contenu du Message
                </p>
                <div className="bg-[#f8fafc] p-6 md:p-8 rounded-[2rem] border border-slate-100 text-slate-700 leading-relaxed text-sm shadow-inner min-h-[120px]">
                  {selectedSubmission.message}
                </div>
              </div>

              {selectedSubmission.image_url && (
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Pièce jointe</p>
                  <a href={selectedSubmission.image_url} target="_blank" rel="noreferrer" className="block group relative rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-lg">
                    <img src={selectedSubmission.image_url} alt="Pièce jointe" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-10 h-10 text-white" />
                    </div>
                  </a>
                </div>
              )}
            </div>

            <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button variant="outline" onClick={() => setSelectedSubmission(null)} className="rounded-2xl px-8 h-12 w-full sm:w-auto font-bold border-slate-200 text-slate-600">
                Fermer l'aperçu
              </Button>
              <div className="flex gap-3 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  onClick={() => toggleReadStatus(selectedSubmission.id, selectedSubmission.is_read)}
                  className={cn(
                    "rounded-2xl h-12 flex-1 sm:flex-none px-6 font-bold transition-all",
                    selectedSubmission.is_read ? "border-slate-200" : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                  )}
                >
                  {selectedSubmission.is_read ? "Marquer non lu" : "Valider comme lu"}
                </Button>
                {isAdmin && (
                  <Button 
                    variant="destructive" 
                    className="rounded-2xl h-12 px-6 shadow-lg shadow-red-900/10"
                    onClick={() => {
                      if (window.confirm("Voulez-vous vraiment supprimer définitivement ce message ?")) {
                        deleteSubmission(selectedSubmission.id);
                      }
                    }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
