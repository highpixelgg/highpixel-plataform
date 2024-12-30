"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

type Props = {
  user: User;
  description: string;
  url: string;
};

export const PublicityItem = ({ user, description, url }: Props) => {
  return (
    <div className="flex w-96 items-center">
      <div className="mr-2 size-10 h-14 w-36 overflow-hidden rounded-xl relative">
        <Image
          src={user.cover ?? ""}
          alt="lowracing"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <h3 className="text-white">{user.name}</h3>
        <div className="truncate text-sm text-gray-400">{description}</div>
      </div>
      <div className="ml-5 w-20 pl-2">
        <Link href={url} target="_blank">
          <Button label="Ver" size={3} />
        </Link>
      </div>
    </div>
  );
};
export const PublicityItemSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center">
      <div className="mr-2 size-10 w-36 rounded-xl bg-gray-600"></div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="h-4 w-1/4 bg-gray-600"></div>
        <div className="h-4 w-2/4 bg-gray-600"></div>
      </div>
    </div>
  );
};
