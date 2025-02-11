import { useTranslations } from "next-intl";
export default function Contact() {
  const t = useTranslations("ContactPage");
  return <div>{t("title")}</div>;
}
