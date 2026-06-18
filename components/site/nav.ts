export type NavItem = { label: string; href: string };

// Desktop vertical side-nav (faithful to the Pencil design labels)
export const SIDE_NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "/products" },
  { label: "SERVICES", href: "/capabilities" },
  { label: "CONTACT", href: "/contact" },
];

// Links surfaced in the mobile slide-down menu + footer
export const MENU_NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "PRODUCTS", href: "/products" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];
