import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask-question | Code Sphere",
  description: "Ask quesiton page of Code Sphere",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div className="rounded-md bg-black bg-gradient-to-r p-8 text-white">
      <h1 className="mb-6 text-4xl font-extrabold">Ask a Question</h1>

      <div className="mt-6">
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;
