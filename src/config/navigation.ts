export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    label: "Offres",
    href: "/offres",
    children: [
      {
        label: "Téléphonie",
        href: "/offres/telephonie",
        children: [
          { label: "Fixe VoIP / SIP", href: "/offres/telephonie/voip-sip" },
          { label: "Téléphonie hébergée", href: "/offres/telephonie/hebergee" },
          { label: "Téléphonie unifiée", href: "/offres/telephonie/unifiee" },
        ],
      },
      {
        label: "Internet",
        href: "/offres/internet",
        children: [
          { label: "xDSL", href: "/offres/internet/xdsl" },
          { label: "Fibre", href: "/offres/internet/fibre" },
          { label: "VPN", href: "/offres/internet/vpn" },
        ],
      },
      {
        label: "Équipements",
        href: "/offres/equipements",
        children: [
          { label: "PBX – Standard", href: "/offres/equipements/pbx-standard" },
          { label: "Centre d'appel", href: "/offres/equipements/centre-appel" },
          { label: "Santé", href: "/offres/equipements/sante" },
          { label: "Sécurité", href: "/offres/equipements/securite" },
        ],
      },
      { label: "Mobile", href: "/offres/mobile" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Fibre", href: "/solutions/fibre" },
      { label: "WiFi", href: "/solutions/wifi" },
      { label: "Studio musical", href: "/solutions/studio-musical" },
      { label: "Supervision", href: "/solutions/supervision" },
    ],
  },
  {
    label: "Audit",
    href: "/audit",
  },
  {
    label: "Relation Clients",
    href: "/relation-clients",
  },
  {
    label: "T-Link",
    href: "/t-link",
    children: [
      { label: "La société", href: "/t-link/societe" },
      { label: "Nos partenaires", href: "/t-link/partenaires" },
      { label: "Engagements et valeurs", href: "/t-link/engagements" },
    ],
  },
  {
    label: "Formation",
    href: "/formation",
  },
    {
      label: "Support",
      href: "https://support.tlinkoperateur.com/support/",
    },
  {
    label: "Contactez-nous",
    href: "/contact",
  },
];
