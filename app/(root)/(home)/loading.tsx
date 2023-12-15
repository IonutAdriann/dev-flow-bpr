import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-dark100_light900 text-3xl font-bold">
          All Questions
        </h1>
        <Link href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mb-12 mt-11 flex flex-wrap items-center justify-between gap-5">
        <Skeleton className="h-14 flex-1" />
        <div className="hidden md:block">
          <Skeleton className="h-14 w-28" />
        </div>
      </div>

      <div className="mb-10 flex flex-wrap gap-6 md:flex">
        {[1, 2, 3, 4].map((item) => (
          <Skeleton key={item} className="h-9 w-40" />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton key={item} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    </section>
  );
};

export default Loading;
