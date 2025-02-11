import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("AboutPage");
  return <div>{t("title")}</div>;
}
