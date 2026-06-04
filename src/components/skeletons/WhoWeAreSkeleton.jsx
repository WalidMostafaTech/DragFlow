import { Skeleton } from "@/components/ui/skeleton";

const WhoWeAreSkeleton = () => {
  return (
    <section id="about">
      <div className="container sectionPadding grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Content */}
        <div className="content-center space-y-4">
          <Skeleton className="h-12 w-[70%]" />

          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                className={`h-5 ${index === 5 ? "w-[75%]" : "w-full"}`}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="h-80 md:h-102 rounded-2xl overflow-hidden">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSkeleton;
