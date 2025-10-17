import React from "react";
import Image from "next/image";
import {
  InformationCircleIcon,
  CalendarDaysIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps { children: React.ReactNode; href?: string }
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </a>
    </li>
  );
}

const NAV_MENU = [
  { name: "Sobre", icon: InformationCircleIcon, href: "#sobre" },
  { name: "Programação", icon: CalendarDaysIcon, href: "#programacao" },
  { name: "Localização", icon: MapPinIcon, href: "#localizacao" },
  { name: "FAQ", icon: QuestionMarkCircleIcon, href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 960) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 transition-colors ${
        isScrolling ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <Image src="/assets/icon.png" alt="Logo" width={24} height={24} className="h-6 w-6" />
          <span className={`text-lg font-bold ${isScrolling ? "text-gray-900" : "text-white"}`}>
            Diálogos Amazônicos
          </span>
        </a>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <span className={`text-sm ${isScrolling ? "text-gray-900" : "text-white"}`}>
            18-19 Novembro 2025
          </span>
        </div>
        <button
          aria-label="Abrir menu"
          onClick={handleOpen}
          className={`ml-auto inline-block rounded p-2 lg:hidden ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-2 rounded-lg bg-white px-6 py-5 text-gray-900 lg:hidden mx-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-4 text-sm">18-19 Novembro 2025</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
