import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getFooter } from "@/api/mainServices";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";
import DownloadBtns from "@/components/sections/DownloadBtns";
import SocialLinks from "@/components/sections/SocialLinks";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const { data: footerData, isLoading } = useQuery({
    queryKey: ["footer"],
    queryFn: getFooter,
  });

  if (isLoading) return <FooterSkeleton />;

  return (
    <footer className="bg-white">
      <div className="max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-center text-center gap-6">
        {footerData?.footer_logo && (
          <img
            src={footerData?.footer_logo}
            alt="logo"
            className="w-40 lg:48"
          />
        )}

        <div
          className="rich_content text-stone-600"
          dangerouslySetInnerHTML={{ __html: footerData?.footer_text }}
        />

        <DownloadBtns />

        <SocialLinks />

        <div className="flex items-center justify-center gap-2">
          <Link
            to={`/${lang}/terms`}
            className="text-primary hover:text-foreground transition"
          >
            {t("terms_of_service")}
          </Link>
          |
          <Link
            to={`/${lang}/policy`}
            className="text-primary hover:text-foreground transition"
          >
            {t("privacy_policy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
