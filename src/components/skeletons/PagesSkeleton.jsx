import { Skeleton } from "@/components/ui/skeleton";

const PagesSkeleton = () => {
  return (
    <section className="container pagePadding">
      <div className="space-y-3">
        {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton
            key={index}
            className={`h-4 ${
              index % 5 === 0 ? "w-3/4" : index % 3 === 0 ? "w-2/3" : "w-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PagesSkeleton;
