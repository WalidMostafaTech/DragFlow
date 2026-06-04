import PageBanner from "@/components/sections/PageBanner";
import BlogCard from "@/components/cards/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/pagesServices";
import BlogsSkeleton from "@/components/skeletons/BlogsSkeleton";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import SeoManager from "@/utils/SeoManager";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const { data: blogsData, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const seo = blogsData?.meta?.seo;
  const items = blogsData?.items || [];

  return (
    <>
      <SeoManager
        title={seo?.meta_title}
        description={seo?.meta_description}
        keywords={seo?.keywords}
        canonical={seo?.canonical_url}
        ogImage={seo?.og_image_url}
      />

      <main>
        <PageBanner title={t("blog.title")} />

        <section className="container pagePadding">
          {isLoading ? (
            <BlogsSkeleton />
          ) : items.length === 0 ? (
            <EmptyDataSection msg={t("blog.empty")} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <BlogCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Blog;
