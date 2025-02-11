import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
export default function About({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  return <div>{t("title")}</div>;
}
