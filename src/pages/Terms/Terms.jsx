import { getPages } from "@/api/pagesServices";
import PageBanner from "@/components/sections/PageBanner";
import PagesSkeleton from "@/components/skeletons/PagesSkeleton";
import { useQuery } from "@tanstack/react-query";

const Terms = () => {
  const { data: page, isLoading } = useQuery({
    queryKey: ["page", "terms_conditions"],
    queryFn: () => getPages("terms_conditions"),
  });

  return (
    <main>
      <PageBanner title={"الشروط و الاحكام"} />

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
