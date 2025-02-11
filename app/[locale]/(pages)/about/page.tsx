import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function About() {
  const t = useTranslations("AboutPage");
  return <div>{t("title")}</div>;
}
