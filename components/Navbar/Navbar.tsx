import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <nav className="flex justify-between items-center px-4">
      <Link href="/" className="text-xl font-black py-4 px-2">
        NextMultiLang
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/about">{t("about")}</Link>
        </li>
        <li>
          <Link href="/contact">{t("contact")}</Link>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
}
