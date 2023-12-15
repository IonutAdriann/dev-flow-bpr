"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "q",
          value: search,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["q"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, route, pathname, router, searchParams, query]);

  return (
    <div
      className={`background-gradient relative flex items-center gap-4 overflow-hidden rounded-[10px] ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <div className="absolute left-2">
          <Image
            src={imgSrc}
            alt="search icon"
            width={24}
            height={24}
            className="filter-grayscale cursor-pointer hover:filter-none"
          />
        </div>
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 w-full border-none bg-transparent px-8 py-2 shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <div className="absolute right-2">
          <Image
            src={imgSrc}
            alt="search icon"
            width={24}
            height={24}
            className="filter-grayscale cursor-pointer hover:filter-none"
          />
        </div>
      )}
    </div>
  );
};

export default LocalSearchbar;
