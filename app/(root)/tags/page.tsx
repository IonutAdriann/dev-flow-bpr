import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tag.actions";
import { SearchParamsProps } from "@/types";
import Link from "next/link";

const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllTags({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <h1 className="text-dark100_light900 mb-8 text-3xl font-extrabold">
        All Tags
      </h1>

      <div className="mt-8 flex items-center justify-between">
        <LocalSearchbar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags"
          otherClasses="flex-1"
        />

        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-md text-white font-semibold shadow-md"
        />
      </div>

      <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <Link
              href={`/tags/${tag._id}`}
              key={tag._id}
              className="shadow-light100_darknone"
            >
              <article className="mb-8 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 p-8 text-white">
                <div className="w-fit rounded-sm bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-1.5">
                  <p className="text-lg font-semibold text-white">{tag.name}</p>
                </div>

                <p className="mt-3.5 text-sm text-white">
                  <span className="mr-2.5 font-semibold text-yellow-300">
                    {tag.questions.length}+
                  </span>{" "}
                  Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="There are no tags yet"
            description="It seems that there are no tags yet. Be the first one to create a tag!"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Page;
