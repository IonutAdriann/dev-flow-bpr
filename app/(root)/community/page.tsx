import UserCard from "@/components/cards/UserCard";
import Filter from "@/components/shared/Filter";
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Code Sphere",
  description: "Collections page of Code Sphere",
};

const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllUsers({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <h1 className="text-dark100_light900 mb-6 mt-8 text-4xl font-extrabold">
        Meet the Sphere Community
      </h1>

      <div className="mt-8 flex justify-between gap-6 max-sm:flex-col sm:items-center">
        <div className="relative w-full max-w-md">
          <LocalSearchbar
            route="/community"
            iconPosition="left"
            imgSrc="/assets/icons/search.svg"
            placeholder="The brightest minds are waiting for you"
            otherClasses="w-full h-12 px-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 focus:outline-none focus:ring focus:border-blue-300 shadow-md transition-all duration-300 text-white"
          />
        </div>

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-md text-white font-semibold shadow-md"
        />
      </div>

      <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="text-dark200_light800 mx-auto max-w-4xl text-center">
            <p className="paragraph-regular">We could not find any users</p>
            <Link
              href="/sign-up"
              className="paragraph-regular text-dark200_light800 mx-auto mt-4 max-w-4xl text-center font-bold text-accent-blue hover:underline"
            >
              Are you ready for new adventures? Start here!
            </Link>
          </div>
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
