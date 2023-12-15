import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="rounded-md bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 p-8 text-white">
      <h1 className="mb-8 text-4xl font-extrabold">Saved Questions</h1>

      <div className="mb-12 mt-11 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-14 rounded-md bg-gray-400" />
        <Skeleton className="h-14 w-28 rounded-md bg-gray-400" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton key={item} className="h-48 w-full rounded-xl bg-gray-400" />
        ))}
      </div>
    </section>
  );
};

export default Loading;
