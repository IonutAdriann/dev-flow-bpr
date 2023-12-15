import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div className="rounded-md bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 p-8 text-white">
      <h1 className="mb-6 text-4xl font-extrabold">Ask a Question</h1>

      <div className="mt-6">
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;
