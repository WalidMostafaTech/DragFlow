import { getPages } from "@/api/pagesServices";
import PageBanner from "@/components/sections/PageBanner";
import PagesSkeleton from "@/components/skeletons/PagesSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  const { data: page, isLoading } = useQuery({
    queryKey: ["page", "terms_conditions"],
    queryFn: () => getPages("terms_conditions"),
  });

  return (
    <main>
      <PageBanner title={t("terms.title")} />

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

export default Terms;
