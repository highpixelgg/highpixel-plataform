"use client";

import { Button } from "@/app/components/ui/button";
import { User } from "@/types/user";
import Link from "next/link";
import { useState } from "react";
import { AvatarUser } from "../../ui/avatar";

type Props = {
  user: User;
};

export const RecommendationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);

  const handleFollowButton = () => {
    setFollowing(true);
  };

  return (
    <div className="flex items-center">
      <Link href={`/${user.slug}`} className="object-cover mr-3">
        <AvatarUser isBorded={true} src={user.avatar} color="success" />
      </Link>
      <div className="flex-1 overflow-hidden">
        <Link
          href={`/${user.slug}`}
          className="block truncate text-sm text-white"
        >
          {user.name}
        </Link>
        <div className="truncate text-sm text-gray-400">@{user.slug}</div>
      </div>
      <div className="ml-5 w-20 pl-2">
        {!following && (
          <Button
            label="Seguir"
            onClick={handleFollowButton}
            size={4}
            background="white"
          />
        )}
      </div>
    </div>
  );
};

export const RecommendationItemSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center">
      <div className="mr-2 h-10 w-10 rounded-full bg-gray-600"></div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="h-4 w-3/4 bg-gray-600"></div>
        <div className="h-4 w-1/4 bg-gray-600"></div>
      </div>
    </div>
  );
};
