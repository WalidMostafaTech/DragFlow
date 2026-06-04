import { Skeleton } from "@/components/ui/skeleton";

const BlogDetailsSkeleton = () => {
  return (
    <main>
      <section className="container pagePadding space-y-4 lg:space-y-6">
        {/* Cover Image */}
        <Skeleton className="w-full h-50 md:h-75 lg:h-125 rounded-2xl" />

        {/* Title */}
        <Skeleton className="h-8 w-3/4" />

        {/* Content */}
        <div className="space-y-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              className={`h-4 ${index === 9 ? "w-2/3" : "w-full"}`}
            />
          ))}
        </div>

        {/* Share Box */}
        <div className="bg-white rounded-xl p-3 max-w-lg mx-auto border">
          <div className="flex items-center justify-center gap-4">
            <Skeleton className="h-5 w-24" />

            <div className="flex items-center gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-10 md:w-14 aspect-square rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsSkeleton;
