import { useState } from "react";
import { Link, useParams, useLocation } from "react-router";
import logo from "@/assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/store/modals/modalsSlice";
import DownloadBtns from "@/components/sections/DownloadBtns";
import SocialLinks from "@/components/sections/SocialLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { lang } = useParams();
  const { pathname, hash } = useLocation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settings);

  const links = [
    { name: t("Header.home"), href: `/${lang}` },
    { name: t("Header.about"), href: `/${lang}/#about` },
    { name: t("Header.stores"), href: `/${lang}/stores` },
    { name: t("Header.blog"), href: `/${lang}/blog` },
    { name: t("Header.contact"), href: `/${lang}/#contact` },
  ];

  const isActive = (href) => {
    if (href.includes("#")) {
      const hrefHash = href.split("#")[1];
      return pathname === `/${lang}` && hash === `#${hrefHash}`;
    }

    if (href === `/${lang}`) {
      return pathname === `/${lang}` && hash === "";
    }

    return pathname === href;
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link to={`/${lang}`} className="w-18">
          {settings?.header_logo && (
            <img
              loading="lazy"
              src={settings?.header_logo}
              alt="Logo"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav_link ${isActive(link.href) ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          <Button
            onClick={() =>
              dispatch(openModal({ modalName: "DownloadAppModal" }))
            }
            size="sm"
            className="rounded-full lg:px-4 lg:h-10"
          >
            {t("Header.download")}
          </Button>

          {/* Hamburger button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto flex flex-col py-2 border-t border-gray-100">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors ${
                isActive(link.href)
                  ? "text-primary bg-primary/5 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="container mx-auto flex flex-col items-center gap-3 py-4 border-t border-gray-100">
          <LanguageSwitcher />
          <DownloadBtns />
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
