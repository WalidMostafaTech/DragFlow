import { Skeleton } from "@/components/ui/skeleton";

const FaqsSkeleton = () => {
  const items = Array.from({ length: 4 });

  return (
    <section>
      <div className="container sectionPadding">
        <Skeleton className="h-12 w-64 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {/* First Column */}
          <div className="space-y-4">
            {items.map((_, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center justify-between gap-4">
                  <Skeleton className="h-5 flex-1" />
                  <Skeleton className="h-5 w-5 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            {items.map((_, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center justify-between gap-4">
                  <Skeleton className="h-5 flex-1" />
                  <Skeleton className="h-5 w-5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSkeleton;
