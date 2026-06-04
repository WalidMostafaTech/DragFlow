import { Skeleton } from "@/components/ui/skeleton";

const FooterSkeleton = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-center text-center gap-6">
        {/* Logo */}
        <Skeleton className="w-40 h-14 rounded-lg" />

        {/* Description */}
        <div className="w-full space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%] mx-auto" />
          <Skeleton className="h-4 w-[75%] mx-auto" />
        </div>

        {/* Store Buttons */}
        <div className="flex items-center gap-2" dir="ltr">
          <Skeleton className="h-16 w-44 rounded-md" />
          <Skeleton className="h-16 w-44 rounded-md" />
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="w-8 h-8 rounded-full" />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-2">
          <Skeleton className="h-5 w-28" />
          <span className="text-muted-foreground">|</span>
          <Skeleton className="h-5 w-28" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
