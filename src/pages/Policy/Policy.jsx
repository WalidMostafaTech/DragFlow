import { getPages } from "@/api/pagesServices";
import PageBanner from "@/components/sections/PageBanner";
import PagesSkeleton from "@/components/skeletons/PagesSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const Policy = () => {
  const { t } = useTranslation();

  const { data: page, isLoading } = useQuery({
    queryKey: ["page", "privacy_policy"],
    queryFn: () => getPages("privacy_policy"),
  });

  return (
    <main>
      <PageBanner title={t("policy.title")} />

      {isLoading ? (
        <PagesSkeleton />
      ) : (
        <section className="container pagePadding">
          <div
            className="rich_content"
            dangerouslySetInnerHTML={{ __html: page }}
          />
        </section>
      )}
    </main>
  );
};

export default Policy;
