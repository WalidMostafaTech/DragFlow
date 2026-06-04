import { Skeleton } from "@/components/ui/skeleton";

const ContactSkeleton = () => {
  return (
    <div className="text-white border border-white rounded-xl p-4 content-center space-y-4">
      {/* Title */}
      <div className="space-y-3">
        <Skeleton className="h-12 w-56 bg-white/20" />
        <Skeleton className="h-6 w-72 bg-white/20" />
      </div>

      {/* Contact Items */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="bg-white p-2 rounded-lg flex items-center gap-2"
        >
          <Skeleton className="w-8 h-8 rounded-full shrink-0" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-4 w-44" />
          </div>
        </div>
      ))}

      {/* Social Icons */}
      <div className="flex flex-wrap items-center gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="w-8 h-8 rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default ContactSkeleton;
