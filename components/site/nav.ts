export type NavItem = { label: string; href: string };

// Single source of truth for primary navigation — the desktop side-nav and the
// mobile slide-down menu both read from this so labels never drift apart.
export const PRIMARY_NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "PRODUCTS", href: "/products" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export const SIDE_NAV: NavItem[] = PRIMARY_NAV;
export const MENU_NAV: NavItem[] = PRIMARY_NAV;
