import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function Contact() {
  const t = useTranslations("ContactPage");
  return <div>{t("title")}</div>;
}
