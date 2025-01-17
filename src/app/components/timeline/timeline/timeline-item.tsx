"use client";

import { formatRelativeTime } from "@/app/lib/format-relative";
import { Tweet } from "@/types/tweet";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartFilled,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AvatarUser } from "../../ui/avatar";

type Props = {
  tweet: Tweet;
  hideComments?: boolean;
};

export const TimelineItem = ({ tweet, hideComments }: Props) => {
  const [liked, setLiked] = useState(tweet.liked);
  const handleLikeButton = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg --font-rubik flex w-full gap-2 border-b-2 border-[#161616] p-6 font-medium text-white">
      <div className=" flex">
        <Link href={`/me/${tweet.user.slug}`}>
          <AvatarUser isBorded={true} src={tweet.user.avatar} />
        </Link>
      </div>
      <div className="flex-1 ml-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="text-lg font-bold">
            <Link href={`/me/${tweet.user.slug}`}>{tweet.user.name}</Link>
          </div>
          <div className="text-sm font-normal text-[#72767A]">
            @{tweet.user.slug} · {formatRelativeTime(tweet.dataPost)}
          </div>
        </div>
        <div className="--font-rubik py-4 text-lg font-normal">
          {tweet.body}
        </div>
        {tweet.image && (
          <div className="w-full">
            <Image
              src={tweet.image}
              alt="post"
              width={600}
              height={400}
              quality={100}
              className="rounded-2xl object-cover"
            />
          </div>
        )}

        <div className="--font-rubik mt-6 flex gap-10 font-medium text-[#72767A]">
          {!hideComments && (
            <div className="">
              <Link href={`/tweet/${tweet.id}`}>
                <div className="inline-flex cursor-pointer items-center gap-2">
                  <FontAwesomeIcon icon={faComment} className="size-6" />
                  <div className="text-lg">{tweet.commentCounter}</div>
                </div>
              </Link>
            </div>
          )}
          <div className="">
            <div className="inline-flex cursor-pointer items-center gap-2">
              <FontAwesomeIcon icon={faRetweet} className="size-6" />
              <div className="text-lg">{tweet.retweetCount}</div>
            </div>
          </div>
          <div className="">
            <div
              onClick={handleLikeButton}
              className={`inline-flex cursor-pointer items-center gap-2 ${
                liked && "text-[#FF2549]"
              }`}
            >
              <FontAwesomeIcon
                icon={liked ? faHeartFilled : faHeart}
                className="size-6"
              />
              <div className="text-lg">{tweet.likeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
