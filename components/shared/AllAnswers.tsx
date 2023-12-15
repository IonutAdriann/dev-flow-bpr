import React from "react";
import Filter from "./Filter";
import { AnswerFilters } from "@/constants/filters";
import { getAnswers } from "@/lib/actions/answer.action";
import Link from "next/link";
import Image from "next/image";
import { getTimestamp } from "@/lib/utils";
import ParseHTML from "./ParseHTML";
import Votes from "./Votes";
import Pagination from "./Pagination";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: number;
  filter?: string;
}

const AllAnswers = async ({
  questionId,
  userId,
  totalAnswers,
  page,
  filter,
}: Props) => {
  const result = await getAnswers({
    questionId,
    page: page ? +page : 1,
    sortBy: filter,
  });

  return (
    <div className="mt-11">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="primary-text-gradient text-3xl font-bold">
          {totalAnswers} Answers
        </h3>

        <Filter filters={AnswerFilters} />
      </div>

      <div>
        {result.answers.map((answer) => (
          <article
            key={answer._id}
            className="mb-10 overflow-hidden rounded-lg border"
          >
            <div className="flex items-center justify-between gap-5 bg-gradient-to-r from-purple-900 via-purple-900 to-blue-800 p-6 text-white">
              <Link
                href={`/profile/${answer.author.clerkId}`}
                className="flex items-center gap-2"
              >
                <Image
                  src={answer.author.picture}
                  width={36}
                  height={36}
                  alt="profile"
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">{answer.author.name}</p>
                  <p className="text-light400_light500 line-clamp-1 text-sm">
                    answered {getTimestamp(answer.createdAt)}
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <Votes
                  type="Answer"
                  itemId={JSON.stringify(answer._id)}
                  userId={JSON.stringify(userId)}
                  upvotes={answer.upvotes.length}
                  hasupVoted={answer.upvotes.includes(userId)}
                  downvotes={answer.downvotes.length}
                  hasdownVoted={answer.downvotes.includes(userId)}
                />
              </div>
            </div>
            <div className="p-6">
              <ParseHTML data={answer.content} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 w-full">
        <Pagination
          pageNumber={page ? +page : 1}
          isNext={result.isNextAnswer}
        />
      </div>
    </div>
  );
};

export default AllAnswers;
