import { getHome } from "@/api/pagesServices";
import ContactUsSection from "@/components/sections/ContactUsSection";
import DownloadBanner from "@/components/sections/DownloadBanner";
import Faqs from "@/components/sections/Faqs";
import Hero from "@/components/sections/Hero";
import StoresSlider from "@/components/sections/StoresSlider";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyUS from "@/components/sections/WhyUS";
import SeoManager from "@/utils/SeoManager";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: homeData, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: getHome,
  });

  const seo = homeData?.seo;

  return (
    <>
      <SeoManager
        title={seo?.meta_title}
        description={seo?.meta_description}
        keywords={seo?.keywords}
        canonical={seo?.canonical_url}
        ogImage={seo?.og_image_url}
      />

      <main className="bg-white">
        <Hero data={homeData?.intro} loading={isLoading} />
        <WhoWeAre data={homeData?.about_us} loading={isLoading} />
        <StoresSlider data={homeData?.warehouses} loading={isLoading} />
        <DownloadBanner data={homeData?.section_four} loading={isLoading} />
        <WhyUS data={homeData?.section_five} loading={isLoading} />
        <Faqs data={homeData?.faqs} loading={isLoading} />
        <ContactUsSection data={homeData?.contact_us} loading={isLoading} />
      </main>
    </>
  );
};

export default Home;
