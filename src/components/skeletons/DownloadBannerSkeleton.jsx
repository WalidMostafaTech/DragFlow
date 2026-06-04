import { Skeleton } from "@/components/ui/skeleton";

const DownloadBannerSkeleton = () => {
  return (
    <section className="container bg-white sectionPadding">
      <div className="bg-primary text-white flex items-center p-8 rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between w-full h-full">
          {/* Content */}
          <div className="lg:w-1/2 h-full relative order-2 lg:order-1">
            <div className="absolute w-[90%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 blur-2xl rounded-full" />

            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-4 lg:gap-6 relative z-10">
              <Skeleton className="h-12 w-[80%] bg-white/20" />

              <div className="w-full space-y-3">
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-[90%] bg-white/20" />
                <Skeleton className="h-4 w-[75%] bg-white/20" />
              </div>

              <div className="flex items-center gap-2" dir="ltr">
                <Skeleton className="h-16 w-44 rounded-md bg-white/20" />
                <Skeleton className="h-16 w-44 rounded-md bg-white/20" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-[70%] lg:w-1/2 h-100 flex justify-center relative order-1 lg:order-2">
            <Skeleton className="w-full h-full rounded-2xl bg-white/20 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBannerSkeleton;
