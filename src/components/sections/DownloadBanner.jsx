import DownloadBannerSkeleton from "../skeletons/DownloadBannerSkeleton";
import DownloadBtns from "./DownloadBtns";

const DownloadBanner = ({ data = {}, loading }) => {
  if (loading) return <DownloadBannerSkeleton />;

  if (!data || (!data?.title && !data?.description && !data?.image))
    return null;

  return (
    <section className="container bg-white sectionPadding">
      <div className="bg-primary text-white flex items-center p-8 rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between w-full h-full">
          <div className="lg:w-1/2 h-full relative order-2 lg:order-1">
            <div className="absolute w-[90%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 blur-2xl rounded-full" />

            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-4 lg:gap-6 relative z-10">
              <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-normal">
                {data?.title}
              </h1>

              <div
                className="rich_content lg:text-lg"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />

              <DownloadBtns />
            </div>
          </div>

          {data?.image && (
            <div className="w-[70%] lg:w-1/2 h-100 flex justify-center relative order-1 lg:order-2">
              <img
                src={data?.image}
                alt="Hero"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DownloadBanner;
