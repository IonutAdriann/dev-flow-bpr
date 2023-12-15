import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <Skeleton className="h-8 w-40" />

      <Skeleton className="mb-8 mt-7 h-12 w-full" />

      <div className="mt-8 flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton key={item} className="h-36 w-full rounded-lg" />
        ))}
      </div>
    </section>
  );
};

export default Loading;
