import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <section className="bg-primary text-white min-h-[calc(100vh-50px)] flex items-center sectionPadding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-center">
          {/* Content */}
          <div className="lg:w-1/2 h-full relative order-2 lg:order-1">
            <div className="absolute w-[90%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 blur-2xl rounded-full" />

            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-4 lg:gap-6 relative z-10">
              <Skeleton className="h-12 w-[90%] max-w-125 bg-white/20" />

              <div className="space-y-3 w-full">
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-[90%] bg-white/20" />
                <Skeleton className="h-4 w-[80%] bg-white/20" />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-16 w-44 rounded-md bg-white/20" />
                <Skeleton className="h-16 w-44 rounded-md bg-white/20" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-[70%] sm:w-[40%] lg:w-1/2 flex justify-center relative order-1 lg:order-2">
            <Skeleton className="w-full aspect-square rounded-3xl bg-white/20 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
