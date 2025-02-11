import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
export default function Contact({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations("ContactPage");
  return <div>{t("title")}</div>;
}
