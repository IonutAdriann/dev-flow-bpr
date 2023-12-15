import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-700 px-4 py-8 text-white">
      <h1 className="mb-12 text-3xl font-extrabold">Tags</h1>

      <div className="mb-12 flex flex-wrap items-center justify-between gap-5">
        <Skeleton className="h-14 flex-1 rounded-md bg-white bg-opacity-20 p-4" />
        <Skeleton className="h-14 w-28 rounded-md bg-white bg-opacity-20 p-4" />
      </div>

      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton
            key={item}
            className="bg-opacity-20/20 h-60 w-full rounded-md bg-white p-4 sm:w-[260px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Loading;
