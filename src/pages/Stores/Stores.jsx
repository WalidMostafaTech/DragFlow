import PageBanner from "@/components/sections/PageBanner";
import StoreCard from "@/components/cards/StoreCard";
import { useQuery } from "@tanstack/react-query";
import { getStores } from "@/api/pagesServices";
import StoresSkeleton from "@/components/skeletons/StoresSkeleton";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import SeoManager from "@/utils/SeoManager";

const Stores = () => {
  const { data: storesData, isLoading } = useQuery({
    queryKey: ["stores"],
    queryFn: getStores,
  });

  const seo = storesData?.meta?.seo;

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
        <PageBanner title={"Stores.title"} />

        <section className="container pagePadding">
          {isLoading ? (
            <StoresSkeleton />
          ) : storesData.length === 0 ? (
            <EmptyDataSection msg={"Stores.noStores"} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {storesData?.items.map((item) => (
                <StoreCard key={item.id} store={item} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Stores;
