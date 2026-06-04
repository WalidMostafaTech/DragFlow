import { getPages } from "@/api/pagesServices";
import PageBanner from "@/components/sections/PageBanner";
import PagesSkeleton from "@/components/skeletons/PagesSkeleton";
import { useQuery } from "@tanstack/react-query";

const Policy = () => {
  const { data: page, isLoading } = useQuery({
    queryKey: ["page", "privacy_policy"],
    queryFn: () => getPages("privacy_policy"),
  });

  return (
    <main>
      <PageBanner title={"سياسة الخصوصية"} />

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
